import React from 'react';
import ReactDOM from 'react-dom';
import './sass/app.scss';
import App from './routes';
import { I18nextProvider } from 'react-i18next';
//import i18n from './i18n';

// import i18n (needs to be bundled ;)) 
import './i18n';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
