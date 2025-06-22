import React, {useCallback, useEffect, useRef, useState} from "react";
import {HeaderContainer} from "./index";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signOuterUer} from "../../store/reducers/loginSlice";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineLogout} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import {MAIN, routes, routesName} from "../../routes/route";

const Header = ({toggle, toggleMenu}) => {
    const [scroll, setScroll] = useState(false);
    const [activeItem, setActiveItem] = useState(null);

    const user = useSelector((state) => state.login.user);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const nickName = user?.nickname;
    const profileImg = user?.profileImg;
    const toggleRef = useRef(null);

    const logOutHandler = () => {
        const alertLogout = confirm("정말 로그아웃 하시겠습니까?");

        if (alertLogout) {
            dispatch(signOuterUer());
            navigate("/");
        }
        return;
    };

    const handleLogoClick = () => {
        navigate("/");
        window.scrollTo({top: 0});
    };

    const handleLinkClick = (index) => {
        setActiveItem(index);
        if (window.innerWidth <= 768) {
            toggleClick();
        }

        window.scrollTo({top: 0});
    };

    const toggleClick = (event) => {
        event?.stopPropagation();
        setActiveItem(null);
        toggleMenu();
    };

    const renderLinks = () => {
        if (user) {
            return (
                <div className="users">
                    <li className="item user_nickname">
                        {profileImg ? (
                            <img src={profileImg} alt={nickName} />
                        ) : null}
                        <Link
                            to="/account"
                            onClick={() => handleLinkClick(null)}
                        >
                            {nickName}
                        </Link>
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
                <div className="users sign">
                    <li className="item_account">
                        <Link
                            to="account/login"
                            className="account"
                            onClick={() => handleLinkClick(null)}
                        >
                            로그인
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

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (toggle && !toggleRef.current.contains(event.target)) {
                toggleClick();
            }
        };

        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [toggle, toggleClick]);

    const filterLocation =
        location.pathname === "/account/signup" ||
        location.pathname === "/account/login";

    if (filterLocation) {
        return null;
    }

    return (
        <HeaderContainer
            style={{borderBottom: scroll ? "1px solid #f7f2f2" : ""}}
        >
            <div className="contents">
                <div className="logo">
                    <h1 onClick={handleLogoClick}>ModArt</h1>
                </div>
                <ul className={`navbar${toggle ? " mobile" : ""}`}>
                    <div className="list">
                        {routes.map((r, idx) => (
                            <li
                                key={r}
                                className={`item ${
                                    idx === activeItem ? "active" : ""
                                }`}
                            >
                                <Link
                                    onClick={() => handleLinkClick(idx)}
                                    to={MAIN + r}
                                >
                                    {routesName[idx]}
                                </Link>
                            </li>
                        ))}
                    </div>
                    {renderLinks()}
                </ul>

                <div
                    className="toggle"
                    onClick={(event) => toggleClick(event)}
                    ref={toggleRef}
                >
                    {toggle ? (
                        <GrClose className="close_icon" />
                    ) : (
                        <GiHamburgerMenu className="hamburger_icon" />
                    )}
                </div>
            </div>
        </HeaderContainer>
    );
};

export default React.memo(Header);
