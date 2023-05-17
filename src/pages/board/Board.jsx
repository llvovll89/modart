import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Section } from '../../styles/RecycleStyles';
import { BoardContainer, BoardContents } from './index';
import { AiFillSkin } from 'react-icons/ai';

const Board = () => {
  const user = useSelector((state) => state.login.user);
  const boardList = useSelector((state) => state.board.boards);
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (user) {
      return navigate('/board/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  return (
    <Section>
      <BoardContainer>
        <div className="contents">
          <div className="text">
            <p>OOTD of the day</p>
            <span>자신의 OOTD를 공유 해주세요!</span>
            <button className="link-btn" onClick={handleWriteClick}>
              게시글쓰기
            </button>
          </div>
          <div className="image">
            <AiFillSkin />
          </div>
        </div>
      </BoardContainer>
      <BoardContents>
        <ul className="board_list">
        {boardList &&
          boardList.map((board) => (
            <li className="board_card" key={board.id}>
              <div className="items">
                <h3 className="board_title">{board.title}</h3>
                <div className="item_contents">
                  <span className="item_brand">{board.brand}</span>
                  <span className="item_date">날짜받아와야댐</span>
                  <span className="item_nickname">{board.nickname}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </BoardContents>
    </Section>
  );
};

export default Board;
