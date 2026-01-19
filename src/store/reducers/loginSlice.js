import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
    EmailAuthProvider,
    reauthenticateWithCredential,
    updatePassword,
    deleteUser,
    reauthenticateWithPopup,
    signInWithRedirect,
} from "firebase/auth";
import {auth, db, storage} from "../../firebase/firebase";
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
    setDoc,
    serverTimestamp,
} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";

export const googleLogin = createAsyncThunk(
    "login/googleLogin",
    async (_, {rejectWithValue}) => {
        try {
            const provider = new GoogleAuthProvider();
            provider.setCustomParameters({
                prompt: "select_account consent",
            });

            // Firebase 세션 정리(선택)
            await signOut(auth);

            const result = await signInWithPopup(auth, provider);
            const googleUser = result.user;

            const email = googleUser.email ?? "";
            const withdrawnRef = email
                ? doc(db, "withdrawnUsers", email)
                : null;
            const withdrawnSnap = withdrawnRef
                ? await getDoc(withdrawnRef)
                : null;

            // ✅ 탈퇴 이력이 있으면: 재가입(문서 재생성) 처리
            if (withdrawnSnap?.exists()) {
                const rejoinUserData = {
                    uid: googleUser.uid,
                    email,
                    nickname: googleUser.displayName ?? "",
                    profileImg: googleUser.photoURL ?? "",
                    rejoinedAt: serverTimestamp(),
                };

                await setDoc(doc(db, "users", googleUser.uid), rejoinUserData, {
                    merge: true,
                });
                await deleteDoc(withdrawnRef);

                return rejoinUserData;
            }

            // 일반 로그인: users 문서 없으면 생성
            const userDocRef = doc(db, "users", googleUser.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (!userDocSnapshot.exists()) {
                const newUserData = {
                    uid: googleUser.uid,
                    email,
                    nickname: googleUser.displayName ?? "",
                    profileImg: googleUser.photoURL ?? "",
                };
                await setDoc(userDocRef, newUserData);
                return newUserData;
            }

            const userData = userDocSnapshot.data();
            return {
                ...userData,
                nickname: userData.nickname ?? googleUser.displayName ?? "",
                profileImg: userData.profileImg ?? googleUser.photoURL ?? "",
            };
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const signIn = createAsyncThunk(
    "auth/login",
    async (payload, {rejectWithValue}) => {
        try {
            const {email, password} = payload;

            await setPersistence(auth, browserLocalPersistence);

            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;

            if (!user.emailVerified) {
                await signOut(auth);
                return rejectWithValue("이메일 인증 후 로그인해주세요.");
            }

            const userDocRef = doc(db, "users", user.uid);
            const userDocSnapshot = await getDoc(userDocRef);

            if (!userDocSnapshot.exists()) {
                return rejectWithValue("회원가입을 하지 않은 유저입니다.");
            }

            return userDocSnapshot.data();
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
);

export const signOutUser = createAsyncThunk(
    "auth/signOut",
    async (_, {rejectWithValue}) => {
        try {
            await signOut(auth);
            await setPersistence(auth, browserLocalPersistence);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const changePassword = createAsyncThunk(
    "auth/changePassword",
    async (payload, {rejectWithValue}) => {
        try {
            const {currentPassword, newPassword} = payload;
            const user = auth.currentUser;
            if (user) {
                const credentials = EmailAuthProvider.credential(
                    user.email,
                    currentPassword
                );

                await reauthenticateWithCredential(user, credentials);
                await updatePassword(user, newPassword);
                return "비밀번호가 성공적으로 변경되었습니다.";
            } else {
                throw new Error("사용자를 찾을 수 없습니다.");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const uploadFile = async (file) => {
    const storageRef = ref(storage, "users_photos");
    const fileRef = ref(storageRef, file.name);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
};

export const updateUserData = createAsyncThunk(
    "login/updateUserData",
    async (updatedData, {getState, rejectWithValue}) => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const currentState = getState();
                const currentUserData = currentState.login.user;

                let newData = {...updatedData};

                if (updatedData.photo) {
                    const photoURL = await uploadFile(updatedData.photo);
                    newData.photo = photoURL;
                    delete newData.photo;
                }

                const updatedUserData = {
                    ...currentUserData,
                    ...newData,
                };

                await updateDoc(userDocRef, updatedUserData);
                return updatedData;
            } else {
                throw new Error("사용자를 찾을 수 없습니다.");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const listenToAuthChanges = () => (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
        if (!user) {
            localStorage.removeItem("user");
            // 최소한 상태도 비우고 싶으면(권장) signOutUser.fulfilled 처리 로직과 맞춰주세요.
            dispatch({type: "login/logout"}); // ⚠️ reducers에 logout이 없으면 무시됩니다.
            return;
        }

        const email = user.email ?? "";

        // 1) 탈퇴 이력 있으면 재가입 처리
        if (email) {
            const withdrawnRef = doc(db, "withdrawnUsers", email);
            const withdrawnSnap = await getDoc(withdrawnRef);

            if (withdrawnSnap.exists()) {
                const rejoinUserData = {
                    uid: user.uid,
                    email,
                    nickname: user.displayName ?? "",
                    profileImg: user.photoURL ?? "",
                    rejoinedAt: serverTimestamp(),
                };

                await setDoc(doc(db, "users", user.uid), rejoinUserData, {
                    merge: true,
                });
                await deleteDoc(withdrawnRef);
            }
        }

        // 2) users 문서 보장(없으면 생성)
        const userDocRef = doc(db, "users", user.uid);
        const snap = await getDoc(userDocRef);

        if (!snap.exists()) {
            const newUserData = {
                uid: user.uid,
                email,
                nickname: user.displayName ?? "",
                profileImg: user.photoURL ?? "",
            };
            await setDoc(userDocRef, newUserData);
            localStorage.setItem("user", JSON.stringify(newUserData));
            return;
        }

        const userData = snap.data();
        localStorage.setItem("user", JSON.stringify(userData));
    });
};

export const fetchUserPosts = createAsyncThunk(
    "posts/fetchUserPosts",
    async (userId) => {
        const postsRef = collection(db, "posts");
    }
);

export const deleteAccount = createAsyncThunk(
    "auth/deleteAccount",
    async ({currentPassword} = {}, {rejectWithValue}) => {
        try {
            const user = auth.currentUser;
            if (!user) return rejectWithValue("사용자를 찾을 수 없습니다.");

            // 1) 최근 로그인 요구 대응: provider별 재인증
            const providerId = user.providerData?.[0]?.providerId;

            if (providerId === "password") {
                if (!currentPassword) {
                    return rejectWithValue(
                        "회원탈퇴를 위해 비밀번호를 다시 입력해주세요."
                    );
                }
                const cred = EmailAuthProvider.credential(
                    user.email,
                    currentPassword
                );
                await reauthenticateWithCredential(user, cred);
            } else if (providerId === "google.com") {
                await reauthenticateWithPopup(user, new GoogleAuthProvider());
            }

            // 2) 탈퇴 이력 저장(이메일 기준으로 관리하는 예시)
            if (user.email) {
                await setDoc(doc(db, "withdrawnUsers", user.email), {
                    email: user.email,
                    lastUid: user.uid,
                    withdrawnAt: serverTimestamp(),
                });
            }

            // 3) 앱의 users 문서 삭제
            await deleteDoc(doc(db, "users", user.uid));

            // 4) Auth 계정 삭제 (콘솔 Authentication에서 사라짐)
            await deleteUser(user);

            // 5) 로컬 정리
            localStorage.removeItem("user");
            return true;
        } catch (error) {
            return rejectWithValue(
                error?.message ?? "회원탈퇴에 실패했습니다."
            );
        }
    }
);

const loadUserFromLocalStorage = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
        return JSON.parse(userData);
    }
    return null;
};

const loginSlice = createSlice({
    name: "login",
    initialState: {
        user: loadUserFromLocalStorage(),
    },
    extraReducers: (builder) => {
        // 구글 로그인과 일반 로그인
        builder.addCase(googleLogin.fulfilled, (state, action) => {
            state.user = action.payload;
            state.error = null;
            localStorage.setItem("user", JSON.stringify(action.payload));
        });
        builder.addCase(googleLogin.rejected, (state, action) => {
            state.error = action.payload ?? action.error.message;
        });
        builder.addCase(signIn.fulfilled, (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        });
        builder.addCase(signIn.rejected, (state, action) => {
            state.error = action.payload ?? action.error.message;
        });

        // update유저
        builder.addCase(`${updateUserData.fulfilled}`, (state, action) => {
            state.user = {...state.user, ...action.payload};
            state.error = null;
        });
        builder.addCase(`${updateUserData.rejected}`, (state, action) => {
            state.updated = null;
            state.error = action.payload;
        });
        // 로그아웃
        builder.addCase(`${signOutUser.fulfilled}`, (state, action) => {
            alert("로그아웃 성공!");
            state.user = null;
            localStorage.removeItem("user");
        });
        builder.addCase(`${signOutUser.rejected}`, (state, action) => {
            alert("로그아웃 실패!");
            console.log(action.payload);
        });
        // 비밀번호 변경
        builder.addCase(changePassword.fulfilled, (state, action) => {
            state.error = null;
            window.alert(action.payload);
            console.log(action.payload);
        });
        builder.addCase(changePassword.rejected, (state, action) => {
            state.error = action.payload;
            console.log(action.payload);
            window.alert(action.payload);
        });
        builder.addCase(deleteAccount.fulfilled, (state, action) => {
            alert("회원탈퇴 되셨습니다.");
            state.user = null;
        });

        // 계정 삭제 실패
        builder.addCase(deleteAccount.rejected, (state, action) => {
            const errorMsg = action.error.message;
            alert(errorMsg);
        });
    },
});

export default loginSlice.reducer;
