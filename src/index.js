import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { RestfulProvider } from 'hooks/restful';
import theme from 'config/theme';
import config from 'config/config';
import App from './App';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <RestfulProvider base={config.apiBaseURL}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </RestfulProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
