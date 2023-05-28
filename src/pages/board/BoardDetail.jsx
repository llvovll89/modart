import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../store/reducers/boardSlice';
import { Section } from '../../styles/RecycleStyles';
import { BoardDetailPage } from '.';
import BoardImg from '../../assets/images/main.gif';

const BoardDetail = () => {
  const { id } = useParams();
  const boardList = useSelector((state) => state.board.boards);
  const user = useSelector((state) => state.login.user);
  const [comment, setComment] = useState(false);
  const dispatch = useDispatch();

  const board = boardList.find((board) => board.id === id);

  const commentClick = () => {
    setComment(!comment);
  };

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

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
                  <div className="user">
                    <div className="user_info">
                      <img src={BoardImg} alt={board.nickname} />
                      <p>{board.nickname}</p>
                    </div>
                    <div className="like">
                      {board.like ? <p>{board.like}(회)</p> : <p>30 (회)</p>}
                    </div>
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
                <div className="btnbox">
                  <button className="like">좋아요</button>
                  <button onClick={commentClick}>{comment ? "댓글닫기" : "댓글달기"}</button>
                </div>
              </div>
            </div>
            {comment ? (
              <div className="comment">
                <div className="comment_form">
                  <div className="users">
                    <div className="profile">
                      <img
                        className="profileImg"
                        src={user.profileImg}
                        alt={user.nickname}
                      />
                      <p className="nickname">{user.nickname}</p>
                    </div>
                    <button className="submit_btn" type="submit">
                      댓글등록
                    </button>
                  </div>
                  <div className="form">
                    <textarea name="comment" id="comment" />
                  </div>
                </div>

                <ul className="comment_list">
                  <li></li>
                </ul>
              </div>
            ) : null}
          </div>
        )}
      </BoardDetailPage>
    </Section>
  );
};

export default BoardDetail;
