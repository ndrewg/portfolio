import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AnimateProvider } from './context/animate.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimateProvider>
      <App />
    </AnimateProvider>
  </React.StrictMode>
);
