import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import loginSlice from './reducers/loginSlice';
import boardSlice from './reducers/boardSlice';
import photoSlice from './reducers/photoSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    login: loginSlice,
    users: userSlice,
    board: boardSlice,
    photo: photoSlice,
  },
});

export default store;
