import React, { FC, ReactElement, FormEvent, ChangeEvent, useState } from 'react';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';
import './SignIn.scss';

type PropsType = {
  googleSignInStart: () => void,
  emailSignInStart: (email: string, password: string) => void
}

const SignIn: FC<PropsType> = ({ googleSignInStart, emailSignInStart }): ReactElement => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    emailSignInStart(email, password);
  }

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setEmail(value);
  }

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setPassword(value);
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id="email"
          type="email"
          value={email}
          required
          name="email"
          handleChange={handleChangeEmail}
          label="email"
        />

        <FormInput
          id="password"
          type="password"
          value={password}
          required
          name="password"
          handleChange={handleChangePassword}
          label="password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In With Google
            </CustomButton>
        </div>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
