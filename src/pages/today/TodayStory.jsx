import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {
    TodayStoryWrap,
    TodayInfoContainer,
    TodayContents,
} from "./styles/index";
import {getTodays} from "../../store/reducers/todaySlice";
import {TodayStoryList} from "./contents/list/TodayStoryList";
import {useFilterState} from "../../hooks/useFilterState";
import {AiFillDashboard} from "react-icons/ai";

const TodayStory = () => {
    const user = useSelector((state) => state.login.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {sortType, sortOrder, handleSortClick} = useFilterState();

    const handleWriteClick = () => {
        if (user) {
            return navigate("/today/write");
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
        dispatch(getTodays());
    }, [dispatch]);

    return (
        <TodayStoryWrap>
            <TodayInfoContainer>
                <div className="info">
                    <div className="title">
                        <h1>투데이 스토리</h1>
                        <span>(Today Story)</span>
                    </div>

                    <div className="desc">
                        <p>🔥 오늘의 이야기를 만나보세요</p>
                        <p>📝 다양한 주제의 글을 읽고, 공감해보세요.</p>
                        <p>💬 댓글로 소통하며 나만의 생각을 나눠보세요.</p>
                    </div>
                </div>
            </TodayInfoContainer>

            <TodayContents>
                <div className="form_top">
                    <ul>
                        <li onClick={() => handleSortClick("recent")}>
                            날짜 순
                            {sortType === "recent" &&
                                (sortOrder === "desc" ? " ↓" : " ↑")}
                        </li>
                    </ul>

                    <button className="write_btn" onClick={handleWriteClick}>
                        <AiFillDashboard />
                        <span>스토리 작성하기</span>
                    </button>
                </div>

                <TodayStoryList sortType={sortType} sortOrder={sortOrder} />
            </TodayContents>
        </TodayStoryWrap>
    );
};

export default TodayStory;
