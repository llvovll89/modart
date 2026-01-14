import Login from "../../pages/auth/login/Login";
import SignUp from "../../pages/auth/sign/SignUp";
import Account from "../../pages/auth/users/Account";
import AccountEdit from "../../pages/auth/users/AccountEdit";
import Board from "../../pages/board/Board";
import BoardDetail from "../../pages/board/contents/detail/BoardDetail";
import BoardEdit from "../../pages/board/BoardEdit";
import BoardWritePost from "../../pages/board/BoardWritePost";
import Home from "../../pages/Home/Home";
import Photo from "../../pages/photos/Photo";
import PhotoDetail from "../../pages/photos/contents/detail/PhotoDetail";
import PhotoEdit from "../../pages/photos/PhotoEdit";
import PhotoWritePost from "../../pages/photos/PhotoWritePost";
import Qna from "../../pages/qna/Qna";
import QnaDetail from "../../pages/qna/QnaDetail";
import QnaEdit from "../../pages/qna/QnaEdit";
import QnaWritePost from "../../pages/qna/QnaWritePost";
import TodayDetail from "../../pages/today/TodayDetail";
import TodayEdit from "../../pages/today/TodayEdit";
import TodayStory from "../../pages/today/TodayStory";
import TodayWritePost from "../../pages/today/TodayWritePost";
import {
    MAIN,
    ACCOUNT,
    ACCOUNT_EDIT,
    SIGN_UP,
    LOGIN,
    BOARD,
    BOARD_DETAIL,
    BOARD_EDIT,
    BOARD_WRITE,
    PHOTO,
    PHOTO_DETAIL,
    PHOTO_EDIT,
    PHOTO_WRITE,
    TODAY,
    TODAY_DETAIL,
    TODAY_EDIT,
    TODAY_WRITE,
    QNA,
    QNA_DETAIL,
    QNA_EDIT,
    QNA_WRITE,
} from "./path";

export const routes = [
    {path: MAIN, element: Home},
    {path: ACCOUNT, element: Account},
    {path: ACCOUNT_EDIT, element: AccountEdit},
    {path: SIGN_UP, element: SignUp},
    {path: LOGIN, element: Login},
    {path: BOARD, element: Board},
    {path: BOARD_WRITE, element: BoardWritePost},
    {path: BOARD_EDIT, element: BoardEdit},
    {path: PHOTO, element: Photo},
    {path: PHOTO_WRITE, element: PhotoWritePost},
    {path: PHOTO_EDIT, element: PhotoEdit},
    {path: TODAY, element: TodayStory},
    {path: TODAY_WRITE, element: TodayWritePost},
    {path: TODAY_EDIT, element: TodayEdit},
    {path: QNA, element: Qna},
    {path: QNA_WRITE, element: QnaWritePost},
    {path: QNA_EDIT, element: QnaEdit},
    {path: TODAY_DETAIL, element: TodayDetail},
    {path: BOARD_DETAIL, element: BoardDetail},
    {path: PHOTO_DETAIL, element: PhotoDetail},
    {path: QNA_DETAIL, element: QnaDetail},
];
