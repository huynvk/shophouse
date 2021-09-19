import React from 'react';
import theme from 'config/theme';

import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { RestfulMockProvider } from 'hooks/restful';
import '../../index.scss';

const StoryContainer = ({ width, height, children, mock = {} }) => {
  return (
    <Router>
      <RestfulMockProvider value={mock}>
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
      </RestfulMockProvider>
    </Router>
  );
};

export default StoryContainer;
