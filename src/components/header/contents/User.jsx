import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Account from "../../../pages/auth/users/Account";
import {useEffect, useRef, useState} from "react";

export const User = ({setActiveItem, toggleClick, isHome}) => {
    const [isVisibleAccount, setIsVisibleAccount] = useState(false);
    const user = useSelector((state) => state.login.user);
    const nickName = user?.nickname;
    const profileImg = user?.profileImg;
    const accountRef = useRef();
    const userRef = useRef();

    const handleLinkClick = (index) => {
        setActiveItem(index);
        if (window.innerWidth <= 768) {
            toggleClick();
        }

        window.scrollTo({top: 0});
    };

    const handleUserToggle = (e) => {
        e?.stopPropagation?.();
        setActiveItem(null);
        setIsVisibleAccount((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                accountRef.current &&
                !accountRef.current.contains(event.target) &&
                userRef.current &&
                !userRef.current.contains(event.target)
            ) {
                setIsVisibleAccount(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (user) {
        return (
            <button
                onClick={handleUserToggle}
                className="user_link"
                ref={userRef}
            >
                <div className="profileIImg">
                    {profileImg ? (
                        <img src={profileImg} alt={nickName} />
                    ) : null}
                </div>

                <span className="nickname">{nickName}</span>

                {isVisibleAccount && <Account accountRef={accountRef} />}
            </button>
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
