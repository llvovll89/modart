import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
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
        createAt: Date.now(),
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
        createAt: Date.now(),
      };
    } catch (error) {
      console.error(error);
      return rejectWithValue('새 게시글을 작성할 수 없습니다.');
    }
  }
);

export const getBoards = createAsyncThunk('boards/get', async () => {
  const querySnapshot = await getDocs(collection(db, 'boards'));
  const boardData = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    const { createAt, ...dataWithoutCreateAt } = data;
    return {
      id: doc.id,
      ...dataWithoutCreateAt,
    };
  });
  return boardData;
});

const boardSlice = createSlice({
  name: 'board',
  initialState: { boards: [], postCount: 0 },
  reducers: {
    updateBoard: (state, action) => {},
  },
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
      });
  },
});

export default boardSlice.reducer;
