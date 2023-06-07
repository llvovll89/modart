import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bcrypt from 'bcryptjs';
import { browserLocalPersistence, createUserWithEmailAndPassword, setPersistence, signOut } from 'firebase/auth';
import { auth, db, storage } from '../../firebase/firebase';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const storageRef = ref(storage, 'profile_img');

const uploadFile = async (file) => {
  if (file) {
    const fileRef = ref(storageRef, file.name);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
  }

  return null;
};

export const signUp = createAsyncThunk('auth/signUp', async (userData) => {
  try {
    const { email, password, nickname, photo } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      hashedPassword
    );
    
    const user = userCredential.user;
    const userDocRef = doc(db, 'users', user.uid);
    const fileURL = await uploadFile(photo);

    await setDoc(userDocRef, {
      uid: user.uid,
      nickname,
      email,
      profileImg: fileURL || '',
    });

    return {
      uid: user.uid,
      email,
      nickname,
      profileImg: fileURL || '',
    };
  } catch (error) {
    throw error;
  }
});



const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      const { uid, email, password, nickname } = action.payload;
      return { ...state, uid, password, email, nickname };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      const errorMsg = action.error.message;
      return errorMsg;
    });
  },
});

export default authSlice.reducer;
