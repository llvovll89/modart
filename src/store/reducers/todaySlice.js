import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../../firebase/firebase';
import { ref } from 'firebase/storage';

const storageRef = ref(storage, 'todays_photos');

const uploadFile = async (file) => {
  const fileRef = ref(storageRef, file.name);
};

export const addData = createAsyncThunk(
  'daily/add',
  async (todaysData, { rejectWithValue }) => {
    try {
      if (!todaysData) {
        throw new Error('todaysData Not Found..');
      }

      const { title, desc, photo } = todaysData;
      const photoURL = await uploadFile(photo);
      const todayRef = await addDoc(collection(db, 'todays'), {
        title,
        desc,
        photo: photoURL,
        nickname,
        createdAt: Data.now(),
      });
    } catch (error) {}
  }
);

const todaysSlice = createSlice({
  name: 'today',
  initialState: [],
  reducers: {},
});


export default todaysSlice.reducer;