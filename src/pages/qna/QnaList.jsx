import React, { useEffect } from 'react';
import { Section, Container } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getQna } from '../../store/reducers/qnaSlice';
import Loading from '../../components/common/Loading';

const QnaList = () => {
  const qnaList = useSelector((state) => state.qna.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQna());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div className="title">
          <h1>QnA</h1>
          <span>최신 QnA 리스트</span>
        </div>

        {qnaList.length > 0 ? (
          <div className="qna_card"></div>
        ) : (
          <Loading />
        )}
      </Container>
    </Section>
  );
};

export default QnaList;
