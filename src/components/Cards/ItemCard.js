import PropTypes from 'prop-types';
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';

import Row from 'components/Layouts/Row';
import HorizontalSpacer from 'components/Layouts/HorizontalSpacer';
import { WhiteCardContent } from '.';
import InfoRow from 'pages/ItemDetails/InfoRow';

const ItemCard = ({
  name,
  imgUrl,
  sellerName,
  price,
  currency,
  address,
  onCardAction,
}) => (
  <Card>
    <CardActionArea onClick={onCardAction}>
      <WhiteCardContent>
        <CardMedia
          image={imgUrl}
          title={name}
          sx={{
            width: '100px',
            height: '100px',
            float: 'right',
            ml: 1,
            mb: 1,
          }}
        />
        <Typography variant='h6' component='h1'>
          {name}
        </Typography>
        <Row mb={0.5}>
          <Typography variant='subtitle2' color='GrayText'>
            {sellerName}
          </Typography>
          <HorizontalSpacer size={0.5} />
        </Row>
        {price && <InfoRow icon='Price'>{`${price} ${currency}`}</InfoRow>}
        <InfoRow icon='Location'>{address}</InfoRow>
        <div style={{ clear: 'both' }} />
      </WhiteCardContent>
    </CardActionArea>
  </Card>
);

ItemCard.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  sellerName: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  address: PropTypes.string,
  onClick: PropTypes.func,
};

export default ItemCard;
