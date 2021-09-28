import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const paddingMap = {
  sm: 0.5,
  md: 1,
  lg: 2,
};

const PaddedContent = ({
  children,
  fullHeight,
  paddingSize = 'md',
  ...props
}) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      padding={paddingMap[paddingSize]}
      {...props}
      flexGrow={fullHeight ? 1 : undefined}
    >
      {children}
    </Box>
  );
};

PaddedContent.propsType = {
  paddingSize: PropTypes.oneOf(Object.keys(paddingMap)),
};

export default PaddedContent;
