import {
    createSlice,
    createAsyncThunk,
    isRejectedWithValue,
} from "@reduxjs/toolkit";
import bcrypt from "bcryptjs";
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    setPersistence,
    signOut,
    updateProfile,
} from "firebase/auth";
import {auth, db, storage} from "../../firebase/firebase";
import {deleteDoc, doc, setDoc} from "firebase/firestore";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage";

const storageRef = ref(storage, "profile_img");

const uploadFile = async (file) => {
    if (file) {
        const fileRef = ref(storageRef, file.name);
        await uploadBytes(fileRef, file);
        const fileURL = await getDownloadURL(fileRef);
        return fileURL;
    }

    return null;
};

export const signUp = createAsyncThunk(
    "auth/signUp",
    async (userData, {rejectWithValue}) => {
        try {
            const {email, password, nickname, photo} = userData;

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            const user = userCredential.user;
            const fileURL = await uploadFile(photo);

            await updateProfile(user, {
                displayName: nickname,
                photoURL: fileURL || "",
            });

            await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                nickname,
                email,
                profileImg: fileURL || "",
            });

            await sendEmailVerification(user, {
                url: `${window.location.origin}/account/login`,
                handleCodeInApp: false,
            });

            return {
                uid: user.uid,
                email,
                nickname,
                profileImg: fileURL || "",
            };
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: null,
    extraReducers: (builder) => {
        builder.addCase(signUp.fulfilled, (state, action) => {
            const {uid, email, password, nickname} = action.payload;
            return {...state, uid, password, email, nickname};
        });
        builder.addCase(signUp.rejected, (state, action) => {
            const errorMsg = action.error.message;
            return errorMsg;
        });
    },
});

export default authSlice.reducer;
