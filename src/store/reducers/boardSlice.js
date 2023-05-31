import moment from 'moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  updateDoc,
} from 'firebase/firestore';
import { db, storage } from '../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const storageRef = ref(storage, 'board_photos');

const uploadFile = async (file) => {
  const fileRef = ref(storageRef, file.name);
  await uploadBytes(fileRef, file);
  const fileURL = await getDownloadURL(fileRef);
  return fileURL;
};

export const createData = createAsyncThunk(
  'boards/add',
  async (boardData, { rejectWithValue }) => {
    try {
      if (!boardData) {
        throw new Error('boardData is undefined');
      }

      const { brand, height, weight, title, desc, photo, nickname } = boardData;
      const photoURL = await uploadFile(photo);
      const boardRef = await addDoc(collection(db, 'boards'), {
        brand,
        height,
        weight,
        title,
        desc,
        photo: photoURL,
        nickname,
        createdAt: Date.now(),
      });

      return {
        id: boardRef.id,
        brand,
        height,
        weight,
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

export const recommendViews = createAsyncThunk('boards/recommendViews', async (payload, {rejectWithValue}) => {
  try {
    const { boardId } = payload;
    const boardRef = doc(db, 'boards', boardId);

    await updateDoc(boardRef, {
      recommend: increment(1),
    })

  } catch (error) {
    console.error(error);
    return rejectWithValue('추천을 할 수 없습니닷.');
  }
})

export const incrementViews = createAsyncThunk(
  'boards/incrementViews',
  async (payload, { rejectWithValue }) => {
    try {
      const { boardId } = payload;
      const boardRef = doc(db, 'boards', boardId);

      await updateDoc(boardRef, {
        views: increment(1),
      });
    } catch (error) {
      console.error(error);
      return rejectWithValue('조회수를 업데이트 할 수 없습니다.');
    }
  }
);

export const addComment = createAsyncThunk(
  'boards/comment',
  async (payload, { rejectWithValue }) => {
    try {
      const { boardId, commentData } = payload;
      const boardRef = doc(db, 'boards', boardId);
      const boardDoc = await getDoc(boardRef);

      if (!boardDoc.exists()) {
        return rejectWithValue({
          errorMessage: '해당 질문이 존재하지 않습니다.',
        });
      }

      const comments = boardDoc.data().comments || [];
      const updatedComments = [...comments, commentData];

      await updateDoc(boardRef, {
        comments: updatedComments,
      });

      return { boardId, commentData };
    } catch (error) {
      console.error(error);
      return rejectWithValue('댓글을 추가 할 수 없습니다.');
    }
  }
);

export const getBoards = createAsyncThunk('boards/get', async () => {
  moment.locale('ko');

  const querySnapshot = await getDocs(collection(db, 'boards'));
  const boardData = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const { createdAt, ...dataWithoutCreatedAt } = data;
    let formattedTime;
    const now = moment();
    const boardTime = moment(createdAt);

    if (now.diff(boardTime, 'days') <= 1) {
      formattedTime = boardTime.fromNow();
    } else {
      formattedTime = boardTime.format('YYYY.MM.DD');
    }
    return {
      id: doc.id,
      createdAt: formattedTime,
      ...dataWithoutCreatedAt,
    };
  });
  return boardData;
});

const boardSlice = createSlice({
  name: 'board',
  initialState: { boards: [], postCount: 0, loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createData.fulfilled, (state, action) => {
        const newBoard = action.payload;
        return {
          ...state,
          boards: [...state.boards, newBoard],
          postCount: state.postCount + 1,
        };
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        return {
          ...state,
          boards: action.payload,
          postCount: action.payload.length,
        };
      })
      .addCase(addComment.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { boardId, commentData } = action.payload;

        const updatedBoards = state.questions.map((board) => {
          if (board.id === boardId) {
            const comments = board.comments || [];

            return {
              ...board,
              comments: [...board.comments, commentData],
            };
          }
          return board;
        });

        return {
          ...state,
          boards: updatedBoards,
          loading: false,
        };
      })
      .addCase(incrementViews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(incrementViews.fulfilled, (state, action) => {
        if (action.payload && action.payload.boardId) {
          const updatedBoards = state.boards.map((ootd) => {
            if (ootd.id === action.payload.boardId) {
              return {
                ...ootd,
                views: ootd.views + 1,
              };
            }
            return ootd;
          });

          return {
            ...state,
            boards: updatedBoards,
            loading: false,
          };
        }
      })
      .addCase(recommendViews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(recommendViews.fulfilled, (state, action) => {
        if (action.payload && action.payload.boardId) {
          const updatedBoards = state.boards.map((ootd) => {
            if (ootd.id === action.payload.boardId) {
              return {
                ...ootd,
                recommend: ootd.recommend + 1,
              };
            }
            return ootd;
          });

          return {
            ...state,
            boards: updatedBoards,
            loading: false,
          };
        }
        return {
          ...state,
          loading: false,
        };
      })
  },
});

export default boardSlice.reducer;
