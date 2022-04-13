
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
import Header from './components/Header/Header';
import ProductDetail from './components/Detail/ProductDetail';
ReactDOM.render(
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/detail" element={<ProductDetail/>} />
    </Routes>
  </BrowserRouter> 
  </>,
 
  document.getElementById('root')
);

