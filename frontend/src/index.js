import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes.js';
import './styles/scss/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
