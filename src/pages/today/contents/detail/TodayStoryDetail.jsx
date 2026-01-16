import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {useScrollToTop} from "../../../../hooks/useScrollToTop";
import {useEffect, useState} from "react";
import {
    addComment,
    deleteComment,
    getTodays,
} from "../../../../store/reducers/todaySlice";
import {
    TodayStoryDetailContainer,
    TodayStoryDetailWrap,
} from "./styles/TodayStoryDetail.css";
import {Modal} from "../../../../components/common/Modal";
import {useModalState} from "../../../../hooks/useModalState";
import {Info} from "./contents/info/Info";
import {Comments} from "./contents/comments/Comments";
import {CiChat1, CiHeart} from "react-icons/ci";

const TodayStoryDetail = () => {
    const [isComment, setIsComment] = useState(false);

    const {id} = useParams();
    const user = useSelector((state) => state.login.user);
    const todays = useSelector((state) => state.today.todays);
    const currentToday = todays.find((todayId) => todayId.id === id);

    const {isOpen, handleOpen, handleClose, toggleModal} = useModalState();

    const dispatch = useDispatch();

    useScrollToTop();

    useEffect(() => {
        dispatch(getTodays());
    }, [dispatch]);

    const isVisibleComments =
        currentToday &&
        currentToday.comments &&
        currentToday.comments.length > 0;

    return (
        <TodayStoryDetailWrap>
            <TodayStoryDetailContainer>
                {currentToday && (
                    <>
                        <Info
                            currentToday={currentToday}
                            handleOpen={handleOpen}
                        />

                        {isVisibleComments && (
                            <div className="comment_header">
                                <div className="left">
                                    <p>
                                        <CiChat1 size={22} />
                                        <span>
                                            {currentToday.comments.length > 0
                                                ? currentToday.comments.length
                                                : 0}
                                        </span>
                                    </p>
                                    <p>
                                        <CiHeart size={22} />
                                        <span>
                                            {currentToday.recommend > 0
                                                ? currentToday.recommend
                                                : 0}
                                        </span>
                                    </p>
                                </div>

                                <button
                                    className="close_comment"
                                    onClick={() => setIsComment(!isComment)}
                                >
                                    {isComment ? "댓글닫기" : "댓글열기"}
                                </button>
                            </div>
                        )}

                        {isVisibleComments && isComment && (
                            <Comments currentToday={currentToday} />
                        )}
                    </>
                )}
            </TodayStoryDetailContainer>

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
        </TodayStoryDetailWrap>
    );
};

export default TodayStoryDetail;
