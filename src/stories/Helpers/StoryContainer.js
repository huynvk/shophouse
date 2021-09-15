import React from 'react';
import { Container, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'config/theme';
import '../../index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const StoryContainer = ({ width, height, children }) => (
  <Router>
    <ThemeProvider theme={theme}>
      <Box bgcolor={theme.palette.grey[300]}>
        <Container maxWidth={width} style={{ height }}>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  </Router>
);

export default StoryContainer;
