import React from 'react';
import { Section } from '../../../styles/RecycleStyles';
import { AccountContainer } from './index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../../components/common/Loading';

const Account = () => {
  const user = useSelector((state) => state.login.user);

  return (
    <Section>
      <AccountContainer>
        {user ? (
          <div className="contents">
            <div className="users">
              <div className="user_detail">
                <div className="user_thumb">
                  <img src="" alt="" />
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
                  <p className="title">2 (개)</p>
                </Link>
                <Link to="/" className="board_item">
                  <strong className="info">2100P</strong>
                  <p className="title">포인트</p>
                </Link>
              </div>
            </div>
            <div className="items"></div>
            <div className="items"></div>
          </div>
        ) : (
          <Loading />
        )}
      </AccountContainer>
    </Section>
  );
};

export default Account;
