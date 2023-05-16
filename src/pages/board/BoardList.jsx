import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import { getBoards } from '../../store/reducers/boardSlice';
import { Card, Container, Section } from '../../styles/RecycleStyles';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const BoardList = () => {
  const boardList = useSelector((state) => state.board.boards);
  const [perPage, setPerPage] = useState(boardList.length);
  const [gap, setGap] = useState('12px');
  const [focus, setFocus] = useState('left');

  const dispatch = useDispatch();

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1280) {
      setPerPage(boardList.length);
      setGap('12px');
      setFocus('left');
    } else if (window.innerWidth >= 1024) {
      setPerPage(boardList.length);
      setGap('14px');
      setFocus('left');
    } else if (window.innerWidth >= 768) {
      setPerPage(3);
      setGap('16px');
      setFocus('center');
    } else if (window.innerWidth >= 564) {
      setPerPage(2);
      setGap('20px');
      setFocus('center');
    } else {
      setPerPage(1);
      setGap('12px');
      setFocus('center');
    }
  }, [boardList.length]);

  useEffect(() => {
    dispatch(getBoards());
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch, handleResize]);

  const visibleBoards = boardList.slice(0, perPage);

  return (
    <Section>
      <Container>
        <div className="title">
          <h1>OOTD</h1>
        </div>
        <div className="contents">
          {visibleBoards.length > 0 ? (
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
              {visibleBoards.map((board) => (
                <SplideSlide key={board.id}>
                  <Card>
                    <div className="top">
                      <Link to={`board/details/${board.id}`}>
                        <img src={board.photo} alt="board" />
                      </Link>
                    </div>
                    <div className="bottom">
                      <p>{board.title}</p>
                      <p>{board.nickname}</p>
                      <p>
                        {board.desc.length > 60
                          ? board.desc.slice(0, 50) + '...'
                          : board.desc}
                      </p>
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
