import React from 'react';
import ReactDOM from 'react-dom/client';

// importing the App.js file
import App from './App';
import './index.css';

// root of our application
// fetching from the DOM (Document Object Model)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
