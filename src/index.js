import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import './styles/normalize.scss'

import App from './App';
import Loader from './features/Loader/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)


