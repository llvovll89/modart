import moment from "moment";
import "moment/locale/ko";
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    increment,
    updateDoc,
    runTransaction,
} from "firebase/firestore";
import {db, storage} from "../../firebase/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

const storageRef = ref(storage, "board_photos");

const makeUniqueFileName = (file) => {
    const safeName = (file?.name || "image").replace(/\s+/g, "_");
    const ext = safeName.includes(".") ? safeName.split(".").pop() : "";
    const base = safeName.replace(/\.[^/.]+$/, "");
    const uid =
        typeof crypto !== "undefined" && crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}_${Math.random().toString(16).slice(2)}`;

    return ext ? `${base}_${uid}.${ext}` : `${base}_${uid}`;
};

const uploadFile = async (file) => {
    if (!file) return null;
    const fileRef = ref(storageRef, makeUniqueFileName(file)); // ✅ 덮어쓰기 방지
    await uploadBytes(fileRef, file);
    const fileURL = await getDownloadURL(fileRef);
    return fileURL;
};
export const createData = createAsyncThunk(
    "boards/add",
    async (boardsData, {rejectWithValue}) => {
        try {
            if (!boardsData) {
                throw new Error("boardData is undefined");
            }

            // ✅ photos 배열 우선, 없으면 기존 photo(단일)도 호환
            const photoFiles = Array.isArray(boardsData.photos)
                ? boardsData.photos.filter(Boolean)
                : boardsData.photo
                  ? [boardsData.photo]
                  : [];

            const {brand, height, weight, title, desc, nickname} = boardsData;

            // ✅ 여러 장 업로드
            const photoURLs =
                photoFiles.length > 0
                    ? (await Promise.all(photoFiles.map(uploadFile))).filter(
                          Boolean,
                      )
                    : [];

            const boardData = {
                brand, // brand 배열/문자열 모두 가능 (지금은 배열 쓰는 방향)
                height,
                weight,
                title,
                desc,
                nickname,
                createdAt: Date.now(),
            };

            // ✅ 멀티 저장 + 대표 이미지(기존 UI 호환)
            if (photoURLs.length > 0) {
                boardData.photos = photoURLs; // 여러 장
                boardData.photo = photoURLs[0]; // 대표 1장
            } else {
                boardData.photos = [];
            }

            const boardRef = await addDoc(collection(db, "boards"), boardData);

            return {
                id: boardRef.id,
                ...boardData,
            };
        } catch (error) {
            console.error(error);
            return rejectWithValue("새 게시글을 작성할 수 없습니다.");
        }
    },
);

export const recommendViews = createAsyncThunk(
    "boards/recommendViews",
    async (payload, {rejectWithValue}) => {
        try {
            const {boardId, userId} = payload;
            if (!boardId || !userId) {
                return rejectWithValue("필수 값이 누락되었습니다.");
            }

            const boardRef = doc(db, "boards", boardId);

            await runTransaction(db, async (tx) => {
                const snap = await tx.get(boardRef);
                if (!snap.exists())
                    throw new Error("게시물이 존재하지 않습니다.");

                const data = snap.data();
                const recommendedUsers = Array.isArray(data.recommendedUsers)
                    ? data.recommendedUsers
                    : [];

                if (recommendedUsers.includes(userId)) {
                    throw new Error("ALREADY_LIKED");
                }

                tx.update(boardRef, {
                    recommend: increment(1),
                    recommendedUsers: [...recommendedUsers, userId],
                });
            });

            return {boardId, userId};
        } catch (error) {
            if (error?.message === "ALREADY_LIKED") {
                return rejectWithValue("이미 좋아요를 누르셨습니다.");
            }
            console.error(error);
            return rejectWithValue("추천을 할 수 없습니닷.");
        }
    },
);

export const incrementViews = createAsyncThunk(
    "boards/incrementViews",
    async (payload, {rejectWithValue}) => {
        try {
            const {boardId} = payload;
            const boardRef = doc(db, "boards", boardId);

            await updateDoc(boardRef, {
                views: increment(1),
            });
        } catch (error) {
            console.error(error);
            return rejectWithValue("조회수를 업데이트 할 수 없습니다.");
        }
    },
);

export const addComment = createAsyncThunk(
    "boards/comment",
    async (payload, {rejectWithValue}) => {
        try {
            const {boardId, commentData} = payload;
            const boardRef = doc(db, "boards", boardId);
            const boardDoc = await getDoc(boardRef);

            if (!boardDoc.exists()) {
                return rejectWithValue({
                    errorMessage: "해당 질문이 존재하지 않습니다.",
                });
            }

            const comments = boardDoc.data().comments || [];
            const updatedComments = [...comments, commentData];

            await updateDoc(boardRef, {
                comments: updatedComments,
            });

            return {boardId, commentData};
        } catch (error) {
            console.error(error);
            return rejectWithValue("댓글을 추가 할 수 없습니다.");
        }
    },
);

export const getBoards = createAsyncThunk("boards/get", async () => {
    moment.locale("ko");

    const querySnapshot = await getDocs(collection(db, "boards"));
    const boardData = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const {createdAt, ...dataWithoutCreatedAt} = data;
        let formattedTime;
        const now = moment();
        const boardTime = moment(createdAt);

        if (now.diff(boardTime, "days") <= 1) {
            formattedTime = boardTime.fromNow();
        } else {
            formattedTime = boardTime.format("YYYY.MM.DD");
        }
        return {
            id: doc.id,
            createdAt: formattedTime,
            ...dataWithoutCreatedAt,
        };
    });
    return boardData;
});

export const updateBoard = createAsyncThunk(
    "boards/update",
    async (payload, {rejectWithValue}) => {
        try {
            const {boardId, updates, keepPhotos, newPhotos} = payload;

            if (!boardId) throw new Error("boardId is required");

            const keep = Array.isArray(keepPhotos)
                ? keepPhotos.filter(Boolean)
                : [];
            const files = Array.isArray(newPhotos)
                ? newPhotos.filter(Boolean)
                : [];

            const uploaded =
                files.length > 0
                    ? (await Promise.all(files.map(uploadFile))).filter(Boolean)
                    : [];

            const nextPhotos = [...keep, ...uploaded];
            const nextPhoto = nextPhotos[0] ?? null;

            const boardRef = doc(db, "boards", boardId);

            await updateDoc(boardRef, {
                ...updates,
                photos: nextPhotos,
                photo: nextPhoto,
                updatedAt: Date.now(),
            });

            return {boardId};
        } catch (error) {
            console.error(error);
            return rejectWithValue("게시글 수정에 실패했습니다.");
        }
    },
);

const boardSlice = createSlice({
    name: "board",
    initialState: {boards: [], postCount: 0, loading: false},
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
                const {boardId, commentData} = action.payload;

                const updatedBoards = state.boards.map((board) => {
                    if (board.id === boardId) {
                        const comments = board.comments || [];

                        return {
                            ...board,
                            comments: [...comments, commentData],
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
            .addCase(updateBoard.fulfilled, (state, action) => {
                const {boardId} = action.payload;
                const updatedBoards = state.boards.map((board) => {
                    if (board.id === boardId) {
                        return {
                            ...board,
                            ...action.payload.updates,
                        };
                    }
                    return board;
                });

                return {
                    ...state,
                    boards: updatedBoards,
                };
            });
    },
});

export default boardSlice.reducer;
