import moment from 'moment/moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
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
  async (photosData, { rejectWithValue }) => {
    try {
      if (!photosData) {
        throw new Error('photoData is Not Fount');
      }
      const { category, title, desc, photo, nickname } = photosData;

      const photoURL = await uploadFile(photo);

      const photoData = {
        category,
        title,
        desc,
        nickname,
        createdAt: Date.now(),
      };

      if (photoURL) {
        photoData.photo = photoURL;
      }

      const photoRef = await addDoc(collection(db, 'photos'), photoData);

      return {
        id: photoRef.id,
        ...photoData,
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

// comment (댓글)
export const addComment = createAsyncThunk(
  'photos/comment',
  async (payload, { rejectWithValue }) => {
    try {
      const { photoId, commentData } = payload;
      const photoRef = doc(db, 'photos', photoId);
      const photoDoc = await getDoc(photoRef);

      // exists 는 photoDoc가 존재하는지 여부에따라 true false 반환
      if (!photoDoc.exists()) {
        return rejectWithValue({
          errorMessage: '해당 댓글이 존재하지 않습니다.',
        });
      }

      // data() 는 photoDoc (스냅샷)안에 있는 data의 comments를 가져온다.
      const comments = photoDoc.data().comments || [];
      const updatedComments = [...comments, commentData];

      await updateDoc(photoRef, {
        comments: updatedComments,
      });

      // extraReducer 의 상태값
      return { photoId, commentData };
    } catch (error) {
      console.error(error);
      return rejectWithValue('댓글을 추가할 수 없습니다.');
    }
  }
);

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
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { photoId, commentData } = action.payload;
        const updatedPhotos = state.photos.map((photo) => {
          if (photo.id === photoId) {
            const updatedComments = [...photo.comments, commentData];
            return {
              ...photo,
              comments: updatedComments,
            };
          }
          return photo;
        });

        return {
          ...state,
          photos: updatedPhotos,
        };
      });
  },
});

export default photoSlice.reducer;
