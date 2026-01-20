import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { QnaContents, QnaWrap } from "./styles/index";
import { getQna } from "../../store/reducers/qnaSlice";
import { useFilterState } from "../../hooks/useFilterState";
import { AiFillQuestionCircle } from "react-icons/ai";
import { QnaList } from "./contents/list/QnaList";
import { useModalState } from "../../hooks/useModalState";
import { Modal } from "../../components/common/Modal";

const Qna = () => {
    const user = useSelector((state) => state.login.user);
    const { sortType, sortOrder, handleSortClick } = useFilterState();
    const { isOpen, handleOpen, handleClose, toggleModal } = useModalState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleWriteClick = () => {
        if (user) {
            return navigate("/qna/write");
        } else {
            handleOpen();
            return null;
        }
    };

    useEffect(() => {
        const handleScrollToTop = () => {
            window.scrollTo(0, 0);
        };

        handleScrollToTop();

        return () => {
            removeEventListener("scroll", handleScrollToTop);
        };
    }, []);

    useEffect(() => {
        dispatch(getQna());
    }, [dispatch]);

    return (
        <QnaWrap>
            <QnaContents>
                <div className="form_top">
                    <ul>
                        <li onClick={() => handleSortClick("recent")}>
                            날짜 순
                            {sortType === "recent" &&
                                (sortOrder === "desc" ? " ↓" : " ↑")}
                        </li>
                        <li onClick={() => handleSortClick("views")}>
                            조회 순
                            {sortType === "views" &&
                                (sortOrder === "desc" ? " ↓" : " ↑")}
                        </li>
                    </ul>

                    <button className="write_btn" onClick={handleWriteClick}>
                        <AiFillQuestionCircle />
                        <span>QnA 작성하기</span>
                    </button>
                </div>

                <QnaList sortType={sortType} sortOrder={sortOrder} />
            </QnaContents>

            {isOpen && (
                <Modal
                    type="경고"
                    title="로그인 필요"
                    description="QnA 작성은 로그인 후에 가능합니다."
                    isCancel={true}
                    isConfirm={true}
                    handleClose={handleClose}
                />
            )}
        </QnaWrap>
    );
};

export default Qna;
