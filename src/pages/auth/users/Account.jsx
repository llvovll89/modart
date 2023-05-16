import React from 'react';
import { Section } from '../../../styles/RecycleStyles';
import { AccountContainer } from './index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Account = () => {
  const { nickname, email } = useSelector((state) => state.login.user);
  const postCount = useSelector((state) => state.board.postCount);
  console.log(postCount);

  return (
    <Section>
      <AccountContainer>
        <div className="contents">
          <div className="users">
            <div className="user_detail">
              <div className="user_thumb">
                <img src="" alt="" />
              </div>
              <div className="user_info">
                <div className="info_box">
                  <strong className="name">{nickname}</strong>
                  <p className="email">{email}</p>
                  <Link to="/">프로필 수정</Link>
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
      </AccountContainer>
    </Section>
  );
};

export default Account;
