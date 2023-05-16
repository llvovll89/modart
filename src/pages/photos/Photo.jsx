import React from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { Container, Section } from '../../styles/RecycleStyles';
import { PhotoContainer } from './index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (user) {
      return navigate('/photo/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  return (
    <Section>
      <PhotoContainer>
        <div className="contents">
          <div className="text">
            <p>Free PhotoZone</p>
            <span>자신의 사진실력을 뽐내주세요!</span>
            <button className="link-btn" onClick={handleWriteClick}>
              게시글쓰기
            </button>
          </div>
          <div className="image">
            <AiFillPicture />
          </div>
        </div>
      </PhotoContainer>
      <Container></Container>
    </Section>
  );
};

export default Photo;
