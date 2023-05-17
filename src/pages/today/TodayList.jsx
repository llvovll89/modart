import React from 'react';
import { Section, Container } from '../../styles/RecycleStyles';

const TodayList = () => {
  return (
    <Section>
      <Container>
        <div className="title">
          <h1>Today Story</h1>
          <span>최신 일상이야기 리스트</span>
        </div>
      </Container>
    </Section>
  );
};

export default TodayList;
