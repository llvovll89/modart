import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Section } from '../../styles/RecycleStyles';
import { QnaArticle } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  addComment,
  deleteComment,
  editComment,
  getQna,
  recommendViews,
} from '../../store/reducers/qnaSlice';
import NoImage from '../../assets/images/user.png';
import { AiOutlineLike, AiOutlineComment, AiOutlineStar } from 'react-icons/ai';

const QnaDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [updatedCommentText, setUpdatedCommentText] = useState('');
  const qnaList = useSelector((state) => state.qna.questions);
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const qna = qnaList.find((question) => question.id === id);

  const likeButtonClick = (qnaId) => {
    dispatch(recommendViews({ qnaId }))
      .then(() => {
        dispatch(getQna());
      })
      .catch((err) => {
        console.error('좋아요를 클릭 할 수 없습니다!', err);
      });
  };

  const textAreaAlert = () => {
    if (user) {
      return null;
    } else {
      window.alert('로그인하여야 입력가능합니다!');
      return null;
    }
  };

  const submitComment = (questionId) => {
    if (!user) {
      window.alert('로그인한 유저만 댓글을 쓸 수 있습니다!');
      return;
    }

    if (commentText.trim() === '') {
      window.alert('댓글을 입력 해주세요!');
      return;
    }

    const commentData = {
      text: commentText,
      author: user.nickname,
      profileImg: user.profileImg || '',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(addComment({ questionId, commentData }))
      .then(() => {
        setCommentText('');
        dispatch(getQna());
      })
      .catch((error) => {
        console.error('댓글을 추가할 수 없습니다.', error);
      });
  };

  const editComments = (questionId, commentId) => {
    if (!user) {
      window.alert('로그인하여야 댓글을 수정할 수 있습니다!');
      return;
    }

    if (updatedCommentText.trim() === '') {
      window.alert('수정할 댓글을 입력해주세요!');
      return;
    }

    const comment = qna.comments[commentId];

    const commentData = {
      text: updatedCommentText,
      author: comment.author,
      profileImg: comment.profileImg,
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(editComment({ questionId, commentId, commentData }))
      .then(() => {
        dispatch(getQna());
        setEditingCommentId(null);
        setUpdatedCommentText('');
      })
      .catch((error) => {
        console.error('댓글을 수정할 수 없습니다.', error);
      });
  };

  const deletedComment = (questionId, commentId) => {
    if (!user) {
      window.alert('로그인 하여야 삭제 가능합니다!');
      return;
    }

    const comment = qna.comments[commentId];

    if (comment && comment.author !== user.nickname) {
      window.alert('다른 유저의 댓글은 삭제할 수 없습니다!');
      return;
    }

    dispatch(deleteComment({ questionId, commentId }))
      .then(() => {
        dispatch(getQna());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    dispatch(getQna());
  }, [dispatch]);

  return (
    <Section>
      <QnaArticle>
        {qna && (
          <div className="qna_card">
            <header className="card_header">
              <h1>
                <span>Q.</span>
                {qna.title}
              </h1>
              <div className="card_info">
                <div className="inner">
                  <div className="profile_img">
                    <img src={NoImage} alt={qna.nickname} />
                  </div>
                  <span>{qna.nickname}</span>
                </div>
                <div className="inner">
                  <span>👍 {qna.recommend}</span>
                  <span className="date">{qna.createdAt}</span>
                </div>
              </div>
            </header>
            <div className="card_contents">
              <p className="card_desc">{qna.desc}</p>
            </div>
            <footer className="card_footer">
              <div className="inner">
                <button
                  className="qna_btn"
                  onClick={() => likeButtonClick(qna.id)}
                >
                  <AiOutlineLike /> 좋아요
                </button>
                <button className="qna_btn">
                  <AiOutlineStar /> 스크랩하기
                </button>
                <button
                  className="qna_btn"
                  onClick={() => setComment(!comment)}
                >
                  <AiOutlineComment /> 답변하기
                </button>
              </div>

              {!comment && (
                <div className="comment">
                  <div className="comment_in">
                    <div className="top">
                      {user ? (
                        <div className="profile">
                          <img src={user.profileImg} alt={user.nickname} />
                          <span>{user.nickname}</span>
                        </div>
                      ) : (
                        <Link to="/account/login">로그인을 해주세요.</Link>
                      )}
                      <button
                        className="submit"
                        onClick={() => submitComment(qna.id)}
                      >
                        답변등록
                      </button>
                    </div>
                    <div className="bottom">
                      <textarea
                        onClick={textAreaAlert}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="답변을 입력해주세요.."
                        value={commentText}
                      />
                    </div>
                  </div>

                  {qna.comments &&
                    Object.keys(qna.comments).map((commentId) => {
                      const comment = qna.comments[commentId];
                      const isEditing = editingCommentId === commentId;

                      return (
                        <div key={commentId} className="comment_item">
                          <div className="profile">
                            <div className="user">
                              {user && user.profileImg ? (
                                <img
                                  src={user.profileImg}
                                  alt={user.nickname}
                                />
                              ) : (
                                <img src={NO_IMAGE_URL} alt={comment.author} />
                              )}
                              <span>{comment.author}</span>
                            </div>
                            <span className="date">{comment.createdAt}</span>
                          </div>
                          <div className="comment_desc">
                            {isEditing ? (
                              <input
                                type="text"
                                value={updatedCommentText}
                                onChange={(e) =>
                                  setUpdatedCommentText(e.target.value)
                                }
                                className="edit_value"
                              />
                            ) : (
                              <p>{comment.text}</p>
                            )}
                          </div>
                          <div className="comment_btns">
                            {user && (
                              <button
                                className="edit_btn"
                                onClick={() => setEditingCommentId(commentId)}
                              >
                                수정
                              </button>
                            )}
                            {user && (
                              <button
                                className="delete_btn"
                                onClick={() =>
                                  deletedComment(qna.id, commentId)
                                }
                              >
                                삭제
                              </button>
                            )}
                            {isEditing && (
                              <button
                                className="save_btn"
                                onClick={() => editComments(qna.id, commentId)}
                              >
                                저장
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </footer>
          </div>
        )}
      </QnaArticle>
    </Section>
  );
};

export default QnaDetail;
