import moment from 'moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storageRef = ref(storage, 'todays_photos');

const uploadFile = async (file) => {
  if (file) {
    const fileRef = ref(storageRef, file.name);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
  }

  return null;
};

export const createData = createAsyncThunk(
  'todays/add',
  async (todaysData, { rejectWithValue }) => {
    try {
      if (!todaysData) {
        throw new Error('todaysData Not Found..');
      }

      const { title, desc, type, photo, nickname } = todaysData;
      const photoURL = await uploadFile(photo);

      const todayData = {
        title,
        desc,
        type,
        nickname,
        createdAt: Date.now(),
      }

      if (photoURL) {
        todayData.photo = photoURL;
      }

      const todayRef = await addDoc(collection(db, 'todays'), todayData);

      return {
        id: todayRef.id,
        ...todayData
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
  const todaysData = querySnapshot.docs.map((doc, index) => { // index 파라미터 추가
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
      number: index + 1, 
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
          todays: [...state.todays, newToday],
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
