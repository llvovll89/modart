import React, { useEffect, useState } from 'react';
import { Section, Container } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getQna } from '../../store/reducers/qnaSlice';
import { QnaCard } from '.';
import Loading from '../../components/common/Loading';
import { Link } from 'react-router-dom';

const QnaList = () => {
  const qnaList = useSelector((state) => state.qna.questions);
  const [activeItems, setActiveItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const dispatch = useDispatch();

  const toggleActive = (itemId) => {
    setActiveItems((prevActiveItems) => {
      const index = prevActiveItems.indexOf(itemId);
      if (index !== -1) {
        const newItems = [...prevActiveItems];
        newItems.splice(index, 1);
        return newItems;
      } else {
        const newItems = [itemId];
        return newItems;
      }
    });
  };

  useEffect(() => {
    dispatch(getQna());
  }, [dispatch]);

  return (
    <Section className='qna_section'>
      <Container>
        <div className="title">
          <h1>QnA</h1>
          <span>최신 QnA 리스트</span>
        </div>

        {qnaList.length > 0 ? (
          <QnaCard>
            <div className="qna_contents">
              <ul className="list_item">
                {qnaList.slice(0, visibleCount).map((qna) => (
                  <li
                    key={qna.id}
                    className={`qna_items ${
                      activeItems.findIndex((id) => id === qna.id) !== -1
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => toggleActive(qna.id)}
                  >
                    <div className="inner">
                    <h3
                    className="qna_title"
                    >
                    <span className='qna_q_icon'>Q.</span>
                        {qna.title}
                      </h3>
                    </div>
                    {activeItems.findIndex((id) => id === qna.id) !== -1 ? (
                      <div className="qna_answer">
                        <p className="qna_desc">{qna.desc}</p>
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
              {visibleCount < qnaList.length ? (
                <div className="view_more">
                  <Link to="/qna">
                    Qna
                  </Link>
                </div>
              ) : null}
            </div>
          </QnaCard>
        ) : (
          <Loading />
        )}
      </Container>
    </Section>
  );
};

export default QnaList;
