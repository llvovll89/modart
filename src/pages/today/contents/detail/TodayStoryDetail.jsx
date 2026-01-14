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

const TodayStoryDetail = () => {
    const [commentText, setCommentText] = useState("");
    const [isComment, setIsComment] = useState(true);

    const {id} = useParams();
    const user = useSelector((state) => state.login.user);
    const todays = useSelector((state) => state.today.todays);
    const currentToday = todays.find((todayId) => todayId.id === id);

    const {isOpen, handleOpen, handleClose, toggleModal} = useModalState();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addCommentHandler = (todayId) => {
        if (!user) {
            window.alert("로그인한 유저만 댓글을 쓸 수 있습니다.");
            return;
        }

        if (commentText.trim() === "") {
            window.alert("댓글을 입력 해주세요!");
            return;
        }

        const commentData = {
            author: user.nickname,
            text: commentText,
            profileImg: user.profileImg || "",
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        dispatch(addComment({todayId, commentData}))
            .then(() => {
                setCommentText("");
                dispatch(getTodays());
            })
            .catch((err) => {
                console.error("댓글을 추가 할 수 없습니다.", err);
            });
    };

    const deleteCommentHandler = (todayId, commentId) => {
        if (!user) {
            window.alert("로그인한 유저만 삭제 할 수 있습니다.");
            return;
        }

        const comment = currentToday.comments[commentId];

        if (comment && comment.author !== user.nickname) {
            window.alert("다른 유저의 댓글은 삭제할 수 없습니다!");
            return;
        }

        dispatch(deleteComment({todayId, commentId}))
            .then(() => {
                dispatch(getTodays());
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const commentLoginCheck = () => {
        if (user) {
            return null;
        } else {
            const alertLogin = confirm("로그인 하시겠습니까~?");

            if (alertLogin) {
                navigate("account/login");
            } else {
                document.querySelector(".comment_input").disabled = true;
            }
        }
    };

    useScrollToTop();

    useEffect(() => {
        dispatch(getTodays());
    }, [dispatch]);

    return (
        <TodayStoryDetailWrap>
            <TodayStoryDetailContainer>
                {currentToday && (
                    <>
                        {/* info */}
                        <Info
                            currentToday={currentToday}
                            handleOpen={handleOpen}
                        />

                        {/* comments */}
                        {/* <Comments
                            currentToday={currentToday}
                            addCommentHandler={addCommentHandler}
                            deleteCommentHandler={deleteCommentHandler}
                            commentLoginCheck={commentLoginCheck}
                            commentText={commentText}
                            setCommentText={setCommentText}
                        /> */}
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
