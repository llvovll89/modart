import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBoards} from "../../../../store/reducers/boardSlice";
import {BoardDetailContainer, BoardDetailWrap} from "./BoardDetail.css";
import {Info} from "./contents/Info";
import {Comments} from "./contents/Comments";
import {useScrollToTop} from "../../../../hooks/useScrllToTop";
const BoardDetail = () => {
    const {id} = useParams();
    const boardList = useSelector((state) => state.board.boards);
    const user = useSelector((state) => state.login.user);
    const [comment, setComment] = useState(false);
    const dispatch = useDispatch();

    const board = boardList.find((board) => board.id === id);

    const commentClick = () => {
        if (!user) {
            window.alert("로그인 후 이용해 주시기 바랍니다.");
            return;
        }

        setComment(!comment);
    };

    useEffect(() => {
        dispatch(getBoards());
    }, [dispatch]);

    useScrollToTop();

    return (
        <BoardDetailWrap>
            <BoardDetailContainer>
                {board && (
                    <div className="contents">
                        <Info board={board} commentClick={commentClick} />
                        {comment && board.comments && (
                            <Comments comments={board.comments} />
                        )}
                    </div>
                )}
            </BoardDetailContainer>
        </BoardDetailWrap>
    );
};

export default BoardDetail;
