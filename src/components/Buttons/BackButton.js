import { IconButton, useTheme } from '@mui/material';
import { BackArrow } from 'components/Icons';
import { useHistory } from 'react-router-dom';

const BackButton = ({ light, size = 2, ...props }) => {
  const theme = useTheme();
  const history = useHistory();
  return (
    <IconButton
      edge='start'
      aria-label='back'
      size='large'
      onClick={history.goBack}
      {...props}
    >
      <BackArrow
        color={light ? theme.palette.common.white : theme.palette.common.black}
        width={theme.spacing(size)}
        height={theme.spacing(size)}
      />
    </IconButton>
  );
};

export default BackButton;
