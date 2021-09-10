import React from 'react';
import { Container, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'config/theme';

const StoryContainer = ({ width, height, children }) => (
  <ThemeProvider theme={theme}>
    <Box bgcolor={theme.palette.background.default}>
      <Container
        maxWidth={width}
        style={{ height, backgroundColor: theme.palette.background.default }}
      >
        {children}
      </Container>
    </Box>
  </ThemeProvider>
);

export default StoryContainer;
