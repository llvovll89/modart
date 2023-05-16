import React from 'react';
import BoardList from '../board/BoardList';
import QnaList from '../qna/QnaList';
import PhotoList from '../photos/PhotoList';
import Main from '../../components/main/Main';

const Home = () => {
  return (
    <>
      <Main />
      <BoardList />
      <PhotoList />
      <QnaList />
    </>
  );
};

export default Home;
