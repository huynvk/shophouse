import { Box } from '@material-ui/core';

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
