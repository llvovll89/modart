import React, { useState } from 'react';
import { Section } from '../../styles/RecycleStyles';
import { QnaArticle } from './index';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const QnaDetail = () => {
  const [comment, setComment] = useState(false);
  const user = useSelector((state) => state.login.user);

  const textAreaAlert = () => {
    if (user) {
      return null;
    } else {
      window.alert('로그인하여야 입력가능합니다!');
      return null;
    }
  };

  return (
    <Section>
      <QnaArticle>
        <div className="qna_card">
          <header className="card_header">
            <h1>
              <span>Q.</span>
              질문 title
            </h1>
            <div className="card_info">
              <div className="inner">
                <span>유저이미지?!</span>
                <span>유저nickname</span>
              </div>
              <span>날짜</span>
            </div>
          </header>
          <div className="card_contents">
            <p className="card_desc">qna내용</p>
          </div>
          <footer className="card_footer">
            <div className="inner">
              <button>좋아요</button>
              <button onClick={() => setComment(!comment)}>댓글</button>
            </div>

            {comment ? (
              <div className="comment">
                <div className="comment_in">
                  <div className="top">
                    <span>
                      {user ? (
                        user.nickname
                      ) : (
                        <Link to="/account/login">로그인을 해주세요.</Link>
                      )}
                    </span>
                    <button>등록</button>
                  </div>
                  <div className="bottom">
                    <textarea cols="30" rows="10" onClick={textAreaAlert}>
                      댓글을 입력해주세요.
                    </textarea>
                  </div>
                </div>

                {/*
                        {매핑 댓글}
              */}
              </div>
            ) : null}
          </footer>
        </div>
      </QnaArticle>
    </Section>
  );
};

export default QnaDetail;
