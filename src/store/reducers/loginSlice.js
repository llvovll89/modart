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
} from "firebase/auth";
import {auth, db, storage} from "../../firebase/firebase";
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";

export const googleLogin = createAsyncThunk("login/googleLogin", async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const googleUser = result.user;
    console.log(googleUser);

    const userDocRef = doc(db, "users", googleUser.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();
    return {...userData, nickname: userData.displayName};
});

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
        if (user) {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                dispatch({
                    type: "login/loginSuccess",
                    payload: userData,
                });
                localStorage.setItem("user", JSON.stringify(userData));
            }
        } else {
            dispatch({type: "auth/deleteAccount"});
            dispatch({type: "login/logout"});
            localStorage.removeItem("user");
        }
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
    async (_, {rejectWithValue}) => {
        try {
            const user = auth.currentUser;
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                await deleteDoc(userDocRef);
                await signOut(auth);
                await setPersistence(auth, browserLocalPersistence);
                return true;
            } else {
                throw new Error("사용자를 찾을 수 없습니다.");
            }
        } catch (error) {
            console.error(error);
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
        builder.addCase(`${googleLogin.fulfilled}`, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(`${googleLogin.rejected}`, (state, action) => {
            alert("로그인 실패!");
            console.log(action.payload);
        });
        builder.addCase(`${signIn.fulfilled}`, (state, action) => {
            state.user = action.payload;
        });
        builder.addCase(`${signIn.rejected}`, (state, action) => {
            const errorMSG = action.error;
            return errorMSG;
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
