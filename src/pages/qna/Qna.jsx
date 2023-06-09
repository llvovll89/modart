import React, { useEffect } from 'react';
import { Section } from '../../styles/RecycleStyles';
import {
  AiFillQuestionCircle,
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineLike,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { QnaContainer, QnaContents } from '.';
import Loading from '../../components/common/Loading';
import { getQna, incrementViews } from '../../store/reducers/qnaSlice';

const Qna = () => {
  const user = useSelector((state) => state.login.user);
  const qnaList = useSelector((state) => state.qna.questions);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleWriteClick = () => {
    if (user) {
      return navigate('/qna/write');
    } else {
      window.alert('로그인한 유저만 작성이 가능합니다.');
      return null;
    }
  };

  const detailClick = (qna) => {
    navigate(`/qna/details/${qna.id}`);
  };

  const handleQuestionClick = (questionId) => {
    dispatch(incrementViews({ questionId }))
      .then(() => {
        dispatch(getQna());
      })
      .catch((error) => {
        console.error('Error incrementing views:', error);
      });
  };

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    handleScrollToTop();

    return () => {
      removeEventListener('scroll' , handleScrollToTop);
    }

  } , []);

  useEffect(() => {
    dispatch(getQna());
  }, [dispatch]);

  return (
    <Section className="qna_section">
      <QnaContainer>
        <div className="contents">
          <div className="text">
            <p>Ask me any questions</p>
            <span>질문과 답변을 해주세요!</span>
            <button className="link-btn" onClick={handleWriteClick}>
              질문하기
            </button>
          </div>

          <div className="image">
            <AiFillQuestionCircle />
          </div>
        </div>
      </QnaContainer>
      <QnaContents>
        <ul className="qna_list">
          {qnaList && qnaList.length > 0 ? (
            qnaList.map((qna) => (
              <li className="qna_card" key={qna.id}>
                <p className="number">{qna.number}</p>
                <p
                  className="title"
                  onClick={() => {
                    detailClick(qna);
                    handleQuestionClick(qna.id);
                  }}
                >
                  {qna.title.length >= 40
                    ? qna.title.substring(40) + '...'
                    : qna.title}{' '}
                  <span>
                    {qna.comments && qna.comments.length > 0
                      ? `(${qna.comments.length})`
                      : null}
                  </span>
                </p>

                <div className="sub_contents">
                  <p className="like">
                    <AiOutlineLike /> {qna.recommend > 0 ? qna.recommend : 0}
                  </p>
                  <p
                    className="views"
                    onClick={() => {
                      detailClick(qna);
                      handleQuestionClick(qna.id);
                    }}
                  >
                    <AiOutlineEye /> {qna.views > 0 ? qna.views : 0}
                  </p>
                </div>
              </li>
            ))
          ) : (
            <Loading />
          )}
        </ul>
      </QnaContents>
    </Section>
  );
};

export default Qna;
