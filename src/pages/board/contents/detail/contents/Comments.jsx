import {useDispatch, useSelector} from "react-redux";
import {
    CommentContainer,
    CommentList,
} from "../../../../../components/common/styles/Comments.css";
import moment from "moment";
import {addComment, getBoards} from "../../../../../store/reducers/boardSlice";
import {useMemo, useState} from "react";

export const Comments = ({comments, board, handleOpen}) => {
    const [commentText, setCommentText] = useState("");
    const dispatch = useDispatch();

    const user = useSelector((state) => state.login.user);

    const avatarLetter = useMemo(() => {
        const s = String(user?.nickname || "U").trim();
        return s ? s[0].toUpperCase() : "U";
    }, [user?.nickname]);

    const canSubmit = Boolean(user) && commentText.trim().length > 0;

    const addCommentHandler = (boardId) => {
        if (!user) {
            handleOpen();
            return;
        }
        if (!commentText.trim()) return;

        const commentData = {
            id: Date.now(),
            text: commentText.trim(),
            author: user.nickname,
            profileImg: user.profileImg ? user.profileImg : "",
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        dispatch(addComment({boardId, commentData})).then(() => {
            setCommentText("");
            dispatch(getBoards());
        });
    };

    return (
        <CommentContainer>
            {user && (
                <div className="comment_form">
                    <div className="user">
                        <div className="profile_contents">
                            <div className="profileImg" aria-hidden="true">
                                {user?.profileImg ? (
                                    <img
                                        src={user.profileImg}
                                        alt={user.nickname}
                                    />
                                ) : (
                                    avatarLetter
                                )}
                            </div>

                            <p className="nickname">
                                {user?.nickname ||
                                    "로그인 후 댓글을 작성할 수 있어요"}
                            </p>
                        </div>

                        <button
                            className="submit_btn"
                            type="button"
                            disabled={!canSubmit}
                            onClick={() => addCommentHandler(board.id)}
                        >
                            댓글등록
                        </button>
                    </div>

                    <div className="form">
                        <textarea
                            name="comment"
                            id="comment"
                            placeholder={
                                user
                                    ? "댓글을 입력하세요..."
                                    : "로그인 후 댓글을 작성할 수 있어요."
                            }
                            value={commentText}
                            disabled={!user}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <CommentList>
                {comments &&
                    Object.entries(comments).map(([commentId, comment]) => (
                        <li className="comment_item" key={commentId}>
                            <div className="profile">
                                <div className="users">
                                    <div className="profile_img">
                                        {comment.profileImg ? (
                                            <img
                                                src={comment.profileImg}
                                                alt=""
                                            />
                                        ) : (
                                            <div className="no_image" />
                                        )}
                                    </div>

                                    <span className="author">
                                        {comment.author}
                                    </span>
                                </div>

                                <span className="comment_date">
                                    {comment.createdAt}
                                </span>
                            </div>

                            <p className="comment_desc">{comment.text}</p>
                        </li>
                    ))}
            </CommentList>
        </CommentContainer>
    );
};
