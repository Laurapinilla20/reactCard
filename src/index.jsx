import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));  // 'app' es el id del div en index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
