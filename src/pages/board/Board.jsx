import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { BoardContainer, BoardContents } from './index';
import { AiFillSkin, AiOutlineLike } from 'react-icons/ai';
import { getBoards, incrementViews } from '../../store/reducers/boardSlice';
import Loading from '../../components/common/Loading';

const Board = () => {
  const user = useSelector((state) => state.login.user);
  const boardList = useSelector((state) => state.board.boards) || null;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleViewsClick = (boardId) => {
    dispatch(incrementViews({ boardId }))
      .then(() => {
        dispatch(getBoards());
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const handleCardClick = (board) => {
    handleViewsClick(board.id);
    detailClick(board);
  }

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  return (
    <Section className="ootd_section">
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
              <li
                className="board_card"
                key={board.id}
              >
                <div className="like">
                  {board.recommend > 0 ? (
                    <>
                    <span><AiOutlineLike /></span>
                    <p className='like_views'>{board.recommend}</p>
                    </>
                  ) : (
                    <>
                    <span><AiOutlineLike /></span>
                    <p className='like_views'>0</p>
                    </>
                  )}
                </div>
                <div className="board_img" onClick={() => handleCardClick(board)}>
                  <img src={board.photo} alt={board.title} />
                </div>
                <div className="items">
                  <h3
                  className="board_title"
                  onClick={() => handleCardClick(board)}
                  >
                    {board.title.length > 30
                      ? board.title.subString(0, 30) + '...'
                      : board.title}
                  </h3>
                  <div className="item_contents">
                    <div className="sub_items">
                    <span className="item_brand">{board.brand}</span>
                    <span className='item_views'>조회수 {board.views}(회)</span>
                    </div>
                    <div className="sub_items">
                      <span className="item_nickname">{board.nickname}</span>
                      <span className="item_date">{board.createdAt}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </BoardContents>
    </Section>
  );
};

export default Board;
