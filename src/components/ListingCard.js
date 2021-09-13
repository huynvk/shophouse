import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import Icon from 'components/Icons';
import { HorizontalSpacer, Row } from './Layouts';
import { withMuiTheme } from 'hoc';
import ImageBox from './ImageBox';

const ListingCard = ({
  theme,
  name,
  imgUrl,
  price,
  currency,
  status,
  hasLiked,
  ship,
}) => (
  <Card>
    <CardActionArea>
      <ImageBox
        imgUrl={imgUrl}
        name={name}
        height={theme.spacing(10)}
        headerVariant='h2'
        paddingSize={1}
      />
      <CardContent>
        <Row>
          <Typography color='primary' variant='h6'>
            {status}
          </Typography>
        </Row>
        <Row>
          <Icon icon='Price' size='lg' />
          <HorizontalSpacer />
          <Typography>{`${price} ${currency}`}</Typography>
        </Row>
        {ship && (
          <Row>
            <Icon icon='Ship' size='lg' />
            <HorizontalSpacer />
            <Typography>{ship}</Typography>
          </Row>
        )}
      </CardContent>
    </CardActionArea>
  </Card>
);

ListingCard.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.string,
  currency: PropTypes.string,
  status: PropTypes.string,
  hasLiked: PropTypes.bool,
  ship: PropTypes.string,
};

export default withMuiTheme(ListingCard);
