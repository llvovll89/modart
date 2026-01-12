import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {QnaInfoContainer, QnaContents, QnaWrap} from "./styles/index";
import {getQna} from "../../store/reducers/qnaSlice";
import {useFilterState} from "../../hooks/useFilterState";
import {AiFillQuestionCircle} from "react-icons/ai";
import {QnaList} from "./contents/list/QnaList";

const Qna = () => {
    const user = useSelector((state) => state.login.user);
    const {sortType, sortOrder, handleSortClick} = useFilterState();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleWriteClick = () => {
        if (user) {
            return navigate("/qna/write");
        } else {
            window.alert("로그인한 유저만 작성이 가능합니다.");
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
            <QnaInfoContainer>
                <div className="info">
                    <div className="title">
                        <h1>질문 게시판</h1>
                        <span>(Questions and Answers)</span>
                    </div>

                    <div className="desc">
                        <p>🔥 궁금한 점이 있다면 소통해보세요. </p>
                        <p>❓ 다양한 질문과 답변이 기다리고 있습니다.</p>
                        <p>💡 유용한 정보와 팁을 얻어가세요.</p>
                    </div>
                </div>
            </QnaInfoContainer>
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
        </QnaWrap>
    );
};

export default Qna;
