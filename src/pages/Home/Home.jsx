import React from 'react';
import BoardList from '../board/BoardList';
import QnaList from '../qna/QnaList';
import PhotoList from '../photos/PhotoList';
import Main from '../../components/main/Main';
import TodayList from '../today/TodayList';
// <Main />

const Home = () => {
  return (
    <>
      <Main />
      <BoardList />
      <TodayList />
      <PhotoList />
      <QnaList />
    </>
  );
};

export default Home;
