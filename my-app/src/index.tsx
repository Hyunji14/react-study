import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './theme';
import ReactDOM from 'react-dom';
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
