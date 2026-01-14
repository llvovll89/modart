import {useDispatch} from "react-redux";
import {InfoContainer} from "./Info.css";
import {
    getTodays,
    recommendViews,
} from "../../../../../../store/reducers/todaySlice";

export const Info = ({currentToday, handleOpen}) => {
    const dispatch = useDispatch();

    const handleRecommendClick = (todayId) => {
        if (user) {
            dispatch(recommendViews({todayId}))
                .then(() => {
                    dispatch(getTodays());
                })
                .catch((err) => {
                    console.error("추천을 할 수 없습니다.", err);
                });
        } else {
            handleOpen();
            return null;
        }
    };

    console.log(currentToday);

    return (
        <InfoContainer>
            <header className="today_header">
                <h2 className="today_title">
                    <span className="today_type">{`(${currentToday.type})`}</span>
                    {currentToday.title}
                </h2>
                <p className="today_date">{currentToday.createdAt}</p>
            </header>

            <div className="user_info">
                <p className="user_nickname">{currentToday.nickname}</p>
                <div className="items">
                    <span>
                        댓글
                        {currentToday.comments &&
                        currentToday.comments.length > 0
                            ? currentToday.comments.length
                            : null}
                    </span>
                    <span>조회수 {currentToday.views}</span>
                    <span>
                        추천
                        {currentToday.recommend > 0
                            ? currentToday.recommend
                            : 0}
                    </span>
                </div>
            </div>

            <div className="today_desc">
                <p className="desc">{currentToday.desc}</p>

                <button
                    className="recommend"
                    onClick={() => handleRecommendClick(currentToday.id)}
                >
                    👍추천하기
                </button>
            </div>
        </InfoContainer>
    );
};
