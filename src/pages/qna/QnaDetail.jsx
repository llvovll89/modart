import React, { useEffect, useState } from 'react';
import { Section } from '../../styles/RecycleStyles';
import { QnaArticle } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getQna } from '../../store/reducers/qnaSlice';


const QnaDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(false);
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
  } , [dispatch]);

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
              <span className='date'>2023-05-18</span>
            </div>
          </header>
          <div className="card_contents">
            <p className="card_desc">qna내용</p>
          </div>
          <footer className="card_footer">
            <div className="inner">
              <button>좋아요</button>
              <button onClick={() => setComment(!comment)}>댓글</button>
              <button>공유하기</button>
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
