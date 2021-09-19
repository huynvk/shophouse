import { Paper } from '@mui/material';
import { withTheme } from '@mui/styles';
import { PaddedContent } from '.';

const Footer = withTheme(({ theme, children }) => (
  <Paper elevation={3} square style={{ overflow: 'hidden' }}>
    <PaddedContent paddingSize='sm'>{children}</PaddedContent>
  </Paper>
));

export default Footer;
