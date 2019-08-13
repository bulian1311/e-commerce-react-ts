import React, { Component, FormEvent, ChangeEvent } from 'react';
import FormInput from '../formInput';
import CustomButton from '../customButton';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/userActions';
import './SignIn.scss';

type StateType = {
  email: string,
  password: string
}

type PropsType = {
  googleSignInStart: () => void,
  emailSignInStart: (email: string, password: string) => void
}

class SignIn extends Component<PropsType, StateType> {
  state = {
    email: '',
    password: ''
  }

  private handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
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
    const { googleSignInStart } = this.props;
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
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
