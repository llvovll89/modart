import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { getBoards } from '../../store/reducers/boardSlice';
import { Card, Container, Section } from '../../styles/RecycleStyles';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { AiFillHeart } from 'react-icons/ai';

const BoardList = () => {
  const boardList = useSelector((state) => state.board.boards);
  const [perPage, setPerPage] = useState(boardList.length);
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
    dispatch(getBoards());
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, handleResize]);

  return (
    <Section>
      <Container>
        <div className="title">
          <h1>OOTD</h1>
          <span>최신 OOTD 리스트</span>
        </div>
        <div className="contents">
          {boardList.length > 0 ? (
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
                  speed: 2,
                },
              }}
              extensions={{ AutoScroll }}
            >
              {boardList.slice(0, 10).map((board) => (
                <SplideSlide key={board.id}>
                  <Card>
                    <div className="top">
                      <Link to={`board/details/${board.id}`}>
                        <img src={board.photo} alt="board" />
                      </Link>
                    </div>
                    <div className="bottom">
                      <p className="board_nickname">{board.nickname}</p>
                      <p className="board_title">{board.title}</p>
                      <p className="board_desc">
                        {board.desc.length > 60
                          ? board.desc.slice(0, 50) + '...'
                          : board.desc}
                      </p>
                      {/* <span className="like">
                        <AiFillHeart />
                      </span>
                        */}
                    </div>
                  </Card>
                </SplideSlide>
              ))}
            </Splide>
          ) : (
            <div className="no-boards">No Boards available && Loading..</div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default BoardList;
