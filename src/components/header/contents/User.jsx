import {AiOutlineLogout} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

export const User = ({setActiveItem, toggleClick}) => {
    const user = useSelector((state) => state.login.user);
    const nickName = user?.nickname;
    const profileImg = user?.profileImg;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLinkClick = (index) => {
        setActiveItem(index);
        if (window.innerWidth <= 768) {
            toggleClick();
        }

        window.scrollTo({top: 0});
    };

    const logOutHandler = () => {
        const alertLogout = confirm("정말 로그아웃 하시겠습니까?");

        if (alertLogout) {
            dispatch(signOuterUer());
            navigate("/");
        }
        return;
    };

    if (user) {
        return (
            <div className="users">
                <li className="item user_nickname">
                    {profileImg ? (
                        <img src={profileImg} alt={nickName} />
                    ) : null}
                    <Link to="/account" onClick={() => handleLinkClick(null)}>
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
