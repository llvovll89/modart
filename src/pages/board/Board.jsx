import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {BoardContents, BoardInfoContainer, BoardWrap} from "./styles/index";
import {AiFillSkin, AiOutlineLike} from "react-icons/ai";
import {getBoards, incrementViews} from "../../store/reducers/boardSlice";
import {BoardList} from "./contents/list/BoardList";
import {useFilterState} from "../../hooks/useFilterState";
import {useScrollToTop} from "../../hooks/useScrllToTop";
import {useModalState} from "../../hooks/useModalState";
import {Modal} from "../../components/common/Modal";

const Board = () => {
    const user = useSelector((state) => state.login.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {sortType, sortOrder, handleSortClick} = useFilterState();
    const {isOpen, handleOpen, handleClose, toggleModal} = useModalState();

    const handleWriteClick = () => {
        if (user) {
            return navigate("/board/write");
        } else {
            handleOpen();
            return null;
        }
    };

    useScrollToTop();

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    return (
        <BoardWrap className="ootd_section">
            <BoardInfoContainer>
                <div className="info">
                    <div className="title">
                        <h1>최신 데일리룩</h1>
                        <span>(Latest daily look)</span>
                    </div>

                    <div className="desc">
                        <p>🔥 최신 데일리룩 보기</p>
                        <p>
                            ✨ 마음에 드는 스타일이 있다면 상세 페이지로 이동해
                            보세요.
                        </p>
                        <p>
                            🛍️ 스타일이 마음에 든다면, 유저의 다른 게시물도
                            확인해보세요.
                        </p>
                    </div>
                </div>
            </BoardInfoContainer>
            <BoardContents>
                <div className="form_top">
                    <ul>
                        <li onClick={() => handleSortClick("like")}>
                            좋아요 순
                            {sortType === "like" &&
                                (sortOrder === "desc" ? " ↓" : " ↑")}
                        </li>

                        <li onClick={() => handleSortClick("recent")}>
                            날짜 순
                            {sortType === "recent" &&
                                (sortOrder === "desc" ? " ↓" : " ↑")}
                        </li>
                    </ul>

                    <button className="write_btn" onClick={handleWriteClick}>
                        <AiFillSkin />
                        <span>데일리룩 작성하기</span>
                    </button>
                </div>

                <BoardList sortType={sortType} sortOrder={sortOrder} />
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
