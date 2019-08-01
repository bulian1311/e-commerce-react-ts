import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
