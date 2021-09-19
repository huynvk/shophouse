import { Box } from '@mui/material';

const Row = (props) => {
  return (
    <Box
      display='flex'
      mb={1}
      flexDirection='row'
      alignItems='center'
      {...props}
    />
  );
};

export default Row;
