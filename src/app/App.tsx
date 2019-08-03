import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../pages/homePage';
import ShopPage from '../pages/shopPage';
import SignInAndSignUpPage from '../pages/signInAndSignUpPage';
import { auth } from '../firebase';

type StateType = {
  currentUser: any
}

class App extends React.Component<{}, StateType> {
  state: StateType = {
    currentUser: null
  }

  private unsubscribeFromAuth: any;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user: any) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
