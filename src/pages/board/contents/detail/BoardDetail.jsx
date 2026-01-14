import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getBoards} from "../../../../store/reducers/boardSlice";
import {BoardDetailContainer, BoardDetailWrap} from "./BoardDetail.css";
import {Info} from "./contents/Info";
import {Comments} from "./contents/Comments";
import {useScrollToTop} from "../../../../hooks/useScrollToTop";
import {useModalState} from "../../../../hooks/useModalState";
import {Modal} from "../../../../components/common/Modal";

const BoardDetail = () => {
    const {id} = useParams();
    const boardList = useSelector((state) => state.board.boards);
    const user = useSelector((state) => state.login.user);
    const [comment, setComment] = useState(false);
    const dispatch = useDispatch();

    const board = boardList.find((board) => board.id === id);
    const {isOpen, handleOpen, handleClose, toggleModal} = useModalState();

    const commentClick = () => {
        if (!user) {
            handleOpen();
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
                        <Info
                            board={board}
                            commentClick={commentClick}
                            handleOpen={handleOpen}
                        />
                        {comment && board.comments && (
                            <Comments comments={board.comments} board={board} />
                        )}
                    </div>
                )}
            </BoardDetailContainer>

            {isOpen && (
                <Modal
                    type="경고"
                    title="로그인 필요"
                    description="좋아요 및 댓글 작성을 위해서는 로그인이 필요합니다."
                    isCancel={true}
                    isConfirm={true}
                    handleClose={handleClose}
                />
            )}
        </BoardDetailWrap>
    );
};

export default BoardDetail;
