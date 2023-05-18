import React from 'react';
import { Section } from '../../styles/RecycleStyles';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { QnaContainer, QnaContents } from '.';

const Qna = () => {
  const user = useSelector((state) => state.login.user);
  const qnaList = useSelector((state) => state.qna.questions);
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (user) {
      return navigate('/qna/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  return (
    <Section>
      <QnaContainer>
        <div className="contents">
          <div className="text">
            <p>Ask me any questions</p>
            <span>질문과 답변을 해주세요!</span>
            <button className="link-btn" onClick={handleWriteClick}>
              질문하기
            </button>
          </div>

          <div className="image">
            <AiFillQuestionCircle />
          </div>
        </div>
      </QnaContainer>

      <QnaContents>
        <ul className="qna_list">
          {qnaList.length > 0 ? (
            qnaList.slice(0, 10).map((qna) => (
              <li className="qna_card" key={qna.id}>
                <div className="qna_img">
                  <img src={qna.photo} loading="lazy" alt={qna.title} />
                </div>
                <div className="items">
                  <h3 className="qna_title">{qna.title}</h3>
                  <div className="item_contents">
                    <span className="item_category">{qna.category}</span>
                    <span className="item_date">날짜</span>
                    <span className="item_nickname">{qna.nickname}</span>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="no-data">
              <h3>저장된 게시글이 없습니다...</h3>
            </div>
          )}
        </ul>
      </QnaContents>
    </Section>
  );
};

export default Qna;
