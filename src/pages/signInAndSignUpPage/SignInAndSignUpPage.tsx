import React, { FC, ReactElement } from 'react';
import './SignInAndSignUpPage.scss';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';

const SignInAndSignUpPage: FC = (): ReactElement => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage;

