import React from 'react';
import './App.scss';
import HomePage from '../pages/homePage';
import { Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
