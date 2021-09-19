import PropTypes from 'prop-types';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from '@mui/material';
import Icon from 'components/Icons';
import { withTheme } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styled from 'styled-components';
import Row from 'components/Layouts/Row';
import HorizontalSpacer from 'components/Layouts/HorizontalSpacer';

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Head = styled.div`
  flex: 1;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: 'stretch';
`;

const ItemCard = ({
  theme,
  name,
  imgUrl,
  price,
  currency,
  status,
  hasLiked,
  ship,
  onCardAction,
  ...props
}) => (
  <Card {...props}>
    <CardActionArea onClick={onCardAction}>
      <Container>
        <CardMedia
          image={imgUrl}
          title={name}
          style={{
            width: '0',
            paddingLeft: '40%',
            paddingTop: '40%', // Minimum height is 40% of width
            justifySelf: 'stretch',
          }}
        />
        <CardContent style={{ flex: 1 }}>
          <ContentContainer>
            <Head>
              <Price>
                <Row>
                  <Typography variant='h6'>{name}</Typography>
                </Row>
                <IconButton
                  style={{
                    marginTop: theme.spacing(-1),
                    marginRight: theme.spacing(-1),
                  }}
                  size='large'
                >
                  <FavoriteIcon color={hasLiked ? 'primary' : 'action'} />
                </IconButton>
              </Price>
              <Row>
                <Chip label={status} />
              </Row>
            </Head>
            {ship && (
              <Row>
                <Icon icon='Ship' size='lg' />
                <HorizontalSpacer />
                <Typography>{ship}</Typography>
              </Row>
            )}
            <Row mb={0}>
              <Icon icon='Price' size='lg' />
              <HorizontalSpacer />
              <Typography>{`${price} ${currency}`}</Typography>
            </Row>
          </ContentContainer>
        </CardContent>
      </Container>
    </CardActionArea>
  </Card>
);

ItemCard.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  status: PropTypes.string,
  hasLiked: PropTypes.bool,
  ship: PropTypes.string,
  onCardAction: PropTypes.func,
};

export default withTheme(ItemCard);
