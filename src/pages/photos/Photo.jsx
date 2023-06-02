import React, { useEffect, useState } from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { Section } from '../../styles/RecycleStyles';
import { PhotoContainer, PhotoContents } from './index';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from '../../store/reducers/photoSlice';
import Loading from '../../components/common/Loading';

const Photo = () => {
  const user = useSelector((state) => state.login.user);
  const photoList = useSelector((state) => state.photo.photos) || null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const [newPhotoList, setNewPhotoList] = useState([]);

  const handleWriteClick = () => {
    if (user) {
      return navigate('/photo/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  const detailClick = (photo) => {
    navigate(`/photo/details/${photo.id}`);
  };

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  useEffect(() => {
    const sortList = [...photoList].sort((a, b) => b.createdAt - a.createdAt);
    setNewPhotoList(sortList);
  }, [photoList]);

  return (
    <Section className="photo_section">
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
        <div className="filter"></div>

        <ul className="photo_list">
          {newPhotoList.length > 0 ? (
            newPhotoList.slice(0, 10).map((photo) => (
              <li className="photo_card" key={photo.id}>
                <div className="photo_img" onClick={() => detailClick(photo)}>
                  {photo.photo ? (
                    <img src={photo.photo} alt={photo.title} />
                  ) : (
                    <img src={NO_IMAGE_URL} alt="server_error" />
                  )}
                </div>
                <div className="items">
                  <h3
                    className="photo_title"
                    onClick={() => detailClick(photo)}
                  >
                    {photo.title.length > 30
                      ? photo.title.substring(0, 30) +
                        '...' +
                        (photo.comments && photo.comments.length > 0
                          ? ` (${photo.comments.length})`
                          : '')
                      : photo.title +
                        (photo.comments && photo.comments.length > 0
                          ? ` (${photo.comments.length})`
                          : '')}
                  </h3>

                  <div className="item_contents">
                    <span className="item_category">{photo.category}</span>
                    <div className="sub_items">
                      <span className="item_nickname">{photo.nickname}</span>
                      <span className="item_date">{photo.createdAt}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </PhotoContents>
    </Section>
  );
};

export default Photo;
