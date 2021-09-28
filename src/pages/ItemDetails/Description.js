import { Link } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { useState } from 'react';

const Description = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  if (!description) {
    return <div />;
  }

  const canExpand = description.length > 300;
  const truncatedValue = description.slice(0, 200) + '...';

  return (
    <Typography color='GrayText'>
      {canExpand && !expanded ? truncatedValue : description}{' '}
      {canExpand && (
        <Link
          underline='always'
          color='primary'
          onClick={() => setExpanded(!expanded)}
          sx={{ cursor: 'pointer' }}
        >
          {expanded ? 'Thu gọn' : 'Xem thêm'}
        </Link>
      )}
    </Typography>
  );
};

export default Description;
