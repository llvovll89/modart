import React, { useEffect, useState } from 'react';
import { Section, Container } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getQna } from '../../store/reducers/qnaSlice';
import { QnaCard } from '.';
import Loading from '../../components/common/Loading';

const QnaList = () => {
  const qnaList = useSelector((state) => state.qna.questions);
  const [ active, setActive ] = useState(false);
  const dispatch = useDispatch();

  const qnaClickHandler = () => {
    setActive(!active);
  }

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
          <QnaCard>
            <div className="qna_questions" onClick={qnaClickHandler}>
                <div className="qna_inner"></div>
            </div>
            {active ? (<div className="qna_answer"></div>) : null}
          </QnaCard>
        ) : (
          <Loading />
        )}
      </Container>
    </Section>
  );
};

export default QnaList;
