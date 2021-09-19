import { LinearProgress } from '@mui/material';
import { withStyles } from '@mui/styles';
import { Box } from '@mui/system';

const LoadingAnimation = withStyles((theme) => ({
  root: {
    height: 20,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 700],
  },
  bar: {
    backgroundColor: theme.palette.grey[100],
  },
}))(LinearProgress);

const sizeMapping = {
  sm: 50,
  md: 100,
  lg: 150,
};

const LoadingPlaceHolder = ({ size, ...props }) => (
  <Box width={sizeMapping[size]} {...props}>
    <LoadingAnimation />
  </Box>
);

export default LoadingPlaceHolder;
