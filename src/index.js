import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from './components/features/cartSlice';



 const store= configureStore({
  reducer:{
    cart: cartReducer
  }
}) 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <Provider store={store}>
   <App />
   </Provider>
  </BrowserRouter>
</React.StrictMode>
);

