import { Box } from '@material-ui/core';
import { withMuiTheme } from 'hoc';
import { PaddedContent } from '.';

const Footer = withMuiTheme(({ theme, children }) => (
  <Box borderColor={'grey.200'} borderTop={1}>
    <PaddedContent paddingSize='sm'>{children}</PaddedContent>
  </Box>
));

export default Footer;
