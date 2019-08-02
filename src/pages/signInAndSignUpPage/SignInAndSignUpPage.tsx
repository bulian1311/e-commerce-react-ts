import React, { FC, ReactElement } from 'react';
import './SignInAndSignUpPage.scss';
import SignIn from '../../components/signIn';

const SignInAndSignUpPage: FC = (): ReactElement => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
    </div>
  )
}

export default SignInAndSignUpPage;

