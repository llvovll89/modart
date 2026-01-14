import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    CommentContainer,
    CommentList,
} from "../../../../../components/common/styles/Comments.css";
import {addComment, getPhotos} from "../../../../../store/reducers/photoSlice";

export const Comments = ({comments, currentPhoto, handleOpen}) => {
    const [commentText, setCommentText] = useState("");
    const dispatch = useDispatch();

    const user = useSelector((state) => state.login.user);

    const addCommentHandler = (boardId) => {
        if (!user) {
            handleOpen();
            return;
        }

        const commentData = {
            id: Date.now(),
            text: commentText,
            author: user.nickname,
            profileImg: user.profileImg ? user.profileImg : "",
            createdAt: moment().format("YYYY-MM-DD HH:mm:ss"),
        };

        dispatch(addComment({boardId, commentData})).then(() => {
            setCommentText("");
            dispatch(getPhotos());
        });
    };

    return (
        <CommentContainer>
            <div className="comment_form">
                <div className="user">
                    <div className="profile_contents">
                        <div className="profileImg">
                            <img src={user.profileImg} alt={user.nickname} />
                        </div>
                        <p className="nickname">{user.nickname}</p>
                    </div>
                    <button
                        className="submit_btn"
                        type="submit"
                        onClick={() => addCommentHandler(currentPhoto.id)}
                    >
                        댓글등록
                    </button>
                </div>

                <div className="form">
                    <textarea
                        name="comment"
                        id="comment"
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </div>
            </div>

            <CommentList>
                {comments &&
                    Object.entries(comments).map(([commentId, comment]) => {
                        return (
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
                                                <div className="no_image"></div>
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
                        );
                    })}
            </CommentList>
        </CommentContainer>
    );
};
