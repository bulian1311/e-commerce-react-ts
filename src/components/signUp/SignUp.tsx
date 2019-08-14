import React, { FC, ReactElement, ChangeEvent, FormEvent, useState } from 'react'
import './SignUp.scss';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/userActions';

type StateType = {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
}

type PropsType = {
  signUpStart: (userCredentials: any) => void
}

const SignUp: FC<PropsType> = ({ signUpStart }): ReactElement => {
  const [userCredentials, setCredentials] = useState<StateType>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });


  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;
    if (password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    };

    signUpStart({
      email,
      password,
      displayName
    });
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    setCredentials({
      ...userCredentials,
      [name]: value
    });
  }

  const { email, displayName, password, confirmPassword } = userCredentials;
  console.log(userCredentials);

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with you email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
          label='Dispalay name'
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
          label="Confirm password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
  signUpStart: (userCredentials: any) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
