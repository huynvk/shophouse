import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { RestfulProvider } from 'hooks/restful';
import theme from 'config/theme';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RestfulProvider base='http://localhost:4000'>
      <StyledComponentThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledComponentThemeProvider>
    </RestfulProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
