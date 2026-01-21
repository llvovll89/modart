import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {QnaContents, QnaWrap} from "./styles/index";
import {getQna} from "../../store/reducers/qnaSlice";
import {useFilterState} from "../../hooks/useFilterState";
import {AiFillQuestionCircle} from "react-icons/ai";
import {QnaList} from "./contents/list/QnaList";
import {useModalState} from "../../hooks/useModalState";
import {Modal} from "../../components/common/Modal";
import {QNA_FORM} from "../../routes/route/path";

const Qna = () => {
    const user = useSelector((state) => state.login.user);
    const {sortType, sortOrder, handleSortClick} = useFilterState();
    const {isOpen, handleOpen, handleClose} = useModalState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const handleCreateQna = () => {
        if (user) {
            return navigate(QNA_FORM);
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
        let mounted = true;
        setIsLoading(true);

        Promise.resolve(dispatch(getQna())).finally(() => {
            if (mounted) setIsLoading(false);
        });

        return () => {
            mounted = false;
        };
    }, [dispatch]);

    const viewActive = sortType === "view";
    const recentActive = sortType === "recent";

    return (
        <QnaWrap>
            <QnaContents>
                <div className="form_top">
                    <div className="sort_group" role="group" aria-label="정렬">
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

                        <button
                            type="button"
                            className={`sort_chip ${viewActive ? "active" : ""}`}
                            aria-pressed={viewActive}
                            onClick={() => handleSortClick("view")}
                        >
                            조회순
                            {viewActive && (
                                <span className="sort_arrow">
                                    {sortOrder === "desc" ? "↓" : "↑"}
                                </span>
                            )}
                        </button>
                    </div>

                    <button
                        className="write_btn"
                        type="button"
                        onClick={handleCreateQna}
                    >
                        <AiFillQuestionCircle />
                        <span>QnA 작성하기</span>
                    </button>
                </div>

                <QnaList
                    sortType={sortType}
                    sortOrder={sortOrder}
                    isLoading={isLoading}
                />
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
