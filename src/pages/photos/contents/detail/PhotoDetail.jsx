import {useParams} from "react-router-dom";
import {PhotoDetailContainer, PhotoDetailWrap} from "./PhotoDetail.css";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useModalState} from "../../../../hooks/useModalState";
import {Info} from "./contents/Info";
import {Modal} from "../../../../components/common/Modal";
import {Comments} from "./contents/Comments";
import {getPhotos} from "../../../../store/reducers/photoSlice";
import {useScrollToTop} from "../../../../hooks/useScrollToTop";

const PhotoDetail = () => {
    const {id} = useParams();
    const user = useSelector((state) => state.login.user);
    const photoList = useSelector((state) => state.photo.photos);
    const [comment, setComment] = useState(false);

    const dispatch = useDispatch();

    const {isOpen, handleOpen, handleClose, toggleModal} = useModalState();
    const currentPhoto = photoList.find((photo) => photo.id === id);

    const commentClick = () => {
        if (!user) {
            handleOpen();
            return;
        }

        setComment(!comment);
    };

    useEffect(() => {
        dispatch(getPhotos());
    }, [dispatch]);

    useScrollToTop();

    return (
        <PhotoDetailWrap>
            <PhotoDetailContainer>
                {currentPhoto && (
                    <>
                        <div className="contents">
                            <Info
                                currentPhoto={currentPhoto}
                                handleOpen={handleOpen}
                                commentClick={commentClick}
                            />
                        </div>

                        {comment && currentPhoto.comments && (
                            <Comments
                                comments={currentPhoto.comments}
                                currentPhoto={currentPhoto}
                            />
                        )}
                    </>
                )}
            </PhotoDetailContainer>

            {isOpen && (
                <Modal
                    type="경고"
                    title="로그인 필요"
                    description="좋아요 및 댓글 작성을 위해서는 로그인이 필요합니다."
                    isCancel={true}
                    isConfirm={true}
                    handleClose={handleClose}
                />
            )}
        </PhotoDetailWrap>
    );
};

export default PhotoDetail;
