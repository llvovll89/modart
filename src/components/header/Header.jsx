import React, { useCallback, useEffect, useRef, useState } from "react";
import { HeaderContainer } from "./HeaderContainer.css";
import { useLocation, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useScroll } from "./hooks/useScroll";
import { Navbar } from "./contents/navbar/Navbar";
import { useNotRender } from "../../hooks/useNotRender";
import { MAIN } from "../../routes/route/path";

const Header = ({ toggle, toggleMenu }) => {
    const [activeItem, setActiveItem] = useState(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const scroll = useScroll();

    const navigate = useNavigate();
    const location = useLocation();

    const toggleRef = useRef(null);
    const navRef = useRef(null);

    const handleLogoClick = useCallback(() => {
        navigate("/");
        window.scrollTo({ top: 0 });
    }, [navigate]);

    const toggleClick = useCallback(
        (event) => {
            event?.stopPropagation?.();
            setActiveItem(null);
            toggleMenu();
        },
        [toggleMenu]
    );

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!toggle) return;

            const target = event.target;

            const clickedToggle = toggleRef.current?.contains?.(target);
            const clickedNav = navRef.current?.contains?.(target);

            if (!clickedToggle && !clickedNav) {
                toggleClick();
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, [toggle, toggleClick]);

    useEffect(() => {
        setActiveItem(location.pathname);
    }, [location.pathname]);

    useEffect(() => {
        let rafId = 0;

        const computeProgress = () => {
            const doc = document.documentElement;

            const scrollTop = window.scrollY || doc.scrollTop || 0;
            const scrollable = (doc.scrollHeight || 0) - window.innerHeight;

            const p = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
            setScrollProgress(Math.max(0, Math.min(100, p)));
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(computeProgress);
        };

        computeProgress();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    if (useNotRender()) return null;

    const isHome = location.pathname === MAIN;

    return (
        <HeaderContainer $isHome={isHome} $scrolled={scroll}>
            <div className="contents">
                <div className="logo">
                    <h1 onClick={handleLogoClick}>MODART</h1>
                </div>

                <Navbar
                    navRef={navRef}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    toggleClick={toggleClick}
                    toggle={toggle}
                    isHome={isHome}
                />

                <div className="toggle" onClick={toggleClick} ref={toggleRef}>
                    {toggle ? (
                        <GrClose className="close_icon" />
                    ) : (
                        <GiHamburgerMenu className="hamburger_icon" />
                    )}
                </div>
            </div>

            <div className="progress_wrap" aria-hidden="true">
                <div
                    className="progress_bar"
                    style={{ transform: `scaleX(${scrollProgress / 100})` }}
                />
            </div>
        </HeaderContainer>
    );
};

export default React.memo(Header);