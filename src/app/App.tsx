import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import HomePage from '../pages/homePage';
import ShopPage from '../pages/shopPage';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
