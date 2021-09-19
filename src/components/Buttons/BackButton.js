import { useTheme } from '@mui/material';
import { BackArrow } from 'components/Icons';

const BackButton = ({ light, size = 2 }) => {
  const theme = useTheme();
  return (
    <BackArrow
      color={light ? theme.palette.white : theme.palette.black}
      width={theme.spacing(size)}
      height={theme.spacing(size)}
    />
  );
};

export default BackButton;
