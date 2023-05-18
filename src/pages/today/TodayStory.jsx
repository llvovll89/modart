import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { TodayContainer, TodayContents } from './index';
import { TfiWrite } from 'react-icons/tfi';

const TodayStory = () => {
  const user = useSelector((state) => state.login.user);
  const todayList = false;
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
      <TodayContainer>
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
      </TodayContainer>

      <TodayContents>
        <ul className="today_list">
          {todayList ? (
            todayList.slice(0, 10).map((today) => (
              <li className="today_card" key={today.id}>
                <div className="today_img">
                  <img src={today.photo} loading="lazy" alt={today.title} />
                </div>
                <div className="items">
                  <h3 className="today_title">{today.title}</h3>
                  <div className="item_contents">
                    <span className="item_category">{today.category}</span>
                    <span className="item_date">날짜</span>
                    <span className="item_nickname">{today.nickname}</span>
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
      </TodayContents>
    </Section>
  );
};

export default TodayStory;
