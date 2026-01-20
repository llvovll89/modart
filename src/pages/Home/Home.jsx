import QnaList from "./components/qnaList/QnaList";
import TodayList from "./components/todayList/TodayList";
import BoardList from "./components/boardList/BoardList";
import PhotoList from "./components/photoList/PhotoList";
import Main from "./components/main/Main";

const Home = () => {
    return (
        <>
            <Main />
            <BoardList />
            {/* <PhotoList />
            <TodayList /> */}
            <QnaList />
        </>
    );
};

export default Home;
