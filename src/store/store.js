import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice';
import authSlice from './reducers/authSlice';
import loginSlice from './reducers/loginSlice';
import boardSlice from './reducers/boardSlice';
import photoSlice from './reducers/photoSlice';
import todaySlice from './reducers/todaySlice';
import qnaSlice from './reducers/qnaSlice';
 
const store = configureStore({
  reducer: {
    auth: authSlice,
    login: loginSlice,
    users: userSlice,
    board: boardSlice,
    photo: photoSlice,
    today: todaySlice,
    qna: qnaSlice,
  },
});

export default store;
