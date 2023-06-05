import React from 'react';
import { Section } from '../../../styles/RecycleStyles';
import { AccountContainer } from './index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NoUserImg from '../../../assets/images/user.png';
import Loading from '../../../components/common/Loading';

const Account = () => {
  const user = useSelector((state) => state.login.user);
  console.log(user);

  return (
    <Section>
      <AccountContainer>
        {user ? (
          <div className="contents">
            <div className="users">
              <div className="user_detail">
                <div className="user_thumb">
                  <img
                    src={user.profileImg ? user.profileImg : NoUserImg}
                    alt=""
                    style={{ maxWidth: '100px', maxHeight: '100px' }}
                  />
                </div>
                <div className="user_info">
                  <div className="info_box">
                    <strong className="name">{user.nickname}</strong>
                    {user.intro ? <p className="intro">{user.intro}</p> : null}
                    <p className="email">{user.email}</p>
                    <Link to="/account/edit">프로필 수정</Link>
                  </div>
                </div>
              </div>
              <div className="board_detail">
                <Link to="/" className="board_item">
                  <strong className="info">게시글</strong>
                  <p className="title">(기능)추가중..</p>
                </Link>
                <Link to="/" className="board_item">
                  <strong className="info">(기능)추가중..</strong>
                  <p className="title">포인트</p>
                </Link>
              </div>
            </div>
            <div className="customer_service">
              <div className="customer_info">
                <div className="customer_title">
                  <h1>고객센터</h1>
                  <span>(궁금한 것을 물어보세요)</span>
                </div>
              </div>
              <div className="customer_contents">
                <div className="items">
                  <h2>게시판관련 질문</h2>
                  
                  <div className="item_container">
                    <div className="item">
                      <p>DailyLook</p>
                    </div>
                    <div className="item">
                      <p>Photo</p>
                    </div>
                    <div className="item">
                      <p>TodayStory</p>
                    </div>
                    <div className="item">
                      <p>QnA</p>
                    </div>
                  </div>
                </div>
                <div className="account_questions">
                  <p>계정관련 질문</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </AccountContainer>
    </Section>
  );
};

export default Account;
