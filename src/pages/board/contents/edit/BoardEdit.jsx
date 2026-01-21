import React, {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {getBoards} from "../../../../store/reducers/boardSlice";
import BoardForm from "../form/BoardForm";

const BoardEdit = () => {
    const {id} = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const boards = useSelector((state) => state.board.boards) || [];
    const boardFromState = location.state?.board;

    const board = useMemo(() => {
        return boardFromState?.id === id
            ? boardFromState
            : boards.find((b) => b.id === id);
    }, [boardFromState, boards, id]);

    useEffect(() => {
        if (!board) dispatch(getBoards());
    }, [board, dispatch]);

    if (!board) return null; // 필요하면 로딩 UI로 교체

    return <BoardForm mode="edit" boardId={id} initialBoard={board} />;
};

export default BoardEdit;
