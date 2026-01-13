import {IoIosPerson} from "react-icons/io";
import {InfoContainer} from "./styles/Info.css";
import {CiHeart, CiChat1} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {
    getBoards,
    recommendViews,
} from "../../../../../store/reducers/boardSlice";

export const Info = ({board, commentClick, handleOpen}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.login.user);

    const likeBtnClick = (boardId) => {
        if (!user) {
            handleOpen();
            return;
        }

        dispatch(recommendViews({boardId})).then(() => {
            getBoards();
        });
    };

    return (
        <InfoContainer>
            <div className="top">
                <div className="user">
                    <div className="user_img">
                        {board.profileImg ? (
                            <img src={board.profileImg} alt={board.nickname} />
                        ) : (
                            <div className="not_user_img">
                                <IoIosPerson size={24} color="#fff" />
                            </div>
                        )}
                    </div>
                    <p>{board.nickname}</p>
                </div>

                <div className="boardImg">
                    <div className="body_spec">
                        {board.height}cm / {board.weight}kg
                    </div>

                    <img src={board.photo} alt={board.nickname} />
                </div>
            </div>

            <div className="brand_area">
                <div className="brand">
                    <p>{board.brand}</p>
                </div>
            </div>

            <div className="bottom">
                <div className="btnbox">
                    <button
                        className="like"
                        onClick={() => likeBtnClick(board.id)}
                    >
                        <CiHeart size={22} />
                    </button>
                    <button onClick={commentClick}>
                        <CiChat1 size={22} />
                    </button>
                </div>

                <div className="like_comments">
                    <div className="like">
                        좋아요 <strong> {board.views}</strong>개
                    </div>
                    <span>/</span>
                    <div className="comments">
                        댓글{" "}
                        <strong>
                            {board.comments ? board.comments.length : 0}
                        </strong>
                        개
                    </div>
                </div>

                <p className="desc">{board.desc}</p>
                <p className="date">{board.createdAt}</p>
            </div>
        </InfoContainer>
    );
};
