import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Section } from '../../styles/RecycleStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getTodays } from '../../store/reducers/todaySlice';
import { TodayDetailPage } from '.';
import CommentImg from '../../assets/images/main.gif';

const TodayDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.login.user);
  const todays = useSelector((state) => state.today.todays);
  const today = todays.find((todayId) => todayId.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const commentLoginCheck = () => {
    if(user) {
      return null;
    } else {
      const alertLogin = confirm('로그인 하시겠습니까~?');
      if(alertLogin) {
        navigate('account/login');
      } else {
        document.querySelector('.comment_input').disabled = true;
      }
    }
  }

  useEffect(() => {
    dispatch(getTodays());
  }, [dispatch]);

  return (
    <Section className="today_detail_section">
      <TodayDetailPage>
        {today && (
          <div className="contents">
            <header className="today_header">
              <h2 className="today_title">
                <span className="today_type">{`(${today.type})`}</span>
                {today.title.length > 30
                  ? today.title.subStr(0, 30) + '...'
                  : today.title}
              </h2>
              <p className="today_date">{today.createdAt}</p>
            </header>
            <div className="user_info">
              <p className="user_nickname">{today.nickname}</p>
              <div className="items">
                <span>댓글</span>
                <span>조회수</span>
                <span>추천</span>
              </div>
            </div>
            <div className="today_desc">
              <p className="desc">{today.desc}</p>
            </div>

            <div className="comment">
              <header className="comment_header">
                <p>댓글 2개</p>
              </header>

              <ul className="comment_list">
                <li className="comment_item">
                  <div className="top">
                    <img src={CommentImg} alt="" />
                    <span className="comment_name">어심</span>
                    <span className="comment_date">3분 전</span>
                  </div>
                  <div className="bt">
                    <p className="comment_desc">
                      오우~!! 맹구씨 반갑습니다ㅎㅎㅎ
                    </p>
                  </div>
                </li>

                <div className="comment_form">
                  <p>댓글 쓰기</p>
                  <form>
                    <input className='comment_input' type="text" placeholder='댓글...' onClick={commentLoginCheck} />
                    <button type="submit">등록</button>
                  </form>
                </div>
              </ul>
            </div>
          </div>
        )}
      </TodayDetailPage>
    </Section>
  );
};

export default TodayDetail;
