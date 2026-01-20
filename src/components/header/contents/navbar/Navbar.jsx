import { Link } from "react-router-dom";
import { User } from "../User";
import { NavContainer } from "./NavContainer";
import { NavRoutes } from "./NavRoutes";

export const Navbar = ({
    navRef,
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

        window.scrollTo({ top: 0 });
    };

    return (
        <NavContainer
            ref={navRef}
            className={`${toggle ? " mobile" : ""}`}
            $isHome={isHome}
        >
            <div className="list">
                {NavRoutes.map((r, index) => (
                    <li
                        key={index}
                        onClick={() => handleLinkClick(r.path)}
                        className={`item ${activeItem === r.path ? "active" : ""}`}
                    >
                        <Link to={r.path} aria-current={activeItem === r.path ? "page" : undefined}>
                            {r.label}
                        </Link>
                    </li>
                ))}

                <User
                    setActiveItem={setActiveItem}
                    toggleClick={toggleClick}
                    isHome={isHome}
                />
            </div>
        </NavContainer>
    );
};