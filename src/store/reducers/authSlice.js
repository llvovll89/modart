import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const signUp = createAsyncThunk('auth/signUp', async (userData) => {
  try {
    const { email, password, nickname } = userData;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      nickname,
      email,
    });

    return { uid: user.uid, email, nickname };
    
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: null,
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      const { uid, email, nickname } = action.payload;
      return { ...state, uid, email, nickname };
    });
    builder.addCase(signUp.rejected, (state, action) => {
      const errorMsg = action.error.message;
      return errorMsg;
    });
  },
});

export default authSlice.reducer;
