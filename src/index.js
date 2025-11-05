import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/vendor/bootstrap/css/bootstrap.min.css'; 

// Suppress console errors for bundle.js and manifest.json if they're causing issues
const originalError = console.error;
console.error = (...args) => {
  const message = args.join(' ');
  // Ignore bundle.js and manifest.json syntax errors that come from browser cache
  if (message.includes('bundle.js') || message.includes('manifest.json') || message.includes('Unexpected token')) {
    console.warn('Ignoring cached file error:', message);
    return;
  }
  originalError.apply(console, args);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
