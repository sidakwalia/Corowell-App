import React from 'react';
import ReactDOM from 'react-dom/client';
import './Scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Survey from './Screens/Survey';
import Register from './Screens/Auth/register';
import Result from './Screens/Result';
import Scanner from './Screens/Scanner';
const root = ReactDOM.createRoot(document.getElementById('corowell'));
root.render(
  <BrowserRouter>
            <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/result" element={<Result />} />
      <Route path="/scanner" element={<Scanner />} />
    </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
