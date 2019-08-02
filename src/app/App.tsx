import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../pages/homePage';
import ShopPage from '../pages/shopPage';
import SignInAndSignUpPage from '../pages/signInAndSignUpPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
