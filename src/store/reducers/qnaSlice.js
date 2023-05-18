import moment from 'moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storageRef = ref(storage, 'questions_photos');

const uploadFile = async (file) => {
  const fileRef = ref(storageRef, file.name);
  await uploadBytes(fileRef, file);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
};

export const createData = createAsyncThunk(
  'question/add',
  async (qnaData, { rejectWithValue }) => {
    try {
      if (!qnaData) {
        throw new Error('qnaData is Not Fount');
      }
      const { category, title, desc, photo, nickname } = qnaData;

      const photoURL = await uploadFile(photo);

      const photoRef = await addDoc(collection(db, 'questions'), {
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

export const getQna = createAsyncThunk('question/get', async () => {
  moment.locale('ko');

  const querySnapshot = await getDocs(collection(db, 'questions'));
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

const qnaSlice = createSlice({
  name: 'qna',
  initialState: { questions: [], postCount: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createData.fulfilled, (state, action) => {
        const newQna = action.payload;
        return {
          ...state,
          questions: [...state.questions, newQna],
          postCount: state.postCount + 1,
        };
      })
      .addCase(getQna.fulfilled, (state, action) => {
        return {
          ...state,
          questions: action.payload,
          postCount: action.payload.length,
        };
      });
  },
});

export default qnaSlice.reducer;