import React, { useEffect } from 'react';
import { Section, Container } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getTodays } from '../../store/reducers/todaySlice';

const TodayList = () => {
  const todayList = useSelector((state) => state.today.todays);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodays());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div className="title">
          <h1>Today Story</h1>
          <span>최신 일상이야기 리스트</span>
        </div>

        {todayList.length > 0 ? (
          <div className="qna_card"></div>
        ) : (
          <div className="no-qna">No TodayList available && Loading.. </div>
        )}
      </Container>
    </Section>
  );
};

export default TodayList;
