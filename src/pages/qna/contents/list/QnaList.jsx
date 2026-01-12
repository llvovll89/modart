import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getQna} from "../../../../store/reducers/qnaSlice";
import {usePageNation} from "../../../../hooks/usePageNation";
import {QnaListContainer} from "./QnaList.css";
import PageNation from "../../../../components/common/PageNation";
import {useMemo} from "react";
import {AiOutlineEye, AiOutlineLike} from "react-icons/ai";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";

export const QnaList = ({sortType, sortOrder}) => {
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

    console.log(currentData);

    return (
        <>
            <QnaListContainer>
                {currentData.length > 0 &&
                    currentData.map((qna) => (
                        <li
                            onClick={() => {
                                detailClick(qna);
                                handleQuestionClick(qna.id);
                            }}
                            className="card"
                            key={qna.id}
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
                                {new Date(qna.createdAt).toLocaleDateString()}
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
