import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const paddingMap = {
  sm: 1,
  md: 2,
  lg: 3,
};

const PaddedContent = ({ children, paddingSize = 'md' }) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      padding={paddingMap[paddingSize]}
    >
      {children}
    </Box>
  );
};

PaddedContent.propsType = {
  paddingSize: PropTypes.oneOf(Object.keys(paddingMap)),
};

export default PaddedContent;
