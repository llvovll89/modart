import moment from 'moment';
import 'moment/locale/ko';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  updateDoc,
} from 'firebase/firestore';
import { db, firebaseAuth, storage } from '../../firebase/firebase';
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

export const recommendViews = createAsyncThunk(
  'todays/recommendViews',
  async (payload, { rejectWithValue }) => {
    try {
      const { todayId } = payload;
      const todayRef = doc(db, 'todays', todayId);

      await updateDoc(todayRef, {
        recommend: increment(1),
      });
    } catch (error) {
      console.error(error);
      return rejectWithValue('추천을 할 수 없습니다.');
    }
  }
);

export const incrementViews = createAsyncThunk(
  'todays/incrementViews',
  async (payload, { rejectWithValue }) => {
    try {
      const { todayId } = payload;
      const todayRef = doc(db, 'todays', todayId);

      await updateDoc(todayRef, {
        views: increment(1),
      });
    } catch (error) {
      console.error(error);
      return rejectWithValue('조회수를 업데이트 할 수 없습니다.');
    }
  }
);

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
      };

      if (photoURL) {
        todayData.photo = photoURL;
      }

      const todayRef = await addDoc(collection(db, 'todays'), todayData);

      return {
        id: todayRef.id,
        ...todayData,
      };
    } catch (error) {
      console.error(error);
      return rejectWithValue('새 게시글을 작성할 수 없습니다.');
    }
  }
);

export const addComment = createAsyncThunk(
  'todays/comment',
  async (payload, { rejectWithValue }) => {
    try {
      const { todayId, commentData } = payload;
      const todayRef = doc(db, 'todays', todayId);

      const todayDoc = await getDoc(todayRef);

      if(!todayDoc.exists()){
        return rejectWithValue({
          errorMessage: '해당 질문이 존재하지 않습니다.',
        })
      }

      const comments = todayDoc.data().comments || [];
      const updatedComments = [...comments, commentData];

      await updateDoc(todayRef, {
        comments: updatedComments,
      });

      return { todayId, commentData };

    } catch (error) {
      console.error(error);
      return rejectWithValue('댓글을 추가할 수 없습니다.');
    }
  }
);

export const editComment = createAsyncThunk('todays/editComment', async (payload, {rejectWithValue}) => {
  try {
    const { todayId, commentId, updatedCommentData } = payload;

    await updateDoc(todayRef, {
      [`comments.${commentId}`]: updatedCommentData,
    });

    return { todayId, commentId, updatedCommentData };

  } catch (error) {
    console.error(error);
    return rejectWithValue('댓글을 수정할 수 없습니다.');
  }
})

export const deleteComment = createAsyncThunk(
  'todays/deleteComment',
  async (payload, { rejectWithValue }) => {
    try {
      const { todayId, commentId } = payload
      const currentUser = firebaseAuth.currentUser;

      if (!currentUser) {
        return rejectWithValue('로그인 후에 댓글을 삭제할 수 있습니다.');
      }      

      const todayRef = doc(db, 'todays', todayId);
      const todayDoc = await getDoc(todayRef);

      if(!todayDoc.exists()){
        return rejectWithValue({
          errorMessage: '해당 질문이 존재하지 않습니다.',
        })
      }

      const comments = todayDoc.data().comments || [];
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

      await updateDoc(todayRef, {
        comments: updatedComments,
      });
      

      return { todayId, commentId };
    } catch (error) {
      console.error(error);
      return rejectWithValue('댓글을 삭제할 수 없습니다.');
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
      })
      .addCase(incrementViews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(incrementViews.fulfilled, (state, action) => {
        if (action.payload && action.payload.todayId) {
          const updatedTodays = state.todays.map((today) => {
            if (today.id === action.payload.todayId) {
              return {
                ...today,
                views: today.views + 1,
              };
            }
            return today;
          });

          return {
            ...state,
            todays: updatedTodays,
            loading: false,
          };
        }
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(recommendViews.pending, (state, action) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(recommendViews.fulfilled, (state, action) => {
        if (action.payload && action.payload.todayId) {
          const updatedTodays = state.todays.map((today) => {
            if (today.id === action.payload.todayId) {
              return {
                ...today,
                recommend: today.recommend + 1,
              };
            }
            return today;
          });

          return {
            ...state,
            todays: updatedTodays,
            loading: false,
          };
        }
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { todayId, commentData } = action.payload;

        const updatedTodays = state.todays.map((today) => {
          if (today.id === todayId) {
            const updatedComments = [...today.comments, commentData];
            return {
              ...today,
              comments: updatedComments,
            };
          }
          return today;
        });

        return {
          ...state,
          todays: updatedTodays,
        };
      })
      .addCase(editComment.fulfilled, (state, action) => {
        const { todayId, commentId, updatedCommentData } = action.payload;

        const updatedTodays = state.todays.map((today) => {
          if (today.id === todayId) {
            const updatedComments = [...today.comments];
            updatedComments[commentId] = updatedCommentData;
            return {
              ...today,
              comments: updatedComments,
            };
          }
          return today;
        });

        return {
          ...state,
          todays: updatedTodays,
        };
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        const { todayId, commentId } = action.payload;

        const updatedTodays = state.todays.map((today) => {
          if (today.id === todayId) {
            const updatedComments = today.comments.filter(
              (comment) => comment.id !== commentId
            );
            return {
              ...today,
              comments: updatedComments,
            };
          }
          return today;
        });

        return {
          ...state,
          todays: updatedTodays,
        };
      });
  },
});

export default todaysSlice.reducer;
