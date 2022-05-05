import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

import {
  BrowserRouter
} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import DoctorPage from './components/DoctorPage';


ReactDOM.render(
  <BrowserRouter>
  
    <App />
   
  </BrowserRouter>,
  document.getElementById('root')
);

