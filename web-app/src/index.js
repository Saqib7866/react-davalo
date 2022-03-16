
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'swiper/css';
import "swiper/css/pagination";
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
ReactDOM.render(
  <>
  <BrowserRouter>
  
  <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      
    </Routes>
  </BrowserRouter> 
  </>,
 
  document.getElementById('root')
);

