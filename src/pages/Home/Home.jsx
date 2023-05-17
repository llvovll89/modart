import React from 'react';
import BoardList from '../board/BoardList';
import QnaList from '../qna/QnaList';
import PhotoList from '../photos/PhotoList';
import Main from '../../components/main/Main';
import DailyList from '../daily/DailyList';
// <Main />

const Home = () => {
  return (
    <>
      <BoardList />
      <DailyList />
      <PhotoList />
      <QnaList />
    </>
  );
};

export default Home;
