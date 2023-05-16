import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPhotos } from '../../store/reducers/PhotoSlice';
import { DetailForm, Section } from '../../styles/RecycleStyles';
import { AiFillHeart } from 'react-icons/ai';

const PhotoDetail = () => {
  const { id } = useParams();
  const photoList = useSelector((state) => state.photo.photos);
  const dispatch = useDispatch();

  const photo = photoList.find((photo) => photo.id === id);
  console.log(photo);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <Section>
      <DetailForm>
        {photo && (
          <>
            <div className="snapImg">
              <img src={photo.photo} alt={photo.nickname} />
            </div>
            <div className="snapInfo">
              <div className="title">
                <p>
                  Information <span>사진 정보</span>
                </p>
              </div>
              <li className="tr">
                <span className="th">Nickname</span>
                <span className="td">{photo.nickname}</span>
              </li>
              <li className="tr">
                <span className="th">Category</span>
                <span className="td">{photo.category}</span>
              </li>
              <li className="tr">
                <span className="th">Title</span>
                <span className="td">{photo.title}</span>
              </li>
              <li className="tr">
                <span className="th">Contents</span>
                <span className="td">{photo.desc}</span>
              </li>
              <li className="tr">
                <span className="th">Like</span>
                <span className="td">
                  <AiFillHeart />
                </span>
              </li>
            </div>
          </>
        )}
      </DetailForm>
    </Section>
  );
};

export default PhotoDetail;
