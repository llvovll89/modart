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

  // const handleItemClick = (index) => {
  //   setActiveItem(index);
  // };

  const toggleClick = () => {
    setActiveItem(null);
    toggleMenu();
  };

  const renderLinks = () => {
    if (user) {
      return (
        <div className="users">
          <li className="item user_nickname">
            <Link to="/account">{nickName}</Link>
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
              onClick={() => {
                if (widow.innerWith <= 768) {
                  toggleClick;
                }
              }}
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
              <Link onClick={handleLinkClick}>HOME</Link>
            </li>
            <li className={`item ${activeItem === 1 ? 'active' : ''}`}>
              <Link to="/board" onClick={handleLinkClick}>
                OOTD
              </Link>
            </li>

            <li className={`item ${activeItem === 2 ? 'active' : ''}`}>
              <Link to="/photo" onClick={handleLinkClick}>
                Photo
              </Link>
            </li>
            <li className={`item ${activeItem === 3 ? 'active' : ''}`}>
              <Link to="/today" onClick={handleLinkClick}>
                TodayStory
              </Link>
            </li>
            <li className={`item ${activeItem === 4 ? 'active' : ''}`}>
              <Link to="/qna" onClick={handleLinkClick}>
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
