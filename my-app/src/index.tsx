import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Theme 사용하기 위한 패키지 import
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
