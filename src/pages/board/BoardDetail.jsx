import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../store/reducers/boardSlice';
import { DetailForm, Section } from '../../styles/RecycleStyles';
import { BoardDetailPage } from '.';
import { AiFillHeart } from 'react-icons/ai';
import BoardImg from '../../assets/images/main.gif';

const BoardDetail = () => {
  const { id } = useParams();
  const boardList = useSelector((state) => state.board.boards);
  const dispatch = useDispatch();

  const board = boardList.find((board) => board.id === id);

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  useEffect(() => {
    const board = boardList.find((board) => board.id === id);
    console.log(board);
  }, [boardList, id]);

  return (
    <Section>
      <BoardDetailPage>
        {board && (
          <div className="contents">
            <div className="board">
              <div className="boardImg">
                <img src={board.photo} alt={board.nickname} />
              </div>
              <div className="boardInfo">
                <div className="title">
                  <h1>
                    Information <span>{'< 스타일 정보 >'}</span>
                  </h1>
                  <p className="date">{board.createdAt}...</p>
                </div>
                <div className="info">
                  <div className="area">
                    <div className="user_img">
                      <img src={BoardImg} alt={board.nickname} />
                    </div>
                    <p>{board.nickname}</p>
                  </div>
                  <div className="area">
                    <label>Title</label>
                    <p>{board.title}</p>
                  </div>
                  <div className="area">
                    <label>Brand</label>
                    <p>{board.brand}</p>
                  </div>
                  <div className="area">
                    <label>Spec</label>
                    <div className="spec">
                    <p>Height: {board.height}</p>
                    <p>Weight: {board.weight}</p>
                    </div>
                  </div>
                  <div className="area">
                    <label>Contents</label>
                    <p>{board.desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment">
              <div className="comment_form">
                <div className="users">

                </div>
                <div className="form"></div>
              </div>

              <ul className="comment_list">
                <li></li>
              </ul>
            </div>
          </div>
        )}
      </BoardDetailPage>
    </Section>
  );
};

export default BoardDetail;
