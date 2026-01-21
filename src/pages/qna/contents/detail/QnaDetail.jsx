import React, {useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import {
    addComment,
    deleteComment,
    editComment,
    getQna,
    recommendViews,
} from "../../../../store/reducers/qnaSlice";
import {QnaDetailContainer} from "./QnaDetail.css";
import NoImage from "../../../../assets/images/user.png";
import {AiOutlineEye, AiOutlineLike} from "react-icons/ai";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";

const NO_IMAGE_URL = "https://via.placeholder.com/500x750.png?text=No+Image";

const pad2 = (n) => String(n).padStart(2, "0");

const formatDateYYYYMMDD = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
};

const formatDateTime = (value) => {
    if (!value) return "";
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return String(value);
    return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
};

const QnaDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();

    const qnaList = useSelector((state) => state.qna.questions);
    const user = useSelector((state) => state.login.user);

    const [showAnswer, setShowAnswer] = useState(true);
    const [commentText, setCommentText] = useState("");

    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingText, setEditingText] = useState("");

    useEffect(() => {
        dispatch(getQna());
    }, [dispatch]);

    const qna = useMemo(() => {
        if (!qnaList) return null;
        return (
            qnaList.find((question) => String(question.id) === String(id)) ||
            null
        );
    }, [qnaList, id]);

    const commentEntries = useMemo(() => {
        const c = qna?.comments;
        if (!c) return [];
        if (Array.isArray(c)) {
            return c.map((item, idx) => [String(item?.id ?? idx), item]);
        }
        if (typeof c === "object") return Object.entries(c);
        return [];
    }, [qna]);

    const commentCount = commentEntries.length;
    const hasLiked = qna?.recommendedUsers?.includes(user?.uid);
    console.log(qna);

    const onClickLike = () => {
        if (!user) {
            window.alert("로그인한 유저만 가능합니다!");
            return;
        }

        if (hasLiked) {
            window.alert("이미 좋아요를 누른 게시글입니다!");
            return;
        }

        dispatch(
            recommendViews({
                qnaId: qna.id,
                userId: user.uid,
            }),
        )
            .then(() => dispatch(getQna()))
            .catch((err) => console.error("좋아요 처리 실패:", err));
    };

    const onSubmitComment = () => {
        if (!user) {
            window.alert("로그인한 유저만 답변을 쓸 수 있습니다!");
            return;
        }
        if (commentText.trim() === "") {
            window.alert("답변을 입력해주세요!");
            return;
        }

        const commentData = {
            text: commentText.trim(),
            author: user.nickname,
            profileImg: user.profileImg || "",
            createdAt: new Date().toISOString(),
        };

        dispatch(addComment({questionId: qna.id, commentData}))
            .then(() => {
                setCommentText("");
                dispatch(getQna());
            })
            .catch((error) => console.error("답변 등록 실패:", error));
    };

    const startEdit = (commentId, text) => {
        if (!user) {
            window.alert("로그인하여야 수정할 수 있습니다!");
            return;
        }
        setEditingCommentId(commentId);
        setEditingText(text ?? "");
    };

    const saveEdit = (commentId) => {
        if (!user) {
            window.alert("로그인하여야 수정할 수 있습니다!");
            return;
        }
        if (editingText.trim() === "") {
            window.alert("수정 내용을 입력해주세요!");
            return;
        }

        const origin = qna?.comments?.[commentId];
        const commentData = {
            text: editingText.trim(),
            author: origin?.author ?? user.nickname,
            profileImg: origin?.profileImg ?? user.profileImg ?? "",
            createdAt: new Date().toISOString(),
        };

        dispatch(editComment({questionId: qna.id, commentId, commentData}))
            .then(() => {
                setEditingCommentId(null);
                setEditingText("");
                dispatch(getQna());
            })
            .catch((error) => console.error("답변 수정 실패:", error));
    };

    const removeComment = (commentId, comment) => {
        if (!user) {
            window.alert("로그인 하여야 삭제 가능합니다!");
            return;
        }
        if (comment?.author && comment.author !== user.nickname) {
            window.alert("다른 유저의 답변은 삭제할 수 없습니다!");
            return;
        }

        dispatch(deleteComment({questionId: qna.id, commentId}))
            .then(() => dispatch(getQna()))
            .catch((err) => console.error("답변 삭제 실패:", err));
    };

    return (
        <QnaDetailContainer>
            <div className="wrap">
                <div className="topbar">
                    <Link className="back" to="/qna">
                        ← 목록으로
                    </Link>
                </div>

                {!qna ? (
                    <div className="card">
                        <div className="empty">
                            <div className="title">
                                존재하지 않는 질문입니다.
                            </div>
                            <div>목록으로 돌아가 다시 선택해주세요.</div>
                        </div>
                    </div>
                ) : (
                    <div className="card">
                        <header className="cardHeader">
                            <div className="titleRow">
                                <div className="title">
                                    <div className="qBadge">Q</div>
                                    <h1>{qna.title}</h1>
                                </div>

                                {user && user.nickname === qna.nickname && (
                                    <Link
                                        className="btn btnSecondary"
                                        to={`/qna/${qna.id}`}
                                        state={{qna}}
                                    >
                                        수정하기
                                    </Link>
                                )}
                            </div>

                            <div className="meta">
                                <div className="author">
                                    <div className="avatar">
                                        <img
                                            src={NoImage}
                                            alt={qna.nickname || "작성자"}
                                        />
                                    </div>
                                    <div className="authorName">
                                        <div className="name">
                                            {qna.nickname}
                                        </div>
                                        <div className="date">
                                            {formatDateYYYYMMDD(qna.createdAt)}
                                        </div>
                                    </div>
                                </div>

                                <div className="chips">
                                    <span className="chip">
                                        <AiOutlineEye /> {qna.views ?? 0}
                                    </span>
                                    <span className="chip primary">
                                        <AiOutlineLike /> {qna.recommend ?? 0}
                                    </span>
                                    <span className="chip">
                                        <HiOutlineChatBubbleOvalLeft />{" "}
                                        {commentCount}
                                    </span>
                                </div>
                            </div>
                        </header>

                        <div className="cardBody">
                            <p className="desc">{qna.desc}</p>
                        </div>

                        <footer className="cardFooter">
                            <div className="actions">
                                <button
                                    className="btn btnPrimary"
                                    onClick={onClickLike}
                                >
                                    <AiOutlineLike /> 좋아요
                                </button>
                                <button
                                    className={`btn ${showAnswer ? "btnSecondary" : ""}`}
                                    onClick={() => setShowAnswer((v) => !v)}
                                >
                                    <HiOutlineChatBubbleOvalLeft />{" "}
                                    {showAnswer ? "답변 닫기" : "답변 보기"}
                                </button>
                            </div>

                            {showAnswer && (
                                <>
                                    <div className="commentBox">
                                        <div className="commentTop">
                                            {user ? (
                                                <div className="me">
                                                    <img
                                                        src={
                                                            user.profileImg
                                                                ? user.profileImg
                                                                : NO_IMAGE_URL
                                                        }
                                                        alt={user.nickname}
                                                    />
                                                    <span>{user.nickname}</span>
                                                </div>
                                            ) : (
                                                <Link
                                                    className="btn"
                                                    to="/account/login"
                                                >
                                                    로그인하기
                                                </Link>
                                            )}

                                            <button
                                                className="btn btnPrimary"
                                                onClick={onSubmitComment}
                                            >
                                                답변등록
                                            </button>
                                        </div>

                                        <textarea
                                            value={commentText}
                                            onChange={(e) =>
                                                setCommentText(e.target.value)
                                            }
                                            onClick={() => {
                                                if (!user)
                                                    window.alert(
                                                        "로그인하여야 입력가능합니다!",
                                                    );
                                            }}
                                            placeholder="답변을 입력해주세요.."
                                        />
                                    </div>

                                    <div className="commentList">
                                        {commentEntries.length === 0 ? (
                                            <div className="commentItem">
                                                <p
                                                    className="commentText"
                                                    style={{
                                                        color: "rgba(15,23,42,0.6)",
                                                    }}
                                                >
                                                    아직 답변이 없습니다. 첫
                                                    답변을 남겨보세요.
                                                </p>
                                            </div>
                                        ) : (
                                            commentEntries.map(
                                                ([commentId, comment]) => {
                                                    const isEditing =
                                                        String(
                                                            editingCommentId,
                                                        ) === String(commentId);
                                                    const canManage =
                                                        user?.nickname &&
                                                        user.nickname ===
                                                            comment?.author;

                                                    return (
                                                        <div
                                                            key={commentId}
                                                            className="commentItem"
                                                        >
                                                            <div className="commentHead">
                                                                <div className="commentAuthor">
                                                                    <img
                                                                        src={
                                                                            comment?.profileImg
                                                                                ? comment.profileImg
                                                                                : NO_IMAGE_URL
                                                                        }
                                                                        alt={
                                                                            comment?.author ||
                                                                            "작성자"
                                                                        }
                                                                    />
                                                                    <span className="name">
                                                                        {
                                                                            comment?.author
                                                                        }
                                                                    </span>
                                                                    <span className="date">
                                                                        {formatDateTime(
                                                                            comment?.createdAt,
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {isEditing ? (
                                                                <input
                                                                    className="editInput"
                                                                    value={
                                                                        editingText
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setEditingText(
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        )
                                                                    }
                                                                />
                                                            ) : (
                                                                <p className="commentText">
                                                                    {
                                                                        comment?.text
                                                                    }
                                                                </p>
                                                            )}

                                                            {canManage && (
                                                                <div className="commentBtns">
                                                                    {!isEditing ? (
                                                                        <button
                                                                            className="btn"
                                                                            onClick={() =>
                                                                                startEdit(
                                                                                    commentId,
                                                                                    comment?.text,
                                                                                )
                                                                            }
                                                                        >
                                                                            수정
                                                                        </button>
                                                                    ) : (
                                                                        <button
                                                                            className="btn btnPrimary"
                                                                            onClick={() =>
                                                                                saveEdit(
                                                                                    commentId,
                                                                                )
                                                                            }
                                                                        >
                                                                            저장
                                                                        </button>
                                                                    )}

                                                                    <button
                                                                        className="btn btnDanger"
                                                                        onClick={() =>
                                                                            removeComment(
                                                                                commentId,
                                                                                comment,
                                                                            )
                                                                        }
                                                                    >
                                                                        삭제
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                },
                                            )
                                        )}
                                    </div>
                                </>
                            )}
                        </footer>
                    </div>
                )}
            </div>
        </QnaDetailContainer>
    );
};

export default QnaDetail;
