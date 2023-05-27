import React, { useEffect, useState } from 'react';
import { Section } from '../../styles/RecycleStyles';
import { QnaArticle } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getQna } from '../../store/reducers/qnaSlice';
import NoImage from '../../assets/images/user.png';
import { AiOutlineLike, AiOutlineComment, AiOutlineStar } from 'react-icons/ai';

const QnaDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(false);
  const [commentText, setCommentText] = useState('');
  const qnaList = useSelector((state) => state.qna.questions);
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const qna = qnaList.find((question) => question.id === id);
  console.log(qna);

  const textAreaAlert = () => {
    if (user) {
      return null;
    } else {
      window.alert('로그인하여야 입력가능합니다!');
      return null;
    }
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
                <span className="date">{qna.createdAt}</span>
              </div>
            </header>
            <div className="card_contents">
              <p className="card_desc">{qna.desc}</p>
            </div>
            <footer className="card_footer">
              <div className="inner">
                <button className="qna_btn">
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

              {comment ? (
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
                      <button className='submit'>댓글등록</button>
                    </div>
                    <div className="bottom">
                      <textarea
                        onClick={textAreaAlert}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="답변을 입력해주세요.."
                      />
                    </div>
                  </div>

                  {/*
                      {매핑 댓글}
            */}
                </div>
              ) : null}
            </footer>
          </div>
        )}
      </QnaArticle>
    </Section>
  );
};

export default QnaDetail;
