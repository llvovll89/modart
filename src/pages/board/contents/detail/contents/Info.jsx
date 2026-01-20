import {IoIosPerson} from "react-icons/io";
import {CiHeart, CiChat1} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useMemo, useRef, useState} from "react";
import {
    getBoards,
    recommendViews,
} from "../../../../../store/reducers/boardSlice";
import {ListInfoContainer} from "../../../../../components/common/styles/ListInfo.css";
import {useNavigate} from "react-router-dom";

export const Info = ({board, commentClick, handleOpen}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.login.user);

    const [slideIndex, setSlideIndex] = useState(0);

    const dragRef = useRef({
        active: false,
        pointerId: null,
        startX: 0,
        dx: 0,
    });
    const [dragX, setDragX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const photos = useMemo(() => {
        const arr = Array.isArray(board?.photos)
            ? board.photos.filter(Boolean)
            : [];
        if (arr.length > 0) return arr;
        return board?.photo ? [board.photo] : [];
    }, [board?.photos, board?.photo]);

    useEffect(() => {
        setSlideIndex(0);
        setDragX(0);
        setIsDragging(false);
        dragRef.current = {active: false, pointerId: null, startX: 0, dx: 0};
    }, [board?.id]);

    const formatDate = (value) => {
        if (!value) return "";
        const d = new Date(value);
        if (Number.isNaN(d.getTime())) return String(value);
        return new Intl.DateTimeFormat("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }).format(d);
    };

    const hasLiked = board.recommendedUsers?.includes(user.uid);

    const likeBtnClick = async () => {
        if (!user) {
            handleOpen();
            return;
        }

        try {
            await dispatch(
                recommendViews({
                    boardId: board.id,
                    userId: user.uid,
                }),
            ).unwrap();
            dispatch(getBoards());
        } catch (e) {
            console.log(e);
        }
    };

    const likeCount = board?.recommend ?? 0;
    const commentCount = board?.comments?.length ?? 0;

    const hasSlides = photos.length > 0;
    const canSlide = photos.length > 1;

    const goPrev = () => {
        setSlideIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const goNext = () => {
        setSlideIndex((prev) => (prev + 1) % photos.length);
    };

    const currentPhoto = hasSlides ? photos[slideIndex] : "";

    const onPointerDown = (e) => {
        if (!canSlide) return;

        // ✅ 버튼(이전/다음/닷) 위에서 누른 건 드래그 시작으로 처리하지 않기
        if (e.target.closest("button")) return;

        dragRef.current.active = true;
        dragRef.current.pointerId = e.pointerId;
        dragRef.current.startX = e.clientX;
        dragRef.current.dx = 0;

        setIsDragging(true);
        setDragX(0);

        e.currentTarget.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (!dragRef.current.active) return;
        const dx = e.clientX - dragRef.current.startX;
        dragRef.current.dx = dx;

        setDragX(Math.max(-120, Math.min(120, dx)));
    };

    const onPointerUpOrCancel = (e) => {
        if (!dragRef.current.active) return;

        try {
            if (dragRef.current.pointerId != null) {
                e.currentTarget.releasePointerCapture?.(
                    dragRef.current.pointerId,
                );
            }
        } catch {
            // ignore
        }

        const dx = dragRef.current.dx;
        const threshold = 60;

        if (dx <= -threshold) goNext();
        else if (dx >= threshold) goPrev();

        dragRef.current.active = false;
        dragRef.current.pointerId = null;
        dragRef.current.startX = 0;
        dragRef.current.dx = 0;

        setIsDragging(false);
        setDragX(0);
    };

    const handleUpdateClick = () => {
        navigate(`/board/${board.id}`, {state: {board}});
    };

    return (
        <ListInfoContainer>
            <div className="top">
                <div className="user">
                    <div className="user_left">
                        {board.profileImg ? (
                            <div className="user_img">
                                <img
                                    src={board.profileImg}
                                    alt={board.nickname}
                                />
                            </div>
                        ) : (
                            <div className="not_user_img" aria-hidden="true">
                                <IoIosPerson size={22} color="#fff" />
                            </div>
                        )}

                        <p className="user_name">{board.nickname}</p>
                    </div>

                    <div className="meta_right">
                        <span>{formatDate(board.createdAt)}</span>
                    </div>
                </div>

                <div
                    className={`imgBox ${isDragging ? "dragging" : ""}`}
                    role="region"
                    aria-label="게시물 이미지"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (!canSlide) return;
                        if (e.key === "ArrowLeft") goPrev();
                        if (e.key === "ArrowRight") goNext();
                    }}
                >
                    {(board.height || board.weight) && (
                        <div className="body_spec">
                            {board.height ? `${board.height}cm` : ""}
                            {board.height && board.weight ? " / " : ""}
                            {board.weight ? `${board.weight}kg` : ""}
                        </div>
                    )}

                    {board.nickname === user?.nickname && (
                        <div className="edit_btn_container">
                            <div className="owner_tag">내 게시물</div>
                            <button onClick={handleUpdateClick}>
                                수정하기
                            </button>
                        </div>
                    )}

                    <div
                        className="carousel"
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUpOrCancel}
                        onPointerCancel={onPointerUpOrCancel}
                    >
                        {hasSlides ? (
                            <img
                                className="carousel_img"
                                src={currentPhoto}
                                alt={`${board.nickname} 이미지 ${slideIndex + 1}/${photos.length}`}
                                style={{
                                    transform: `translateX(${dragX}px)`,
                                    transition: isDragging
                                        ? "none"
                                        : "transform 180ms ease",
                                }}
                                draggable={false}
                            />
                        ) : (
                            <div className="carousel_empty">
                                이미지가 없습니다.
                            </div>
                        )}

                        {canSlide && (
                            <>
                                <button
                                    type="button"
                                    className="nav prev"
                                    onClick={goPrev}
                                    aria-label="이전 이미지"
                                >
                                    ‹
                                </button>
                                <button
                                    type="button"
                                    className="nav next"
                                    onClick={goNext}
                                    aria-label="다음 이미지"
                                >
                                    ›
                                </button>

                                <div className="dots" aria-label="이미지 목록">
                                    {photos.map((_, i) => (
                                        <button
                                            key={`${board.id}-dot-${i}`}
                                            type="button"
                                            className={`dot ${i === slideIndex ? "active" : ""}`}
                                            onClick={() => setSlideIndex(i)}
                                            aria-label={`${i + 1}번 이미지로 이동`}
                                            aria-current={i === slideIndex}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="brand_area">
                {Array.isArray(board.brand) &&
                    board.brand.length > 0 &&
                    board.brand.map((item, index) => (
                        <div
                            key={`${board.id}-brand-${index}-${item}`}
                            className="brand"
                        >
                            {item}
                        </div>
                    ))}
            </div>

            <div className="bottom">
                <div className="btnbox">
                    <button
                        type="button"
                        className={`icon_btn ${hasLiked ? "liked" : ""}`}
                        onClick={likeBtnClick}
                        aria-label="좋아요"
                    >
                        <CiHeart size={22} color="#FFFFFF" />
                    </button>

                    <button
                        type="button"
                        className="icon_btn"
                        onClick={commentClick}
                        aria-label="댓글"
                    >
                        <CiChat1 size={22} color="#FFFFFF" />
                    </button>
                </div>

                <div className="like_comments">
                    <div className="like">
                        좋아요 <strong>{likeCount}</strong>
                    </div>
                    <span style={{opacity: 0.5}}>/</span>
                    <div className="comments">
                        댓글 <strong>{commentCount}</strong>
                    </div>
                </div>

                <p className="desc">{board.desc}</p>
                <p className="date">{formatDate(board.createdAt)}</p>
            </div>
        </ListInfoContainer>
    );
};
