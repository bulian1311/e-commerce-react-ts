import React, { Component, FormEvent, ChangeEvent } from 'react';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { signInWithGoogle } from '../../firebase';
import './SignIn.scss';

type StateType = {
  email: string,
  password: string
}

class SignIn extends Component<{}, StateType> {
  state = {
    email: '',
    password: ''
  }

  private handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  }

  private handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState({ email: value });
  }

  private handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    this.setState({ password: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="email"
            type="email"
            value={this.state.email}
            required
            name="email"
            handleChange={this.handleChangeEmail}
            label="email"
          />

          <FormInput
            id="password"
            type="password"
            value={this.state.password}
            required
            name="password"
            handleChange={this.handleChangePassword}
            label="password"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
