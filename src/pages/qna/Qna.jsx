import React from 'react'
import { Container, Section } from '../../styles/RecycleStyles'
import { AiFillQuestionCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { QnaContainer } from '.';

const Qna = () => {
  const user = useSelector((state) => state.login.user);
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
            게시글쓰기
          </button>
        </div>

        <div className="image">
          <AiFillQuestionCircle />
        </div>
      </div>
    </QnaContainer>
      <Container></Container>
    </Section>
  )
}

export default Qna