import {Link, useLocation} from "react-router-dom";
import {User} from "../User";
import {NavContainer} from "./NavContainer";
import {NavRoutes} from "./NavRoutes";
import {useEffect} from "react";

export const Navbar = ({
    activeItem,
    setActiveItem,
    toggleClick,
    toggle,
    isHome,
}) => {
    const handleLinkClick = (path) => {
        setActiveItem(path);

        if (window.innerWidth <= 646) {
            toggleClick();
        }

        window.scrollTo({top: 0});
    };

    return (
        <NavContainer className={`${toggle ? " mobile" : ""}`} $isHome={isHome}>
            <div className="list">
                {NavRoutes.map((r, index) => (
                    <li
                        key={index}
                        onClick={() => handleLinkClick(r.path)}
                        className={`item ${
                            activeItem === r.path ? "active" : ""
                        }`}
                    >
                        <Link to={r.path}>{r.label}</Link>
                    </li>
                ))}
            </div>

            <User setActiveItem={setActiveItem} toggleClick={toggleClick} />
        </NavContainer>
    );
};
