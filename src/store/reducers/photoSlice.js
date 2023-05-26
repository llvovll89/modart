import moment from 'moment/moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storageRef = ref(storage, 'photos_png');

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
  'photos/add',
  async (photoData, { rejectWithValue }) => {
    try {
      if (!photoData) {
        throw new Error('photoData is Not Fount');
      }
      const { category, title, desc, photo, nickname } = photoData;

      const photoURL = await uploadFile(photo);

      const photoRef = await addDoc(collection(db, 'photos'), {
        category,
        title,
        desc,
        photo: photoURL,
        nickname,
        createdAt: Date.now(),
      });

      return {
        id: photoRef.id,
        category,
        title,
        desc,
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

export const getPhotos = createAsyncThunk('photos/get', async () => {
  moment.locale('ko');

  const querySnapshot = await getDocs(collection(db, 'photos'));
  const photoData = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const { createdAt, ...dataWithoutCreatedAt } = data;
    let formattedTime;
    const now = moment();
    const photoTime = moment(createdAt);

    if (now.diff(photoTime, 'days') <= 1) {
      formattedTime = photoTime.fromNow();
    } else {
      formattedTime = photoTime.format('YYYY.MM.DD');
    }

    return {
      id: doc.id,
      createdAt: formattedTime,
      ...dataWithoutCreatedAt,
    };
  });

  return photoData;
});

const photoSlice = createSlice({
  name: 'photo',
  initialState: { photos: [], postCount: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createData.fulfilled, (state, action) => {
        const newPhoto = action.payload;
        return {
          ...state,
          photos: [...state.photos, newPhoto],
          postCount: state.postCount + 1,
        };
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        return {
          ...state,
          photos: action.payload,
          postCount: action.payload.length,
        };
      });
  },
});

export default photoSlice.reducer;
