import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './home/HomePage';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Signup from './signup/Signup';
import Aboutpage from './about/Aboutpage'
import ProductPage from './products/ProductPage';
import PricingPage from './pricing/PricingPage';
import Supportpage from './support/SupportPage';
import Navbar from './Navbar';
import Footer from './Footer';
import Notfound from './Notfound';
import Login from './signup/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='about' element={<Aboutpage/>}></Route>
      <Route path='product' element={<ProductPage/>}></Route>
      <Route path='pricing' element ={<PricingPage/>}></Route>
      <Route path='support' element ={<Supportpage/>}></Route>
      <Route path='*' element ={<Notfound/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    <Footer/> 
  </BrowserRouter>
);