import React from 'react';
import produce from 'immer';
import theme from 'config/theme';

import { Container, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { RestfulMockProvider } from 'hooks/restful';
import defaultMocks from 'hooks/api/mock';
import '../../index.scss';

const StoryContainer = ({
  width,
  height,
  children,
  mockProducer = (draft) => draft,
}) => {
  return (
    <Router>
      <RestfulMockProvider value={produce(defaultMocks, mockProducer)}>
        <ThemeProvider theme={theme}>
          <Box bgcolor={theme.palette.grey[500]}>
            <Container
              maxWidth={width}
              sx={{
                height,
                padding: '0 !important',
                background: theme.palette.grey[300],
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
