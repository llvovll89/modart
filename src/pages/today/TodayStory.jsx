import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Section } from '../../styles/RecycleStyles';
import { DailyContainer } from './index';
import { TfiWrite } from 'react-icons/tfi';

const TodayStory = () => {
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (user) {
      return navigate('/today/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  return (
    <Section>
      <DailyContainer>
        <div className="contents">
          <div className="text">
            <p>Free Talking</p>
            <span>하루의 일상을 공유해보세요:)</span>
            <button className="link-btn" onClick={handleWriteClick}>
              게시글쓰기
            </button>
          </div>
          <div className="image">
            <TfiWrite />
          </div>
        </div>
      </DailyContainer>
      <Container></Container>
    </Section>
  );
};

export default TodayStory;
