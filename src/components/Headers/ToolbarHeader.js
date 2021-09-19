import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBackSharp';
import { Box } from '@mui/material';
import { withTheme } from '@mui/styles';

const ToolbarHeader = ({ theme, title }) => {
  return (
    <Box bgcolor='primary.main'>
      <Toolbar>
        <IconButton edge='start' aria-label='back' size='large'>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </Box>
  );
};

export default withTheme(ToolbarHeader);
