  import {
    createSlice,
    createAsyncThunk,
    isRejectedWithValue,
  } from '@reduxjs/toolkit';
  import {
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserLocalPersistence,
  } from 'firebase/auth';
  import { auth, db } from '../../firebase/firebase';
  import { doc, getDoc, updateDoc } from 'firebase/firestore';

  export const googleLogin = createAsyncThunk('login/googleLogin', async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const googleUser = result.user;
    console.log(googleUser);
    
    const userDocRef = doc(db, 'users', googleUser.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    return userDocSnapshot.data();
  });

  export const signIn = createAsyncThunk('auth/login', async (userData) => {
    try {
      const { email, password } = userData;
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnapshot = await getDoc(userDocRef);
      
      if (!userDocSnapshot.exists()) {
        throw new Error('회원가입을 하지 않은 유저입니다.');
      }
      return userDocSnapshot.data();
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  });


  export const signOuterUer = createAsyncThunk('auth/signOut', async () => {
    try {
      await signOut(auth);
      await setPersistence(auth, browserLocalPersistence);
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  });

  export const updateUserData = createAsyncThunk('login/updateUserData' , async (updatedData) => {
    try {
      const user = auth.currentUser;
      if(user) {
        const userDocRef = doc(db, 'users', user.uid);
        const updateFields = {
          accountEdit: updatedData,
        }
        await updateDoc(userDocRef, updateFields);
        return updatedData;
      } else {
        throw new Error('사용자를 찾을 수 없습니다.')
      }
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  })

  export const listenToAuthChanges = () => (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          dispatch({
            type: 'login/loginSuccess',
            payload: userData,
          });
          localStorage.setItem('user', JSON.stringify(userData));
        }
      } else {
        dispatch({ type: 'login/logout' });
        localStorage.removeItem('user'); 
      }
    });
  };

  const loadUserFromLocalStorage = () => {
    const userData = localStorage.getItem('user');
    if (userData) {
      return JSON.parse(userData);
    }
    return null;
  };

  const loginSlice = createSlice({
    name: 'login',
    initialState: {
      user: loadUserFromLocalStorage(),
    },
    extraReducers: (builder) => {
      // 구글 로그인과 일반 로그인
      builder.addCase(`${googleLogin.fulfilled}`, (state, action) => {
        state.user = action.payload;
      });
      builder.addCase(`${googleLogin.rejected}`, (state, action) => {
        alert('로그인 실패!');
        console.log(action.payload);
      });
      builder.addCase(`${signIn.fulfilled}`, (state, action) => {
        state.user = action.payload;
      });
      builder.addCase(`${signIn.rejected}`, (state, action) => {
        const errorMSG = action.error;
        return errorMSG;
      });
  
      // 로그아웃
      builder.addCase(`${signOuterUer.fulfilled}`, (state, action) => {
        alert('로그아웃 성공!');
        state.user = null;
      });
      builder.addCase(`${signOuterUer.rejected}`, (state, action) => {
        alert('로그아웃 실패!');
        console.log(action.payload);
      });
    },
  });
  

  export default loginSlice.reducer;
