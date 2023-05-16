import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DetailForm, Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getBoards } from '../../store/reducers/boardSlice';
import { AiFillHeart } from 'react-icons/ai';

const BoardDetail = () => {
  const { id } = useParams();
  const boardList = useSelector((state) => state.board.boards);
  const dispatch = useDispatch();

  const board = boardList.find((board) => board.id === id);

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  useEffect(() => {
    const board = boardList.find((board) => board.id === id);
    console.log(board);
  }, [boardList, id]);

  return (
    <Section>
      <DetailForm>
        {board && (
          <>
            <div className="snapImg">
              <img src={board.photo} alt={board.nickname} />
            </div>
            <div className="snapInfo">
              <div className="title">
                <p>
                  Information <span>스타일 정보</span>
                </p>
              </div>
              <li className="tr">
                <span className="th">Nickname</span>
                <span className="td">{board.nickname}</span>
              </li>
              <li className="tr">
                <span className="th">Brand</span>
                <span className="td">{board.brand}</span>
              </li>
              <li className="tr">
                <span className="th">Title</span>
                <span className="td">{board.title}</span>
              </li>
              <li className="tr">
                <span className="th">Body</span>
                <span className="td" style={{ marginRight: '6px' }}>
                  키 {board.height}
                </span>
                <span className="td">몸무게 {board.weight}</span>
              </li>
              <li className="tr">
                <span className="th">Contents</span>
                <span className="td">{board.desc}</span>
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

export default BoardDetail;
