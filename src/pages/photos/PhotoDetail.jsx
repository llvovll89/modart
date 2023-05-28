import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPhotos } from '../../store/reducers/photoSlice';
import { PhotoDetailPage } from '.';
import PhotoImg from '../../assets/images/main.gif';
import { Section } from '../../styles/RecycleStyles';
import { AiFillHeart } from 'react-icons/ai';
import { ImBubble } from 'react-icons/im';

const PhotoDetail = () => {
  const { id } = useParams();
  const photoList = useSelector((state) => state.photo.photos);
  const [overDesc, setOverDesc] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const photo = photoList.find((photo) => photo.id === id);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <Section>
      <PhotoDetailPage>
        {photo && (
          <div className="contents">
            <div className="photo_users">
              <div className="user_img">
                <img src={PhotoImg} alt={photo.nickname} />
              </div>
              <div className="user">
                <p>{photo.nickname}</p>
                <span>{photo.category}</span>
              </div>
            </div>
            <div className="snapImg">
              <img src={photo.photo} alt={photo.nickname} />
            </div>
            <div className="photo_info">
              <div className="icon">
                <div className="link">
                  <button className="like">
                    <AiFillHeart />
                  </button>
                  <button className="comment">
                    <ImBubble />
                  </button>
                </div>
                <span className="date">{photo.createdAt} ...</span>
              </div>
              <div className="photo_title">
                <h1 className="title">{photo.title}</h1>
                <p className="desc">
                  {photo.desc.length > 60 && !overDesc
                    ? photo.desc.slice(0, 60)
                    : photo.desc}
                  {photo.desc.length > 60 && (
                    <span
                      className="over"
                      onClick={() => setOverDesc(!overDesc)}
                    >
                      {overDesc ? '... 접기' : '... 더보기'}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </PhotoDetailPage>
    </Section>
  );
};

export default PhotoDetail;
