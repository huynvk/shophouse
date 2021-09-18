import { Paper } from '@material-ui/core';
import { withMuiTheme } from 'hoc';
import { PaddedContent } from '.';

const Footer = withMuiTheme(({ theme, children }) => (
  <Paper elevation={3} square style={{ overflow: 'hidden' }}>
    <PaddedContent paddingSize='sm'>{children}</PaddedContent>
  </Paper>
));

export default Footer;
