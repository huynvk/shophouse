import React from 'react';
import { Container, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'config/theme';
import '../../index.scss';

const StoryContainer = ({ width, height, children }) => (
  <ThemeProvider theme={theme}>
    <Box bgcolor={theme.palette.grey[300]}>
      <Container maxWidth={width} style={{ height }}>
        {children}
      </Container>
    </Box>
  </ThemeProvider>
);

export default StoryContainer;
