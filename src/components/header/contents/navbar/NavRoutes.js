import {AiFillHome, AiFillQuestionCircle, AiFillSkin} from "react-icons/ai";
import {BOARD, PHOTO, QNA, TODAY} from "../../../../routes/route/path";

export const NavRoutes = [
    {
        label: "홈",
        path: "/",
        icon: AiFillHome,
    },
    {
        label: "OOTD",
        path: BOARD,
        icon: AiFillSkin, // ✅ JSX 말고 컴포넌트 참조
    },
    // {
    //     label: "포토톡",
    //     path: PHOTO,
    // },
    // {
    //     label: "투데이스토리",
    //     path: TODAY,
    // },
    {
        label: "QnA",
        path: QNA,
        icon: AiFillQuestionCircle, // ✅
    },
];
