import { useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { getBoards } from "../../../../store/reducers/boardSlice";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useResizeLayout } from "../../../../hooks/useResizeLayout";
import { Card } from "../../../../styles/RecycleStyles";
import { BoardListContainer, BoardListWrap } from "./styles/BoardList.css";

const BoardList = () => {
    const boardList = useSelector((state) => state.board.boards);
    const { perPage, gap, focus } = useResizeLayout({
        itemList: boardList,
        getItems: getBoards,
    });

    console.log(boardList);

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
                            extensions={{ AutoScroll }}
                        >
                            {boardList.map((board) => {
                                return (
                                    <SplideSlide key={board.id}>
                                        <Card
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

                                                {(() => {
                                                    const brands = Array.isArray(board.brand)
                                                        ? board.brand.filter(Boolean)
                                                        : String(board.brand || "")
                                                            .split(",")
                                                            .map((s) => s.trim())
                                                            .filter(Boolean);

                                                    const visible = brands.slice(0, 2);
                                                    const hasMore = brands.length > 2;

                                                    return (
                                                        <div
                                                            className="meta_left"
                                                            title={brands.join(", ")}
                                                        >
                                                            {visible.map((item, index) => (
                                                                <div
                                                                    key={`${board.id}-brand-${index}-${item}`}
                                                                    className="item_brand"
                                                                >
                                                                    {item}
                                                                </div>
                                                            ))}

                                                            {hasMore && (
                                                                <div
                                                                    className="item_brand more"
                                                                    aria-label="추가 브랜드 있음"
                                                                >
                                                                    ...
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })()}
                                            </div>

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
