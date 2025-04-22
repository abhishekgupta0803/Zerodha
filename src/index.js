import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route}  from "react-router-dom";
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductsPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomePage />} />
             <Route path='/signup' element={<Signup />} />
             <Route path='/about' element={<AboutPage />} />
             <Route path='/product' element={<ProductPage />} />
             <Route path='/pricing' element={<PricingPage />} />
             <Route path='/support' element={<Support />} />
             <Route path='*' element={<NotFound />} />
          </Routes>
       </ BrowserRouter> 
  </React.StrictMode>
  
);
