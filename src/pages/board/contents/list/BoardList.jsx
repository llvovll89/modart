import {useDispatch, useSelector} from "react-redux";
import {getBoards, incrementViews} from "../../../../store/reducers/boardSlice";
import {useMemo} from "react";
import {usePageNation} from "../../../../hooks/usePageNation";
import {AiOutlineLike} from "react-icons/ai";
import PageNation from "../../../../components/common/PageNation";
import {BoardListContainer} from "./BoardList.css";
import {useNavigate} from "react-router-dom";

export const BoardList = ({sortType, sortOrder}) => {
    const boardList = useSelector((state) => state.board.boards) || null;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const FALLBACK_IMG =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0" stop-color="#0b1220"/>
                <stop offset="1" stop-color="#111a2e"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#g)"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
              fill="#9aa4b2" font-size="44" font-family="Segoe UI, Arial">
              No Image
            </text>
          </svg>
        `);

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

    const handleViewsClick = (boardId) => {
        dispatch(incrementViews({boardId}))
            .then(() => {
                dispatch(getBoards());
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const detailClick = (board) => {
        navigate(`/board/details/${board.id}`);
    };

    const handleCardClick = (board) => {
        handleViewsClick(board.id);
        detailClick(board);
    };

    const filteredBoards = useMemo(() => {
        if (!boardList) return [];
        const copied = [...boardList];

        if (sortType === "like") {
            return copied.sort((a, b) => {
                const diff = (b.recommend ?? 0) - (a.recommend ?? 0);
                return sortOrder === "desc" ? diff : -diff;
            });
        }

        if (sortType === "recent") {
            return copied.sort((a, b) => {
                const diff =
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime();
                return sortOrder === "desc" ? diff : -diff;
            });
        }

        return copied;
    }, [boardList, sortType, sortOrder]);

    const {currentData, currentPage, totalPages, goToPage, getPageNumbers} =
        usePageNation(filteredBoards, 8);

    const errorImgHandler = (event) => {
        event.target.src = FALLBACK_IMG;
    };

    if (!currentData || currentData.length === 0) {
        return (
            <>
                <div
                    style={{
                        padding: "24px 0",
                        color: "rgba(255,255,255,0.72)",
                        textAlign: "center",
                    }}
                >
                    아직 게시물이 없어요.
                </div>
                <PageNation
                    currentPage={currentPage}
                    totalPages={totalPages}
                    goToPage={goToPage}
                    getPageNumbers={getPageNumbers}
                />
            </>
        );
    }

    return (
        <>
            <BoardListContainer>
                {currentData.map((board) => {
                    const likeCount = board.recommend ?? 0;
                    const commentCount = board.comments?.length ?? 0;

                    return (
                        <li
                            onClick={() => handleCardClick(board)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleCardClick(board);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`게시물 상세 보기: ${board.title}`}
                            className="board_card"
                            key={board.id}
                        >
                            <div className="media">
                                <img
                                    src={board.photo || FALLBACK_IMG}
                                    alt={board.title}
                                    loading="lazy"
                                    onError={errorImgHandler}
                                />

                                <div className="badges">
                                    <span className="badge like">
                                        <AiOutlineLike />
                                        <span>{likeCount}</span>
                                    </span>

                                    {commentCount > 0 && (
                                        <span className="badge comment">
                                            댓글 <span>{commentCount}</span>
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="items">
                                <h3 className="board_title" title={board.title}>
                                    {board.title}
                                </h3>

                                <div className="meta">
                                    <div className="meta_left">
                                        <span
                                            title={board.brand}
                                            className="item_brand"
                                        >
                                            {board.brand}
                                        </span>
                                    </div>

                                    <div className="meta_right">
                                        <span className="item_nickname">
                                            {board.nickname}
                                        </span>
                                        <span
                                            className="dot"
                                            aria-hidden="true"
                                        >
                                            ·
                                        </span>
                                        <span className="item_date">
                                            {formatDate(board.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </BoardListContainer>

            <PageNation
                currentPage={currentPage}
                totalPages={totalPages}
                goToPage={goToPage}
                getPageNumbers={getPageNumbers}
            />
        </>
    );
};
