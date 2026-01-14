import {useSelector} from "react-redux";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link} from "react-router-dom";
import {getBoards} from "../../../../store/reducers/boardSlice";
import {AutoScroll} from "@splidejs/splide-extension-auto-scroll";
import {useResizeLayout} from "../../../../hooks/useResizeLayout";
import {useState} from "react";
import {Container, Section, Card} from "../../../../styles/RecycleStyles";
import {BoardListContainer, BoardListWrap} from "./styles/BoardList.css";
import {useCheckedDesktop} from "../../../../hooks/useCheckedDesktop";

const BoardList = () => {
    const [selectedBoard, setSelectedBoard] = useState(null);
    const boardList = useSelector((state) => state.board.boards);
    const {perPage, gap, focus} = useResizeLayout({
        itemList: boardList,
        getItems: getBoards,
    });
    const isDesktop = useCheckedDesktop();

    return (
        <BoardListWrap id="daily_look_list">
            <BoardListContainer>
                <div className="title">
                    <h1>최신 데일리룩</h1>
                    <span>(Latest daily look)</span>
                </div>

                <div className="desc">
                    <p>🔥 최신 데일리룩 보기</p>
                    <p>
                        ✨ 마음에 드는 스타일이 있다면 상세 페이지로 이동해
                        보세요.
                    </p>
                    <p>
                        🛍️ 스타일이 마음에 든다면, 유저의 다른 게시물도
                        확인해보세요.
                    </p>
                </div>

                <div className="contents">
                    {boardList.length > 0 && (
                        <Splide
                            options={{
                                type: "loop",
                                perPage,
                                gap,
                                focus,
                                pagination: false,
                                drag: "free",
                                arrows: false,
                                autoScroll: {
                                    pauseOnHover: true,
                                    pauseOnFocus: false,
                                    rewind: true,
                                    speed: -1,
                                },
                            }}
                            extensions={{AutoScroll}}
                        >
                            {boardList.map((board) => {
                                const showBottom =
                                    !isDesktop || selectedBoard === board.id;

                                return (
                                    <SplideSlide key={board.id}>
                                        <Card
                                            onMouseOver={() =>
                                                isDesktop
                                                    ? setSelectedBoard(board.id)
                                                    : null
                                            }
                                            onMouseOut={() =>
                                                isDesktop
                                                    ? setSelectedBoard(null)
                                                    : null
                                            }
                                            className="board_card"
                                        >
                                            <Link
                                                to={`board/details/${board.id}`}
                                            />
                                            <div className="top">
                                                <img
                                                    src={board.photo}
                                                    alt="board"
                                                />
                                            </div>

                                            {showBottom && (
                                                <div className="bottom">
                                                    <div className="board_info_top">
                                                        <span className="board_nickname">
                                                            {board.nickname}
                                                        </span>
                                                    </div>

                                                    <div className="board_info_bottom">
                                                        <p className="board_title">
                                                            {board.title}
                                                        </p>
                                                        <p
                                                            title={board.desc}
                                                            className="board_desc"
                                                        >
                                                            {board.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </Card>
                                    </SplideSlide>
                                );
                            })}
                        </Splide>
                    )}
                </div>

                <div className="view_more">
                    <Link to="/board">
                        <span>데일리룩 보러가기 →</span>
                    </Link>
                </div>
            </BoardListContainer>
        </BoardListWrap>
    );
};

export default BoardList;
