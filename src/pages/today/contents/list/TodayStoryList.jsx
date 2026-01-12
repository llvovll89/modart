import {useDispatch, useSelector} from "react-redux";
import {TodayListContainer} from "./TodayStoryList.css";
import {useNavigate} from "react-router-dom";
import {getTodays, incrementViews} from "../../../../store/reducers/todaySlice";
import {useMemo} from "react";
import {usePageNation} from "../../../../hooks/usePageNation";
import {AiOutlineFieldTime, AiOutlineLike, AiOutlineUser} from "react-icons/ai";
import PageNation from "../../../../components/common/PageNation";

export const TodayStoryList = ({sortType, sortOrder}) => {
    const todayList = useSelector((state) => state.today.todays);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleTodayClick = (todayId) => {
        dispatch(incrementViews({todayId}))
            .then(() => {
                dispatch(getTodays());
            })
            .catch((err) => {
                console.error("Error incrementing Views:", err);
            });
    };

    const detailClick = (today) => {
        navigate(`/today/details/${today.id}`);
    };

    const filteredPhotos = useMemo(() => {
        if (!todayList) return [];
        const copied = [...todayList];

        if (sortType === "recent") {
            return copied.sort((a, b) => {
                const diff =
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime();

                return sortOrder === "desc" ? diff : -diff;
            });
        }

        return copied;
    }, [todayList, sortType, sortOrder]);

    const {currentData, currentPage, totalPages, goToPage, getPageNumbers} =
        usePageNation(filteredPhotos, 8);

    return (
        <>
            <TodayListContainer>
                {currentData.length > 0 &&
                    currentData.map((today) => (
                        <li
                            onClick={() => {
                                detailClick(today), handleTodayClick(today.id);
                            }}
                            className="card"
                            key={today.id}
                        >
                            <div className="today_type">
                                <span>{today.type}</span>
                            </div>
                            <div className="img_box">
                                {today.photo ? (
                                    <img
                                        src={today.photo}
                                        loading="lazy"
                                        alt={today.title}
                                    />
                                ) : (
                                    <div className="no_image">
                                        <span>not Image</span>
                                    </div>
                                )}
                            </div>
                            <div className="items">
                                <h3 className="today_title">
                                    {today.title.length > 30
                                        ? today.title.substring(0, 30) +
                                          "..." +
                                          (today.comments &&
                                          today.comments.length > 0
                                              ? ` (${today.comments.length})`
                                              : "")
                                        : today.title +
                                          (today.comments &&
                                          today.comments.length > 0
                                              ? ` (${today.comments.length})`
                                              : "")}
                                </h3>
                                <div className="item_contents">
                                    <div className="sub_items">
                                        <span className="item_nickname">
                                            <AiOutlineUser /> {today.nickname}
                                        </span>
                                        <span className="item_date">
                                            <AiOutlineFieldTime />{" "}
                                            {today.createdAt}
                                        </span>
                                        <span className="item_views">
                                            <AiOutlineLike />{" "}
                                            {today.recommend > 0
                                                ? today.recommend
                                                : 0}
                                        </span>
                                    </div>
                                </div>
                                <p className="today_desc">
                                    {today.desc.length > 60
                                        ? today.desc.substring(0, 60) + "..."
                                        : today.desc}
                                </p>
                            </div>
                        </li>
                    ))}
            </TodayListContainer>
            <PageNation
                currentPage={currentPage}
                totalPages={totalPages}
                goToPage={goToPage}
                getPageNumbers={getPageNumbers}
            />
        </>
    );
};
