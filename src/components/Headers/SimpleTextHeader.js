import { Typography } from '@mui/material';
import { PaddedContent } from '../Layouts';

const SimpleTextHeader = ({ children, ...props }) => (
  <PaddedContent pt={1} pb={0} {...props}>
    <Typography variant='h2' component='h1'>
      {children}
    </Typography>
  </PaddedContent>
);

export default SimpleTextHeader;
