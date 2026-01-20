import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BoardContents, BoardWrap} from "./styles/index";
import {AiFillSkin, AiOutlineLike} from "react-icons/ai";
import {getBoards, incrementViews} from "../../store/reducers/boardSlice";
import {BoardList} from "./contents/list/BoardList";
import {useFilterState} from "../../hooks/useFilterState";
import {useScrollToTop} from "../../hooks/useScrollToTop";
import {useModalState} from "../../hooks/useModalState";
import {Modal} from "../../components/common/Modal";
import {NoListComponents} from "../../components/common/NoResultListContainer";

const Board = () => {
    const boardList = useSelector((state) => state.board.boards);
    const user = useSelector((state) => state.login.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {sortType, sortOrder, handleSortClick} = useFilterState();
    const {isOpen, handleOpen, handleClose} = useModalState();

    const handleWriteClick = () => {
        if (user) return navigate("/board/write");
        handleOpen();
        return null;
    };

    useScrollToTop();

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    const likeActive = sortType === "like";
    const recentActive = sortType === "recent";

    return (
        <BoardWrap>
            <BoardContents>
                <div className="form_top">
                    <div className="sort_group" role="group" aria-label="정렬">
                        <button
                            type="button"
                            className={`sort_chip ${likeActive ? "active" : ""}`}
                            aria-pressed={likeActive}
                            onClick={() => handleSortClick("like")}
                        >
                            좋아요
                            {likeActive && (
                                <span className="sort_arrow">
                                    {sortOrder === "desc" ? "↓" : "↑"}
                                </span>
                            )}
                        </button>

                        <button
                            type="button"
                            className={`sort_chip ${recentActive ? "active" : ""}`}
                            aria-pressed={recentActive}
                            onClick={() => handleSortClick("recent")}
                        >
                            최신
                            {recentActive && (
                                <span className="sort_arrow">
                                    {sortOrder === "desc" ? "↓" : "↑"}
                                </span>
                            )}
                        </button>
                    </div>

                    <button
                        className="write_btn"
                        onClick={handleWriteClick}
                        type="button"
                    >
                        <AiFillSkin />
                        <span>데일리룩 작성하기</span>
                    </button>
                </div>

                {boardList.length > 0 ? (
                    <BoardList sortType={sortType} sortOrder={sortOrder} />
                ) : (
                    <NoListComponents />
                )}
            </BoardContents>

            {isOpen && (
                <Modal
                    type="경고"
                    title="로그인 필요"
                    description="데일리룩 작성은 로그인 후에 가능합니다."
                    isCancel={true}
                    isConfirm={true}
                    handleClose={handleClose}
                />
            )}
        </BoardWrap>
    );
};

export default Board;
