import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle.js";
import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyle from "./styles/ResetStyle.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);