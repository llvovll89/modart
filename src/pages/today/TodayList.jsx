import React, { useEffect, useState, useCallback } from 'react';
import { Section, Container, Card } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getTodays } from '../../store/reducers/todaySlice';
import { Link } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineArrowUp } from 'react-icons/ai';
import Loading from '../../components/common/Loading';

const TodayList = () => {
  const todayList = useSelector((state) => state.today.todays);
  const [visibleCount, setVisibleCount] = useState(4);
  const [filterTodayList, setFilterTodayList] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  const NO_IMAGE_URL = 'https://via.placeholder.com/500x750.png?text=No+Image';

  const handleLoadMore = () => {
    if (visibleCount + 4 >= filterTodayList.length) {
      setCollapsed(true);
    }
    setVisibleCount((prevCount) => prevCount + 4);
  };
  
  const handleCollapse = () => {
    setVisibleCount(4);
    setCollapsed(false);
  };

  useEffect(() => {
    dispatch(getTodays());
  }, [dispatch]);

  useEffect(() => {
    const sortList = [...todayList].sort((a,b) => b.createdAt - a.createdAt);
    setFilterTodayList(sortList);
  }, [todayList]);

  return (
    <Section>
      <Container className='today_container'>
        <div className="title">
          <h1>Today Story</h1>
          <span>최신 일상이야기 리스트</span>
        </div>

        <div className="contents">
        {filterTodayList.length > 0 ? (
          <>
            {filterTodayList.slice(0, visibleCount).map((today) => (
                <Card>
                  <div className="top">
                    <Link to={`today/details/${today.id}`}>
                      {today.photo ? (
                        <img src={today.photo} alt="today" />
                      ) : (
                        <img src={NO_IMAGE_URL} alt={today.title} />
                      )}
                    </Link>
                  </div>
                  <div className="bottom">
                    <p className="today_category">{`<${today.type}>`}</p>
                    <p className="today_nickname">{today.nickname}</p>
                    <p className="today_title">{today.title}</p>
                    <p className="today_desc">
                      {today.desc.length > 60
                        ? today.desc.slice(0, 50) + '...'
                        : today.desc}
                    </p>
                  </div>
                </Card>
            ))}
            </>
        ) : (
          <Loading />
        )}
        </div>

        {filterTodayList.length > 4 && (
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

export default TodayList;
