import {CommentsContainer} from "./Comments.css";

export const Comments = ({
    currentToday,
    user,
    isComment,
    setIsComment,
    deleteCommentHandler,
    commentText,
}) => {
    return (
        <CommentsContainer>
            <header className="comment_header">
                <p>
                    댓글
                    {currentToday.comments?.length > 0
                        ? currentToday.comments.length
                        : 0}
                    개
                </p>
                <button
                    className="close_comment"
                    onClick={() => setIsComment(!isComment)}
                >
                    {isComment ? "댓글닫기" : "댓글열기"}
                </button>
            </header>

            <ul className="comment_list">
                {isComment ? (
                    <>
                        {currentToday.comments &&
                            Object.entries(currentToday.comments).map(
                                ([commentId, comment]) => (
                                    <li
                                        className="comment_item"
                                        key={commentId}
                                    >
                                        <div className="top">
                                            <img
                                                src={comment.profileImg}
                                                alt=""
                                            />
                                            <span className="comment_name">
                                                {comment.author}
                                            </span>
                                            <span className="comment_date">
                                                {comment.createdAt}
                                            </span>
                                        </div>
                                        <div className="bt">
                                            <p className="comment_desc">
                                                {comment.text}
                                            </p>
                                        </div>
                                        {user &&
                                        comment.author === user.nickname ? (
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
                    </>
                ) : null}

                <div className="comments">
                    <div className="profile">
                        {user && (
                            <>
                                <img
                                    src={user.profileImg}
                                    alt={user.nickname}
                                />
                                <span>{user.nickname}</span>
                            </>
                        )}
                    </div>
                    <p className="comment_text">댓글 쓰기</p>
                    <div className="comment_form">
                        <input
                            className="comment_input"
                            type="text"
                            placeholder="댓글..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onClick={commentLoginCheck}
                        />
                        <button
                            className="submit"
                            onClick={() => addCommentHandler(today.id)}
                        >
                            등록
                        </button>
                    </div>
                </div>
            </ul>
        </CommentsContainer>
    );
};
