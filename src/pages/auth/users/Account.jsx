import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AccountWrap, AccountContainer} from "./styles/Account.css";
import {signOutUser} from "../../../store/reducers/loginSlice";
import {CiEdit, CiLogout} from "react-icons/ci";

const Account = ({accountRef}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutHandler = () => {
        const alertLogout = confirm("정말 로그아웃 하시겠습니까?");

        if (alertLogout) {
            dispatch(signOutUser());
            navigate("/");
        }
        return;
    };

    const handleEditProfile = () => {
        navigate("/account/edit");
    };

    return (
        <AccountWrap ref={accountRef}>
            <AccountContainer>
                <li onClick={handleEditProfile}>
                    <CiEdit />
                    <span>프로필 수정</span>
                </li>

                <li onClick={logOutHandler}>
                    <CiLogout />
                    <span>로그아웃</span>
                </li>
            </AccountContainer>
        </AccountWrap>
    );
};

export default Account;
