import React, { Component, ChangeEvent, FormEvent } from 'react'
import './SignUp.scss';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { auth, createUserProfileDocument } from '../../firebase';
import { User } from '../../firebase/types';

type StateType = {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
}

class SignUp extends Component<{}, StateType> {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  private handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const { email, displayName, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    };

    try {
      const res: any = await auth.createUserWithEmailAndPassword(email, password);
      const user: User | null = res.user;

      if (!user) return;

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  private handleChangeDisplayName = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState({
      displayName: value
    });
  }

  private handleChangeEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState({
      email: value
    });
  }

  private handleChangePassword = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState({
      password: value
    });
  }

  private handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    this.setState({
      confirmPassword: value
    });
  }

  render() {

    const { email, displayName, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with you email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChangeDisplayName}
            required
            label='Dispalay name'
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChangeEmail}
            required
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChangePassword}
            required
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChangeConfirmPassword}
            required
            label="Confirm password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;
