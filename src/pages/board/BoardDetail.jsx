import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComment,
  getBoards,
  recommendViews,
} from '../../store/reducers/boardSlice';
import { Section } from '../../styles/RecycleStyles';
import { BoardDetailPage } from '.';
import BoardImg from '../../assets/images/main.gif';
import moment from 'moment';

const BoardDetail = () => {
  const { id } = useParams();
  const boardList = useSelector((state) => state.board.boards);
  const user = useSelector((state) => state.login.user);
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();

  const NO_IMG_URL = 'https://via.placeholder.com/500x700.png?text=No+Image';

  const board = boardList.find((board) => board.id === id);

  const commentClick = () => {
    setComment(!comment);
  };

  const addCommentHandler = (boardId) => {
    if (!user) {
      window.alert('로그인 하셔야 등록할 수 있습니다.');
      return;
    }

    const commentData = {
      id: Date.now(),
      text: commentText,
      author: user.nickname,
      profileImg: user.profileImg ? user.profileImg : "",
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(addComment({ boardId, commentData })).then(() => {
      setCommentText('');
      dispatch(getBoards());
    });
  };

  const likeBtnClick = (boardId) => {
    if (!user) {
      window.alert('로그인 후 이용해 주시기 바랍니다.');
      return;
    }

    dispatch(recommendViews({ boardId })).then(() => {
      getBoards();
    });
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
                      {board.views ? <p>{board.views}(회)</p> : <p>0 (회)</p>}
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
                  <button
                    className="like"
                    onClick={() => likeBtnClick(board.id)}
                  >
                    좋아요
                  </button>
                  <button onClick={commentClick}>
                    {comment ? '댓글닫기' : '댓글달기'}
                  </button>
                </div>
              </div>
            </div>
            {comment || board.comments ? (
              <div className="comment">
                <div className="comment_form">
                  <div className="users">
                    <div className="profile">
                      {user ? (
                        <div className="profile_contents">
                          <img
                            className="profileImg"
                            src={user.profileImg}
                            alt={user.nickname}
                          />
                          <p className="nickname">{user.nickname}</p>
                        </div>
                      ) : (
                        <div className="profile_contents">
                          <img
                            className="profileImg"
                            src={NO_IMG_URL}
                            alt="default_user"
                          />
                          <p className="nickname">default_user</p>
                        </div>
                      )}
                    </div>
                    <button
                      className="submit_btn"
                      type="submit"
                      onClick={() => addCommentHandler(board.id)}
                    >
                      댓글등록
                    </button>
                  </div>
                  <div className="form">
                    <textarea
                      name="comment"
                      id="comment"
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                  </div>
                </div>

                <ul className="comment_list">
                  {board.comments &&
                    Object.entries(board.comments).map(
                      ([commentId, comment]) => {
                        return (
                          <li className="comment_item" key={commentId}>
                            <div className="profile">
                              <div className="users">
                              {comment.profileImg ? (
                                <img src={comment.profileImg} alt="" />
                              ) : (
                                <img src={NO_IMG_URL} alt="" />
                              )}
                              <span className="comment_name">
                                {comment.author}
                              </span>
                              </div>
                              <span className="comment_date">
                                {comment.createdAt}
                              </span>
                            </div>
                            <div className="content">
                                <p className="comment_desc">{comment.text}</p>
                            </div>
                          </li>
                        );
                      }
                    )}
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
