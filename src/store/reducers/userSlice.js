import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    postCount: 0,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.postCount = action.payload ? action.payload.postCount : 0;
    },
    incrementPostCount: (state) => {
      state.postCount += 1;
    },
  },
});

export const { setCurrentUser, incrementPostCount } = userSlice.actions;
export default userSlice.reducer;
