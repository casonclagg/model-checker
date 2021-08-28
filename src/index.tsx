import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './pages/MainPage';
import { Header } from './components/common/Header';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact={true} path={"/"} component={MainPage} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
