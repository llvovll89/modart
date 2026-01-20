import React, {useEffect, useRef, useState} from "react";
import {HeaderContainer} from "./HeaderContainer.css";
import {useLocation, useNavigate} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {GrClose} from "react-icons/gr";
import {useScroll} from "./hooks/useScroll";
import {Navbar} from "./contents/navbar/Navbar";
import {useNotRender} from "../../hooks/useNotRender";
import {MAIN} from "../../routes/route/path";

const Header = ({toggle, toggleMenu}) => {
    const [activeItem, setActiveItem] = useState(null);
    const scroll = useScroll();

    const navigate = useNavigate();
    const location = useLocation();
    const toggleRef = useRef(null);

    const handleLogoClick = () => {
        navigate("/");
        window.scrollTo({top: 0});
    };

    const toggleClick = (event) => {
        event?.stopPropagation();
        setActiveItem(null);
        toggleMenu();
    };

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

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location]);

    if (useNotRender()) return null;

    const isHome = location.pathname === MAIN;

    return (
        <HeaderContainer
            $isHome={isHome}
            style={{
                borderBottom: scroll ? "1px solid #f7f2f2" : "",
                opacity: scroll ? 0.8 : 1,
            }}
        >
            <div className="contents">
                <div className="logo">
                    <h1 onClick={handleLogoClick}>MODART</h1>
                </div>

                <Navbar
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    toggleClick={toggleClick}
                    toggle={toggle}
                    isHome={isHome}
                />

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
