import React from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { Container, Section } from '../../styles/RecycleStyles';
import { PhotoContainer, PhotoContents } from './index';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Photo = () => {
  const user = useSelector((state) => state.login.user);
  const photoList = useSelector((state) => state.photo.photos);
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
      <PhotoContents>
        <ul className="photo_list">
          {photoList &&
            photoList.map((photo) => (
              <li className="photo_card" key={photo.id}>
                <div className="items">
                  <h3 className="photo_title">{photo.title}</h3>
                  <div className="item_contents">
                    <span className='item_category'>{photo.category}</span>
                    <span className='item_date'>날짜</span>
                    <span className='item_nickname'>{photo.nickname}</span>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </PhotoContents>
    </Section>
  );
};

export default Photo;
