const { Box } = require('@mui/material');

const ExpandedBox = ({ children, ...props }) => (
  <Box
    display='flex'
    flex={1}
    justifyContent='center'
    alignItems='center'
    margin='center'
    flexDirection='column'
    style={{ with: '100%', height: '100%' }}
    {...props}
  >
    {children}
  </Box>
);

export default ExpandedBox;
