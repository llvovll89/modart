import React, { useCallback, useEffect, useState } from 'react';
import { Section, Container, Card } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhotos } from '../../store/reducers/photoSlice';
import { AiOutlinePlus, AiOutlineArrowUp } from 'react-icons/ai';
import Loading from '../../components/common/Loading';

const PhotoList = () => {
  const allPhotoList = useSelector((state) => state.photo.photos);
  const [filterPhotoList, setFilterPhotoList] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    if (visibleCount + getIncrement() >= filterPhotoList.length) {
      setCollapsed(true);
    }
    setVisibleCount((prevCount) => prevCount + getIncrement());
  };
  
  const handleCollapse = () => {
    if (window.innerWidth <= 768) {
      setVisibleCount(2);
    } else if (window.innerWidth <= 564) {
      setVisibleCount(1);
    } else {
      setVisibleCount(4);
    }
    
    setCollapsed(false);
  };

  const getIncrement = useCallback(() => {
    const browserWidth = window.innerWidth;
    if(browserWidth <= 564) {
      return 1;
    } else if (browserWidth <= 768) {
      return 2;
    } else {
      return 4;
    }
  }, []);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  useEffect(() => {
    const sortList = [...allPhotoList].sort(
      (a, b) => b.createdAt - a.createdAt
    );
    setFilterPhotoList(sortList);
  }, [allPhotoList]);

  useEffect(() => {
    setVisibleCount(getIncrement());
  }, [getIncrement]);
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getIncrement());
    };
  
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getIncrement]);
  

  return (
    <Section>
      <Container className="photo_container">
        <div className="title">
          <h1>Photos</h1>
          <span>최신 photo 리스트</span>
        </div>
        <div className="contents">
          {filterPhotoList.length > 0 ? (
            <>
              {filterPhotoList.slice(0, visibleCount).map((photo) => (
                <Card key={photo.id}>
                  <div className="top">
                    <Link to={`photo/details/${photo.id}`}>
                      <img src={photo.photo} alt="photo" />
                    </Link>
                  </div>
                  <div className="bottom">
                    <p className="photo_category">{`${photo.category}`}</p>
                    <p className="photo_nickname">{photo.nickname}</p>
                    <p className="photo_title">{photo.title}</p>
                    <p className="photo_desc">
                      {photo.desc.length > 60
                        ? photo.desc.slice(0, 50) + '...'
                        : photo.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </>
          ) : (
            <Loading />
          )}
        </div>

        {filterPhotoList.length > 4 && (
          <div className="visible">
            {collapsed ? (
              <button onClick={handleCollapse}>
                <span className='closed'>
                  <AiOutlineArrowUp />
                </span>
              </button>
            ) : (
              <button onClick={handleLoadMore}>
                <span>
                  <AiOutlinePlus />
                </span>
              </button>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
};

export default PhotoList;
