import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Slider from "./Slide"
// import Homepage from './Pages/Homepage';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Services from './Pages/Services';
// import Project from './Pages/Project';
// import About from './Pages/About';
// import ChatRecipientPicker from './testing';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
