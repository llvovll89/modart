import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { BoardContainer } from '.';
import { AiFillSkin } from 'react-icons/ai';

const Board = () => {
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if(user) {
      return navigate('/board/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  }

  return (
    <Section>
      <BoardContainer>
        <div className="contents">
          <div className="text">
            <p>OOTD of the day</p>
            <span>자신의 OOTD를 공유 해주세요!</span>
            <button className='link-btn' onClick={handleWriteClick}>
              게시글쓰기
            </button>
          </div>
          <div className="image">
            <AiFillSkin />
          </div>
        </div>
      </BoardContainer>
    </Section>
  )
}

export default Board