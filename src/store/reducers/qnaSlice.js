import moment from 'moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  getDocs,
  increment,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storageRef = ref(storage, 'questions_photos');

const uploadFile = async (file) => {
  if (file) {
    const fileRef = ref(storageRef, file.name);
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
  }

  return null;
};

export const incrementViews = createAsyncThunk(
  'questions/incrementViews',
  async (payload, { rejectWithValue }) => {
    try {
      const { questionId } = payload;
      const questionRef = doc(db, 'questions', questionId);

      await updateDoc(questionRef, {
        views: increment(1),
      });
    } catch (error) {
      console.error(error);
      return rejectWithValue('조회수를 업데이트할 수 없습니다.');
    }
  }
);

export const createData = createAsyncThunk(
  'question/add',
  async (questionsData, { rejectWithValue }) => {
    try {
      if (!questionsData) {
        throw new Error('qnaData is Not Fount');
      }
      const { title, desc, photo, nickname } = questionsData;

      const photoURL = await uploadFile(photo);

      const questionData = {
        title,
        desc,
        nickname,
        createdAt: Date.now(),
      };

      if (photoURL) {
        questionData.photo = photoURL;
      }

      const photoRef = await addDoc(collection(db, 'questions'), questionData);

      return {
        id: photoRef.id,
        ...questionData,
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
  const photoData = querySnapshot.docs.map((doc, index) => {
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
      number: index + 1,
      createdAt: formattedTime,
      ...dataWithoutCreatedAt,
    };
  });

  return photoData;
});

const qnaSlice = createSlice({
  name: 'qna',
  initialState: { questions: [], postCount: 0, loading: false },
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
      })
      .addCase(incrementViews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(incrementViews.fulfilled, (state, action) => {
        if (action.payload && action.payload.questionId) {
          const updatedQuestions = state.questions.map((qna) => {
            if (qna.id === action.payload.questionId) {
              // 조회수 증가된 데이터로 업데이트
              return {
                ...qna,
                views: qna.views + 1,
              };
            }
            return qna;
          });

          return {
            ...state,
            questions: updatedQuestions,
            loading: false,
          };
        }
        return {
          ...state,
          loading: false,
        };
      });
  },
});

export default qnaSlice.reducer;
