import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getQna} from "../../../../store/reducers/qnaSlice";
import {Link} from "react-router-dom";
import {QnaCard, QnaListContainer, QnaListWarp} from "./styles/QnaList.css";

const QnaList = () => {
    const qnaList = useSelector((state) => state.qna.questions);
    const [activeItems, setActiveItems] = useState([]);
    const dispatch = useDispatch();

    const toggleActive = (itemId) => {
        setActiveItems((prevActiveItems) => {
            const index = prevActiveItems.indexOf(itemId);
            if (index !== -1) {
                const newItems = [...prevActiveItems];
                newItems.splice(index, 1);
                return newItems;
            } else {
                const newItems = [itemId];
                return newItems;
            }
        });
    };

    const activeItem = (qnaId) => {
        return activeItems.findIndex((id) => id === qnaId) !== -1;
    };

    useEffect(() => {
        dispatch(getQna());
    }, [dispatch]);

    return (
        <QnaListWarp id="qna_list">
            <QnaListContainer>
                <div className="title">
                    <h1>질문 게시판</h1>
                    <span>(Questions and Answers)</span>
                </div>

                <div className="desc">
                    <p>🔥 궁금한 점이 있다면 소통해보세요. </p>
                    <p>❓ 다양한 질문과 답변이 기다리고 있습니다.</p>
                    <p>💡 유용한 정보와 팁을 얻어가세요.</p>
                </div>

                {qnaList.length > 0 && (
                    <QnaCard>
                        <div className="qna_contents">
                            <ul className="list_item">
                                {qnaList.slice(0, 5).map((qna) => (
                                    <li
                                        key={qna.id}
                                        className={`qna_items ${
                                            activeItems.findIndex(
                                                (id) => id === qna.id
                                            ) !== -1
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => toggleActive(qna.id)}
                                    >
                                        <div className="inner">
                                            <h3 className="qna_title">
                                                <span className="qna_q_icon">
                                                    Q.
                                                </span>
                                                {qna.title}
                                            </h3>
                                        </div>

                                        <div
                                            className={`qna_answer ${
                                                activeItem(qna.id)
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            <p className="qna_desc">
                                                {qna.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {5 < qnaList.length ? (
                                <div className="view_more">
                                    <Link to="/qna">질문하러 가기</Link>
                                </div>
                            ) : null}
                        </div>
                    </QnaCard>
                )}
            </QnaListContainer>
        </QnaListWarp>
    );
};

export default QnaList;
