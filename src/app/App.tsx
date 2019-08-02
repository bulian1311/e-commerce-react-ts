import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homePage';
import ShopPage from '../pages/shopPage';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
