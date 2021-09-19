import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const CustomButton = ({ color, text }) => (
  <Button variant='contained' color={color}>
    {text || 'Hello World'}
  </Button>
);

CustomButton.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary']),
  text: PropTypes.string,
};

export default CustomButton;
