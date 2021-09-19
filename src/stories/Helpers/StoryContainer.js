import React from 'react';
import { Container, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import theme from 'config/theme';
import '../../index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { RestfulMockProvider } from 'hooks/restful';

const StoryContainer = ({ width, height, children, mock = {} }) => (
  <Router>
    <RestfulMockProvider value={mock}>
      <StyledComponentThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Box bgcolor={theme.palette.grey[300]}>
            <Container
              maxWidth={width}
              style={{
                height,
                padding: 0,
                background: theme.palette.background,
              }}
            >
              {children}
            </Container>
          </Box>
        </ThemeProvider>
      </StyledComponentThemeProvider>
    </RestfulMockProvider>
  </Router>
);

export default StoryContainer;
