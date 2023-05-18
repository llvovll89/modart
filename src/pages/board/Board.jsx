import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { BoardContainer, BoardContents } from './index';
import { AiFillSkin } from 'react-icons/ai';
import { getBoards } from '../../store/reducers/boardSlice';

const Board = () => {
  const user = useSelector((state) => state.login.user);
  const boardList = useSelector((state) => state.board.boards) || null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWriteClick = () => {
    if (user) {
      return navigate('/board/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  const detailClick = (board) => {
    navigate(`/board/details/${board.id}`);
  };

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

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
          {boardList.length > 0 ? (
            boardList.map((board) => (
              <li className="board_card" key={board.id}>
                <div className="board_img" onClick={() => detailClick(board)}>
                  <img src={board.photo} alt={board.title} />
                </div>
                <div className="items">
                  <h3
                    className="board_title"
                    onClick={() => detailClick(board)}
                  >
                    {board.title.length > 30
                      ? board.title.subString(0, 30) + '...'
                      : board.title}
                  </h3>
                  <div className="item_contents">
                    <span className="item_brand">{board.brand}</span>
                    <div className="sub_items">
                      <span className="item_nickname">{board.nickname}</span>
                      <span className="item_date">{board.createdAt}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="no-data">
              <h3>저장된 게시글이 없습니다.</h3>
            </div>
          )}
        </ul>
      </BoardContents>
    </Section>
  );
};

export default Board;
