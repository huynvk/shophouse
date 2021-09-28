import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const ExternalLink = ({ link, title, description }) => {
  return (
    <Box
      sx={{ bgcolor: 'grey.300', p: 0.5, pl: 1, pr: 1, mb: 1 }}
      onClick={() => window.open(link, '_blank')}
    >
      <Typography>{title || link}</Typography>
      {description && <Typography color='GrayText'>{description}</Typography>}
    </Box>
  );
};

export default ExternalLink;
