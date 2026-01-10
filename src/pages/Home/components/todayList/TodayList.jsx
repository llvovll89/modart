import {useEffect} from "react";
import {Card} from "../../../../styles/RecycleStyles";
import {useDispatch, useSelector} from "react-redux";
import {getTodays} from "../../../../store/reducers/todaySlice";
import {Link} from "react-router-dom";
import {AiOutlinePlus, AiOutlineArrowUp} from "react-icons/ai";
import {TodayListContainer, TodayListWrap} from "./styles/TodayList.css";
import {useCollapse} from "../../hooks/useCollapse";

const TodayList = () => {
    const todayList = useSelector((state) => state.today.todays);
    const dispatch = useDispatch();

    const {
        handleCollapse,
        handleLoadMore,
        collapsed,
        visibleCount,
        filteredList,
    } = useCollapse({elementId: "today_list", list: todayList});

    useEffect(() => {
        dispatch(getTodays());
    }, [dispatch]);

    return (
        <TodayListWrap id="today_list">
            <TodayListContainer>
                <div className="title">
                    <h1>투데이스토리</h1>
                    <span>(Today Story)</span>
                </div>

                <div className="desc">
                    <p>🔥 오늘의 이야기를 만나보세요</p>
                    <p>📝 다양한 주제의 글을 읽고, 공감해보세요.</p>
                    <p>💬 댓글로 소통하며 나만의 생각을 나눠보세요.</p>
                </div>

                <div className="contents">
                    {filteredList.length > 0 && (
                        <>
                            {filteredList
                                .slice(0, visibleCount)
                                .map((today) => (
                                    <Card key={today.id} className="today_card">
                                        <div className="top">
                                            {today.photo ? (
                                                <Link
                                                    to={`today/details/${today.id}`}
                                                >
                                                    <img
                                                        src={today.photo}
                                                        alt="today"
                                                    />
                                                </Link>
                                            ) : (
                                                <div className="not_found_img">
                                                    <span className="title">
                                                        Not Found Img
                                                    </span>
                                                    <span>
                                                        이미지가 없습니다.
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="bottom">
                                            <div className="board_info_top">
                                                <p className="today_nickname">
                                                    {today.nickname}
                                                </p>
                                                <p className="today_category">{`${today.type}`}</p>
                                            </div>

                                            <div className="board_info_bottom">
                                                <p className="today_title">
                                                    {today.title}
                                                </p>
                                                <p className="today_desc">
                                                    {today.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                        </>
                    )}
                </div>

                {filteredList.length > 4 && (
                    <div className="visible">
                        {collapsed ? (
                            <button onClick={handleCollapse}>
                                <span className="closed">
                                    <AiOutlineArrowUp />
                                </span>
                            </button>
                        ) : (
                            <button onClick={handleLoadMore}>
                                <span>
                                    <AiOutlinePlus />
                                </span>
                            </button>
                        )}
                    </div>
                )}
            </TodayListContainer>
        </TodayListWrap>
    );
};

export default TodayList;
