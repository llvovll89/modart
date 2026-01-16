import {useState} from "react";
import {CommentsContainer} from "./Comments.css";
import {useDispatch, useSelector} from "react-redux";
import {
    addComment,
    deleteComment,
    getTodays,
} from "../../../../../../store/reducers/todaySlice";
import {useNavigate} from "react-router-dom";

export const Comments = ({currentToday}) => {
    const [commentText, setCommentText] = useState("");

    const navigate = useNavigate();
    const user = useSelector((state) => state.login.user);
    const dispatch = useDispatch();

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

    return (
        <CommentsContainer>
            {Object.entries(currentToday.comments).map(
                ([commentId, comment]) => (
                    <li className="comment_item" key={commentId}>
                        <div className="top">
                            <div className="user">
                                <img src={comment.profileImg} alt="" />
                                <span className="comment_name">
                                    {comment.author}
                                </span>
                            </div>
                            <span className="comment_date">
                                {comment.createdAt}
                            </span>
                        </div>
                        <div className="bt">
                            <p className="comment_desc">{comment.text}</p>
                        </div>

                        {user && comment.author === user.nickname ? (
                            <div className="btns">
                                <button>수정하기</button>
                                <button
                                    className="delete"
                                    onClick={() =>
                                        deleteCommentHandler(
                                            currentToday.id,
                                            commentId
                                        )
                                    }
                                >
                                    삭제하기
                                </button>
                            </div>
                        ) : null}
                    </li>
                )
            )}

            {user && (
                <div className="comment_write">
                    <div className="profile">
                        <img src={user.profileImg} alt={user.nickname} />
                        <span>{user.nickname}</span>
                    </div>

                    <div className="comment_form">
                        <input
                            className="comment_input"
                            type="text"
                            placeholder="댓글..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />

                        <button
                            className="submit"
                            onClick={() => addCommentHandler(today.id)}
                        >
                            등록
                        </button>
                    </div>
                </div>
            )}
        </CommentsContainer>
    );
};
