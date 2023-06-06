import moment from 'moment/moment';
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
import { auth, db, storage } from '../../firebase/firebase';
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

export const recommendViews = createAsyncThunk('photos/recommendViews', async (payload, {rejectWithValue}) => {
  try {
    const { photoId } = payload;
    const photoRef = doc(db, 'photos', photoId);

    await updateDoc(photoRef, {
      recommend: increment(1),
    })

  } catch (error) {
    console.error(error);
    return rejectWithValue('추천을 할 수 없습니다.');
  }
})

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

export const updatedComment = createAsyncThunk('photos/updatedComment' , async (payload, {rejectWithValue}) => {
  try {
    const { photoId, updateCommentData } = payload;
    const photoRef = doc(db, 'photos', photoId);


  } catch (error) {
    
  }
})

export const deleteComment = createAsyncThunk(
  'photos/deleteComment',
  async (payload, { rejectWithValue }) => {
    try {
      const { photoId, commentId } = payload
      const currentUser = auth.currentUser;

      if (!currentUser) {
        return rejectWithValue('로그인 후에 댓글을 삭제할 수 있습니다.');
      }      

      const photoRef = doc(db, 'photos', photoId);
      const photoDoc = await getDoc(photoRef);

      if(!photoDoc.exists()){
        return rejectWithValue({
          errorMessage: '해당 질문이 존재하지 않습니다.',
        })
      }

      const comments = photoDoc.data().comments || [];
      const userData = localStorage.getItem('user');
      const parseData = JSON.parse(userData);

      const updatedComments = comments.filter((comment, index) => {
        if(index === parseInt(commentId) && comment.author === parseData.nickname) {
          return false;
        }

        return true;
      })

      if (updatedComments.length === comments.length) {
        return rejectWithValue('다른 사용자의 댓글은 삭제할 수 없습니다.');
      }

      await updateDoc(photoRef, {
        comments: updatedComments,
      });
      

      return { photoId, commentId };
    } catch (error) {
      console.error(error);
      return rejectWithValue('댓글을 삭제할 수 없습니다.');
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
      .addCase(recommendViews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(recommendViews.fulfilled, (state, action) => {
        if (action.payload && action.payload.photoId) {
          const updatedPhotos = state.photos.map((photo) => {
            if (photo.id === action.payload.photoId) {
              return {
                ...photo,
                recommend: photo.recommend + 1,
              };
            }
            return photo;
          });

          return {
            ...state,
            photos: updatedPhotos,
            loading: false,
          };
        }
        return {
          ...state,
          loading: false,
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
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const { photoId, commentId } = action.payload;

        const updatePhotos = state.photos.map((photo) => {
          if (photo.id === photoId) {
            const updatedComments = photo.comments.filter(
              (comment) => comment.id !== commentId
            );
            return {
              ...photo,
              comments: updatedComments,
            };
          }
          return photo;
        });

        return {
          ...state,
          photos: updatePhotos,
        };
      });
  },
});

export default photoSlice.reducer;
