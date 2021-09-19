import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { withTheme } from '@mui/styles';
import { BackButton } from 'components/Buttons';

const ToolbarHeader = ({ theme, title }) => {
  return (
    <Box bgcolor='primary.main'>
      <Toolbar>
        <BackButton light />
        <Typography variant='h6' color='white'>
          {title}
        </Typography>
      </Toolbar>
    </Box>
  );
};

export default withTheme(ToolbarHeader);
