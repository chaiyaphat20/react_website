import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//redux
import store from './redux/store';
import { Provider } from 'react-redux'
//redux

import reportWebVitals from './reportWebVitals';
import Routes from './Routes'
ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
