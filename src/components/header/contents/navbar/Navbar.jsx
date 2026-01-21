import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {User} from "../User";
import {NavContainer} from "./NavContainer";
import {NavRoutes} from "./NavRoutes";

export const Navbar = ({
    navRef,
    activeItem,
    setActiveItem,
    toggleClick,
    toggle,
    isHome,
}) => {
    const [isHomeVisible, setIsHomeVisible] = useState(
        typeof window !== "undefined" ? window.innerWidth <= 564 : false,
    );

    useEffect(() => {
        const onResize = () => setIsHomeVisible(window.innerWidth <= 564);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const handleLinkClick = (path) => {
        setActiveItem(path);

        if (window.innerWidth <= 646) {
            toggleClick();
        }

        window.scrollTo({top: 0});
    };

    return (
        <NavContainer
            ref={navRef}
            className={`${toggle ? " mobile" : ""}`}
            $isHome={isHome}
        >
            <div className="list">
                {NavRoutes.map((r, index) => {
                    const Icon = r.icon;
                    const isActive = activeItem === r.path;

                    // ✅ 홈은 564px 이하일 때만 표시
                    if (r.label === "홈" && !isHomeVisible) return null;

                    return (
                        <li
                            key={index}
                            onClick={() => handleLinkClick(r.path)}
                            className={`item ${isActive ? "active" : ""}`}
                        >
                            <Link
                                to={r.path}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <span className="navIcon" aria-hidden="true">
                                    {Icon ? <Icon focusable="false" /> : null}
                                </span>
                                <span className="navLabel">{r.label}</span>
                            </Link>
                        </li>
                    );
                })}

                <User
                    setActiveItem={setActiveItem}
                    toggleClick={toggleClick}
                    isHome={isHome}
                />
            </div>
        </NavContainer>
    );
};
