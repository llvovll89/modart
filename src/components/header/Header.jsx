import React, { useEffect, useState } from 'react';
import { HeaderContainer } from './index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOuterUer } from '../../store/reducers/loginSlice';
import { GiClothes } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const user = useSelector((state) => state.login.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const nickName = user?.nickname;

  const logOutHandler = () => {
    const alertLogout = confirm('정말 로그아웃 하시겠습니까?');
    if (alertLogout) {
      dispatch(signOuterUer());
    }
    return;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const renderLinks = () => {
    if (user) {
      return (
        <div className="users">
          <li
            className="item user_nickname"
            onClick={() => setActiveItem(null)}
          >
            <Link to="/account">{nickName}</Link>
          </li>
          <li className="item logOut" onClick={logOutHandler}>
            <span>
              <AiOutlineLogout />
            </span>
          </li>
        </div>
      );
    } else {
      return (
        <li className="item_account">
          <Link to="account/login" className="account">
            로그인/회원가입
          </Link>
        </li>
      );
    }
  };

  useEffect(() => {
    setActiveItem(null);
  }, []);

  const filterLocation =
    location.pathname === '/account/signup' ||
    location.pathname === '/account/login';
  if (filterLocation) {
    return null;
  }

  return (
    <HeaderContainer
      style={{ borderBottom: scroll ? '1px solid #e3e3e3' : '' }}
    >
      <div className="contents">
        <div className="logo">
          <span className="icon">
            <GiClothes />
          </span>
          <h1
            onClick={() => {
              navigate('/');
              setActiveItem(null);
            }}
          >
            ModArt
          </h1>
        </div>
        <ul className="navbar">
          <div className="list">
            <li className={`item ${activeItem === 0 ? 'active' : ''}`}>
              <Link to="/board" onClick={() => handleItemClick(0)}>
                OOTD
              </Link>
            </li>

            <li className={`item ${activeItem === 1 ? 'active' : ''}`}>
              <Link to="/photo" onClick={() => handleItemClick(1)}>
                Picture
              </Link>
            </li>
            <li className={`item ${activeItem === 2 ? 'active' : ''}`}>
              <Link to="/daily" onClick={() => handleItemClick(2)}>
                DailyStory
              </Link>
            </li>
            <li className={`item ${activeItem === 3 ? 'active' : ''}`}>
              <Link to="/qna" onClick={() => handleItemClick(3)}>
                QnA
              </Link>
            </li>
          </div>
          {renderLinks()}
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default React.memo(Header);
