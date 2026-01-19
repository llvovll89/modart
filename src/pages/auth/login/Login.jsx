import AccountForm from "../../../components/account/AccountForm";
import {AccountContainer} from "../styles/index";

const Login = () => {
    return (
        <AccountContainer>
            <AccountForm text="로그인" link="회원가입" />
        </AccountContainer>
    );
};

export default Login;
