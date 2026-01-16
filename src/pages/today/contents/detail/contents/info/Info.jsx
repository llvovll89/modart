import {useDispatch} from "react-redux";
import {InfoContainer} from "./Info.css";
import {
    getTodays,
    recommendViews,
} from "../../../../../../store/reducers/todaySlice";
import {CiHeart, CiRead, CiChat1} from "react-icons/ci";

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
            </header>

            <div className="user_info">
                <div className="left">
                    <div className="author">
                        <div className="user_img"></div>
                        <p className="user_nickname">{currentToday.nickname}</p>
                    </div>
                    <p className="today_date">{currentToday.createdAt}</p>
                </div>
                <ul className="items">
                    <li>
                        <CiChat1 size={22} />
                        <span>
                            {currentToday.comments &&
                            currentToday.comments.length > 0
                                ? currentToday.comments.length
                                : 0}
                        </span>
                    </li>
                    <li>
                        <CiRead size={22} />
                        <span>{currentToday.views}</span>
                    </li>
                    <li>
                        <CiHeart size={22} />
                        <span>
                            {currentToday.recommend > 0
                                ? currentToday.recommend
                                : 0}
                        </span>
                    </li>
                </ul>
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
