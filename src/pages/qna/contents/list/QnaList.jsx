import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getQna, incrementViews} from "../../../../store/reducers/qnaSlice";
import {usePageNation} from "../../../../hooks/usePageNation";
import {QnaListContainer} from "./QnaList.css";
import PageNation from "../../../../components/common/PageNation";
import {useMemo} from "react";
import {AiOutlineEye, AiOutlineLike} from "react-icons/ai";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";

export const QnaList = ({sortType, sortOrder, isLoading}) => {
    const qnaList = useSelector((state) => state.qna.questions);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const detailClick = (qna) => {
        navigate(`/qna/details/${qna.id}`);
    };

    const handleQuestionClick = (questionId) => {
        dispatch(incrementViews({questionId}))
            .then(() => {
                dispatch(getQna());
            })
            .catch((error) => {
                console.error("Error incrementing views:", error);
            });
    };

    const filteredQnAs = useMemo(() => {
        if (!qnaList) return [];
        const copied = [...qnaList];

        if (sortType === "recent") {
            return copied.sort((a, b) => {
                const diff =
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime();

                return sortOrder === "desc" ? diff : -diff;
            });
        } else if (sortType === "views") {
            return copied.sort((a, b) => {
                const diff = b.views - a.views;
                return sortOrder === "desc" ? diff : -diff;
            });
        }

        return copied;
    }, [qnaList, sortType, sortOrder]);

    const {currentData, currentPage, totalPages, goToPage, getPageNumbers} =
        usePageNation(filteredQnAs, 8);

    const formatDateYYYYMMDD = (value) => {
        if (!value) return "";
        const d = new Date(value);
        if (Number.isNaN(d.getTime())) return "";

        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}.${m}.${day}`;
    };

    if (isLoading) {
        return (
            <QnaListContainer aria-busy="true" aria-live="polite">
                {Array.from({length: 7}).map((_, i) => (
                    <li
                        key={`sk-${i}`}
                        className="card skeleton"
                        aria-hidden="true"
                    >
                        <div className="sk sk-chip" />
                        <div className="sk sk-title" />
                        <div className="sk sk-sub" />
                        <div className="sk sk-date" />
                    </li>
                ))}
            </QnaListContainer>
        );
    }

    return (
        <>
            <QnaListContainer>
                {currentData.length > 0 &&
                    currentData.map((qna) => (
                        <li
                            key={qna.id}
                            className="card"
                            role="button"
                            tabIndex={0}
                            aria-label={`질문 상세 보기: ${qna.title}`}
                            onClick={() => {
                                detailClick(qna);
                                handleQuestionClick(qna.id);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    detailClick(qna);
                                    handleQuestionClick(qna.id);
                                }
                            }}
                        >
                            <p className="views">
                                <AiOutlineEye /> {qna.views}
                            </p>

                            <p className="title">{qna.title}</p>

                            <div className="sub_contents">
                                <p className="like">
                                    <AiOutlineLike />
                                    {qna.recommend > 0 ? qna.recommend : 0}
                                </p>
                                <p>
                                    <HiOutlineChatBubbleOvalLeft />
                                    {qna.recommend}
                                </p>
                            </div>

                            <div className="created_at">
                                {formatDateYYYYMMDD(qna.createdAt)}
                            </div>
                        </li>
                    ))}
            </QnaListContainer>

            <PageNation
                currentPage={currentPage}
                totalPages={totalPages}
                goToPage={goToPage}
                getPageNumbers={getPageNumbers}
            />
        </>
    );
};
