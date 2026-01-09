import React from "react";
import AccountForm from "../../../components/account/AccountForm";
import {AccountContainer} from "..";

const SignUp = () => {
    return (
        <AccountContainer>
            <AccountForm text="회원가입" link="로그인" />
        </AccountContainer>
    );
};

export default SignUp;
