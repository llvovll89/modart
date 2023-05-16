import React from 'react';
import AccountForm from '../../../components/common/AccountForm';
import { AccountContainer } from '..';

const Login = () => {
  return (
    <AccountContainer>
      <AccountForm text="로그인" link="회원가입" />
    </AccountContainer>
  );
};

export default Login;
