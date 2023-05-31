import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  addComment,
  editComment,
  deleteComment,
  getTodays,
  incrementViews,
  recommendViews,
} from '../../store/reducers/todaySlice';
import { TodayDetailPage } from '.';
import uuid from 'react-uuid';

const TodayDetail = () => {
  const [commentText, setCommentText] = useState('');
  const { id } = useParams();
  const user = useSelector((state) => state.login.user);
  const todays = useSelector((state) => state.today.todays);
  const today = todays.find((todayId) => todayId.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRecommendClick = (todayId) => {
    dispatch(recommendViews({ todayId }))
      .then(() => {
        dispatch(getTodays());
      })
      .catch((err) => {
        console.error('추천을 할 수 없습니다.', err);
      });
  };

  const addCommentHandler = (todayId) => {
    if (!user) {
      window.alert('로그인한 유저만 댓글을 쓸 수 있습니다.');
      return;
    }

    if (commentText.trim() === '') {
      window.alert('댓글을 입력 해주세요!');
      return;
    }

    const commentData = {
      author: user.nickname,
      text: commentText,
      profileImg: user.profileImg || '',
      createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    };

    dispatch(addComment({ todayId, commentData }))
      .then(() => {
        setCommentText('');
        dispatch(getTodays());
      })
      .catch((err) => {
        console.error('댓글을 추가 할 수 없습니다.', err);
      });
  };

  const editCommentHandler = () => {};

  const deleteCommentHandler = (todayId, commentId) => {
    console.log(todayId, commentId);

    if (!user) {
      window.alert('로그인한 유저만 삭제 할 수 있습니다.');
      return;
    }

    const comment = today.comments[commentId];

    if (comment && comment.author !== user.nickname) {
      window.alert('다른 유저의 댓글은 삭제할 수 없습니다!');
      return;
    }

    dispatch(deleteComment({ todayId, commentId }))
      .then(() => {
        dispatch(getTodays());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const commentLoginCheck = () => {
    if (user) {
      return null;
    } else {
      const alertLogin = confirm('로그인 하시겠습니까~?');
      if (alertLogin) {
        navigate('account/login');
      } else {
        document.querySelector('.comment_input').disabled = true;
      }
    }
  };

  useEffect(() => {
    dispatch(getTodays());
  }, [dispatch]);

  return (
    <Section className="today_detail_section">
      <TodayDetailPage>
        {today && (
          <div className="contents">
            <header className="today_header">
              <h2 className="today_title">
                <span className="today_type">{`(${today.type})`}</span>
                {today.title.length > 30
                  ? today.title.subStr(0, 30) + '...'
                  : today.title}
              </h2>
              <p className="today_date">{today.createdAt}</p>
            </header>
            <div className="user_info">
              <p className="user_nickname">{today.nickname}</p>
              <div className="items">
                <span>댓글</span>
                <span>조회수 {today.views}</span>
                <span>추천 {today.recommend > 0 ? today.recommend : 0}</span>
              </div>
            </div>
            <div className="today_desc">
              <p className="desc">{today.desc}</p>

              <button
                className="recommend"
                onClick={() => handleRecommendClick(today.id)}
              >
                👍추천하기
              </button>
            </div>

            <div className="comment">
              <header className="comment_header">
                <p>
                  댓글 {today.comments?.length > 0 ? today.comments.length : 0}{' '}
                  개
                </p>
              </header>

              <ul className="comment_list">
                {today.comments &&
                  Object.entries(today.comments).map(([commentId, comment]) => {
                    return (
                      <li className="comment_item" key={commentId}>
                        <div className="top">
                          <img src={comment.profileImg} alt="" />
                          <span className="comment_name">{comment.author}</span>
                          <span className="comment_date">
                            {comment.createdAt}
                          </span>
                        </div>
                        <div className="bt">
                          <p className="comment_desc">{comment.text}</p>
                        </div>
                        {comment.author === user.nickname ? (
                          <div className="btns">
                            <button>수정하기</button>
                            <button
                              className="delete"
                              onClick={() =>
                                deleteCommentHandler(today.id, commentId)
                              }
                            >
                              삭제하기
                            </button>
                          </div>
                        ) : null}
                      </li>
                    );
                  })}

                <div className="comments">
                  <div className="profile">
                    <img src={user.profileImg} alt={user.nickname} />
                    <span>{user.nickname}</span>
                  </div>
                  <p className="comment_text">댓글 쓰기</p>
                  <div className="comment_form">
                    <input
                      className="comment_input"
                      type="text"
                      placeholder="댓글..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      onClick={commentLoginCheck}
                    />
                    <button
                      className="submit"
                      onClick={() => addCommentHandler(today.id)}
                    >
                      등록
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        )}
      </TodayDetailPage>
    </Section>
  );
};

export default TodayDetail;
