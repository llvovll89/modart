import React, { useCallback, useEffect, useState } from 'react';
import { Section, Container, Card } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { getPhotos } from '../../store/reducers/photoSlice';

const PhotoList = () => {
  const photoList = useSelector((state) => state.photo.photos);
  const [perPage, setPerPage] = useState(photoList.length);
  const [gap, setGap] = useState('16px');
  const [focus, setFocus] = useState('left');
  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setPerPage(5);
      setFocus('left');
    } else if (window.innerWidth >= 1024) {
      setPerPage(4);
      setGap('14px');
      setFocus('left');
    } else if (window.innerWidth >= 768) {
      setPerPage(3);
      setGap('12px');
      setFocus('center');
    } else {
      setPerPage(2);
      setGap('10px');
      setFocus('center');
    }
  }, []);

  useEffect(() => {
    dispatch(getPhotos());
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, handleResize]);

  return (
    <Section>
      <Container>
        <div className="title">
          <h1>Photos</h1>
          <span>최신 photo 리스트</span>
        </div>
        <div className="contents">
        {photoList.length > 0 ? (
          <Splide
            options={{
              type: 'loop',
              perPage,
              gap,
              focus,
              pagination: false,
              drag: 'free',
              arrows: false,
              autoScroll: {
                pauseOnHover: false,
                pauseOnFocus: false,
                rewind: false,
                speed: 1.5,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {photoList.map((photo) => (
              <SplideSlide key={photo.id}>
                <Card>
                  <div className="top">
                    <Link to={`photo/details/${photo.id}`}>
                      <img src={photo.photo} alt="photo" />
                    </Link>
                  </div>
                  <div className="bottom">
                    <p className='photo_category'>{`<${photo.category}>`}</p>
                    <p className='photo_nickname'>{photo.nickname}</p>
                    <p className='photo_title'>{photo.title}</p>
                    <p className='photo_desc'>
                      {photo.desc.length > 60
                        ? photo.desc.slice(0, 50) + '...'
                        : photo.desc}
                    </p>
                  </div>
                </Card>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="no-photos">No photos available && Loading..</div>
        )}
        </div>
      </Container>
    </Section>
  );
};

export default PhotoList;
