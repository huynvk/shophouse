import { Box } from '@material-ui/core';

const PaddedContent = ({ children }) => {
  return (
    <Box display='flex' flexDirection='column' padding={2}>
      {children}
    </Box>
  );
};

export default PaddedContent;
