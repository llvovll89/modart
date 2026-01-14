import {useDispatch, useSelector} from "react-redux";
import {ListInfoContainer} from "../../../../../components/common/styles/ListInfo.css";
import {IoIosPerson} from "react-icons/io";
import {CiHeart, CiChat1} from "react-icons/ci";
import {
    getPhotos,
    recommendViews,
} from "../../../../../store/reducers/photoSlice";

export const Info = ({currentPhoto, handleOpen, commentClick}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.login.user);

    const likeBtnClick = (photoId) => {
        if (!user) {
            handleOpen();
            return;
        }

        dispatch(recommendViews({photoId})).then(() => {
            getPhotos();
        });
    };

    return (
        <ListInfoContainer>
            <div className="top">
                <div className="user">
                    <div className="user_img">
                        {currentPhoto.profileImg ? (
                            <img
                                src={currentPhoto.profileImg}
                                alt={currentPhoto.nickname}
                            />
                        ) : (
                            <div className="not_user_img">
                                <IoIosPerson size={24} color="#fff" />
                            </div>
                        )}
                    </div>
                    <p>{currentPhoto.nickname}</p>
                </div>

                <div className="imgBox">
                    <img src={currentPhoto.photo} alt={currentPhoto.nickname} />
                </div>
            </div>

            <div className="bottom">
                <div className="btnbox">
                    <button
                        className="like"
                        onClick={() => likeBtnClick(currentPhoto.id)}
                    >
                        <CiHeart size={22} fill="#FFFFFF" />
                    </button>
                    <button onClick={commentClick}>
                        <CiChat1 size={22} fill="#FFFFFF" />
                    </button>
                </div>

                <div className="like_comments">
                    <div className="like">
                        좋아요 <strong> {currentPhoto.views}</strong>개
                    </div>
                    <span>/</span>
                    <div className="comments">
                        댓글
                        <strong>
                            {currentPhoto.comments
                                ? currentPhoto.comments.length
                                : 0}
                        </strong>
                        개
                    </div>
                </div>

                <p className="desc">{currentPhoto.desc}</p>
                <p className="date">{currentPhoto.createdAt}</p>
            </div>
        </ListInfoContainer>
    );
};
