import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import loginSlice from './reducers/loginSlice';
import boardSlice from './reducers/boardSlice';
import photoSlice from './reducers/photoSlice';
import todaySlice from './reducers/todaySlice';
 
const store = configureStore({
  reducer: {
    auth: authSlice,
    login: loginSlice,
    users: userSlice,
    board: boardSlice,
    photo: photoSlice,
    today: todaySlice,
  },
});

export default store;
