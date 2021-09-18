import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBackSharp';
import { Box } from '@material-ui/core';
import { withMuiTheme } from 'hoc';

const ToolbarHeader = ({ theme, title }) => {
  return (
    <Box bgcolor='primary.main'>
      <Toolbar>
        <IconButton
          edge={false}
          aria-label='back'
          style={{ marginLeft: theme.spacing(-2) }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant='h6'>{title}</Typography>
      </Toolbar>
    </Box>
  );
};

export default withMuiTheme(ToolbarHeader);
