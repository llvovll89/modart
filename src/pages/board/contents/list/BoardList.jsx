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
        event.target.src = ErrorImg;
    };
    return (
        <>
            <BoardListContainer>
                {currentData.length > 0 &&
                    currentData.map((board) => (
                        <li
                            onClick={() => handleCardClick(board)}
                            className="board_card"
                            key={board.id}
                        >
                            <div className="like">
                                {board.recommend > 0 ? (
                                    <>
                                        <span>
                                            <AiOutlineLike />
                                        </span>
                                        <p className="like_views">
                                            {board.recommend}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <span>
                                            <AiOutlineLike />
                                        </span>
                                        <p className="like_views">0</p>
                                    </>
                                )}
                            </div>
                            <div className="board_img">
                                <img
                                    src={board.photo}
                                    alt={board.title}
                                    onError={errorImgHandler}
                                />
                            </div>
                            <div className="items">
                                <h3 className="board_title">
                                    {board.title.length > 30
                                        ? board.title.substring(0, 30) +
                                          "..." +
                                          (board.comments &&
                                          board.comments.length > 0
                                              ? ` (${board.comments.length})`
                                              : "")
                                        : board.title +
                                          (board.comments &&
                                          board.comments.length > 0
                                              ? ` (${board.comments.length})`
                                              : "")}
                                </h3>

                                <div className="item_contents">
                                    <div className="sub_items">
                                        <span className="item_brand">
                                            {board.brand}
                                        </span>
                                    </div>
                                    <div className="sub_items">
                                        <span className="item_nickname">
                                            {board.nickname}
                                        </span>
                                        <span className="item_date">
                                            {board.createdAt}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
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
