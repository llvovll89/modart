import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection } from 'firebase/firestore';
import { storage } from '../../firebase/firebase';
import { ref } from 'firebase/storage';

const storageRef = ref(storage, 'todays_photos');

const uploadFile = async (file) => {
  const fileRef = ref(storageRef, file.name);
  await uploadBytes(fileRef, file);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
};

export const createData = createAsyncThunk(
  'todays/add',
  async (todaysData, { rejectWithValue }) => {
    try {
      if (!todaysData) {
        throw new Error('todaysData Not Found..');
      }

      const { title, desc, type, photo } = todaysData;
      const photoURL = await uploadFile(photo);
      const todayRef = await addDoc(collection(db, 'todays'), {
        title,
        desc,
        type,
        photo: photoURL,
        nickname,
        createdAt: Data.now(),
      });

      return {
        id: todayRef.id,
        title,
        desc,
        type,
        photo: photoURL,
        nickname,
        createdAt: Date.now(),
      };
    } catch (error) {
      console.error(error);
      return rejectWithValue('새 게시글을 작성할 수 없습니다.');
    }
  }
);

export const getTodays = createAsyncThunk('todays/get', async () => {
  moment.locale('ko');

  const querySnapshot = await getDocs(collection(db, 'todays'));
  const todaysData = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const { createdAt, ...dataWithoutCreatedAt } = data;
    let formattedTime;
    const now = moment();
    const todayTime = moment(createdAt);

    if (now.diff(todayTime, 'days') <= 1) {
      formattedTime = todayTime.fromNow();
    } else {
      formattedTime = todayTime.format('YYYY.MM.DD');
    }

    return {
      id: doc.id,
      createdAt: formattedTime,
      ...dataWithoutCreatedAt,
    };
  });

  return todaysData;
});

const todaysSlice = createSlice({
  name: 'today',
  initialState: { todays: [], postCount: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createData.fulfilled, (state, action) => {
        const newToday = action.payload;
        return {
          ...state,
          todays: [...state.photos, newToday],
          postCount: state.postCount + 1,
        };
      })
      .addCase(getTodays.fulfilled, (state, action) => {
        return {
          ...state,
          todays: action.payload,
          postCount: action.payload.length,
        };
      });
  },
});

export default todaysSlice.reducer;
