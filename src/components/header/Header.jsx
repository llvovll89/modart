import React, { useEffect, useState } from 'react';
import { HeaderContainer } from './index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOuterUer } from '../../store/reducers/loginSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineLogout } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

const Header = ({ toggle, toggleMenu }) => {
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
      navigate('/');
    }
    return;
  };

  const handleLinkClick = (index) => {
    setActiveItem(index);
    if (window.innerWidth <= 768) {
      toggleClick();
    }
  };

  const toggleClick = () => {
    setActiveItem(null);
    toggleMenu();
  };

  const renderLinks = () => {
    if (user) {
      return (
        <div className="users">
          <li className="item user_nickname">
            <Link to="/account" onClick={() => handleLinkClick(null)}>
              {nickName}
            </Link>
          </li>
          <li className="item logOut">
            <span onClick={logOutHandler}>
              <AiOutlineLogout />
            </span>
          </li>
        </div>
      );
    } else {
      return (
        <div className="users sign">
          <li className="item_account">
            <Link
              to="account/login"
              className="account"
              onClick={() => handleLinkClick(null)}
            >
              로그인/회원가입
            </Link>
          </li>
        </div>
      );
    }
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

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
          <h1
            onClick={() => {
              navigate('/');
              setActiveItem(null);
            }}
          >
            ModArt
          </h1>
        </div>
        <ul className={`navbar${toggle ? ' mobile' : ''}`}>
          <div className="list">
            <li className={`item ${activeItem === 0 ? 'active' : ''}`}>
              <Link to="/" onClick={handleLinkClick}>
                HOME
              </Link>
            </li>
            <li className={`item ${activeItem === 1 ? 'active' : ''}`}>
              <Link to="/board" onClick={() => handleLinkClick(1)}>
                OOTD
              </Link>
            </li>

            <li className={`item ${activeItem === 2 ? 'active' : ''}`}>
              <Link to="/photo" onClick={() => handleLinkClick(2)}>
                Photo
              </Link>
            </li>
            <li className={`item ${activeItem === 3 ? 'active' : ''}`}>
              <Link to="/today" onClick={() => handleLinkClick(3)}>
                TodayStory
              </Link>
            </li>
            <li className={`item ${activeItem === 4 ? 'active' : ''}`}>
              <Link to="/qna" onClick={() => handleLinkClick(4)}>
                QnA
              </Link>
            </li>
          </div>
          {renderLinks()}
        </ul>

        <div className="toggle" onClick={toggleClick}>
          {toggle ? <GrClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default React.memo(Header);
