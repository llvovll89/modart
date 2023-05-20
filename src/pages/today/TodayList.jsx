import React, { useEffect, useState, useCallback } from 'react';
import { Section, Container, Card } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getTodays } from '../../store/reducers/todaySlice';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const TodayList = () => {
  const todayList = useSelector((state) => state.today.todays);
  const [perPage, setPerPage] = useState(todayList.length);
  const [gap, setGap] = useState('16px');
  const [focus, setFocus] = useState('left');
  const dispatch = useDispatch();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setPerPage(5);
      setFocus('left');
    } else if (window.innerWidth >= 1024) {
      setPerPage(4);
      setGap('14px');
      setFocus('left');
    } else if (window.innerWidth >= 768) {
      setPerPage(3);
      setGap('12px');
      setFocus('center');
    } else {
      setPerPage(2);
      setGap('10px');
      setFocus('center');
    }
  }, []);

  useEffect(() => {
    dispatch(getTodays());
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, handleResize]);

  return (
    <Section>
      <Container>
        <div className="title">
          <h1>Today Story</h1>
          <span>최신 일상이야기 리스트</span>
        </div>

        {todayList.length > 0 ? (
          <Splide
            options={{
              type: 'loop',
              perPage,
              gap,
              focus,
              pagination: false,
              drag: 'free',
              arrows: false,
              autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                rewind: false,
                speed: -1,
                // speed : 1 우 -> 좌 / -1 좌 -> 우
              },
            }}
            extensions={{ AutoScroll }}
          >
            {todayList.slice(0, 10).map((today) => (
              <SplideSlide key={today.id}>
                <Card>
                  <div className="top">
                    <Link to={`today/details/${today.id}`}>
                      {today.photo ? (
                        <img src={today.photo} alt="today" />
                      ) : (
                        <img src={NO_IMAGE_URL} alt={today.title} />
                      )}
                    </Link>
                  </div>
                  <div className="bottom">
                    <p className="today_category">{`<${today.type}>`}</p>
                    <p className="today_nickname">{today.nickname}</p>
                    <p className="today_title">{today.title}</p>
                    <p className="today_desc">
                      {today.desc.length > 60
                        ? today.desc.slice(0, 50) + '...'
                        : today.desc}
                    </p>
                  </div>
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="no-qna">No TodayList available && Loading.. </div>
        )}
      </Container>
    </Section>
  );
};

export default TodayList;
