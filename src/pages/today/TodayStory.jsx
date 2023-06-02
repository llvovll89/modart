import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { TodayContainer, TodayContents } from './index';
import { TfiWrite } from 'react-icons/tfi';
import { getTodays, incrementViews } from '../../store/reducers/todaySlice';
import Loading from '../../components/common/Loading';

const TodayStory = () => {
  const user = useSelector((state) => state.login.user);
  const todayList = useSelector((state) => state.today.todays);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const typeColor = (type) => {
    switch (type) {
      case '연예인':
        return 'type1';
      case '패션':
        return 'type2';
      case '운동':
        return 'type3';
      case '유머':
        return 'type4';
      case '미용':
        return 'type5';
      case '미스터리':
        return 'type6';
      default:
        return '';
    }
  };

  const handleWriteClick = () => {
    if (user) {
      return navigate('/today/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  const handleTodayClick = (todayId) => {
    dispatch(incrementViews({ todayId }))
      .then(() => {
        dispatch(getTodays());
      })
      .catch((err) => {
        console.error('Error incrementing Views:', err);
      });
  };

  const detailClick = (today) => {
    navigate(`/today/details/${today.id}`);
  };

  useEffect(() => {
    dispatch(getTodays());
  }, [dispatch]);

  return (
    <Section className="today_section">
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
                <div className="today_type">
                  <span className={`today_type_span ${typeColor(today.type)}`}>{today.type}</span>
                </div>
                <div className="today_img">
                  {today.photo ? (
                    <img src={today.photo} loading="lazy" alt={today.title} />
                  ) : (
                    <img src={NO_IMAGE_URL} loading="lazy" alt={today.title} />
                  )}
                </div>
                <div className="items">
                  <h3
                    className="today_title"
                    onClick={() => {
                      detailClick(today), handleTodayClick(today.id);
                    }}
                  >
                  {today.title.length > 30
                    ? today.title.substring(0, 30) + '...' + (today.comments && today.comments.length > 0 ? ` (${today.comments.length})` : '')
                    : today.title + (today.comments && today.comments.length > 0 ? ` (${today.comments.length})` : '')
                  }
                  </h3>
                  <div className="item_contents">
                    <span className="item_type">{today.type}</span>
                    <div className="sub_items">
                      <span className="item_nickname">{today.nickname}</span>
                      <span className="item_date">{today.createdAt}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </TodayContents>
    </Section>
  );
};

export default TodayStory;
