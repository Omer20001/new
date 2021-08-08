import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Sec1 from './components/Sec1';
import Sec2 from './components/Sec2';
import Sec3 from './components/Sec3';
import Sec4 from './components/Sec4';
import Sec5 from './components/Sec5';
import Sec6 from './components/Sec6';


ReactDOM.render(
  <React.StrictMode>

  <Navbar />
  
  <Sec1 />
  <Sec2 />
  <Sec3 />
  <Sec4 />
  <Sec5 />
  <Sec6 />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
