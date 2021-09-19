import { useTheme } from '@mui/material';
import { Heart } from 'components/Icons';

const LikeButton = ({ active, size = 1 }) => {
  const theme = useTheme();

  return (
    <Heart
      color={active ? theme.palette.primary.dark : theme.palette.grey[300]}
      width={theme.spacing(size)}
      height={theme.spacing(size)}
    />
  );
};

export default LikeButton;
