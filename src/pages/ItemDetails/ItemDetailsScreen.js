import PropTypes from 'prop-types';
import {
  VerticalLayout,
  PaddedContent,
  Row,
  HorizontalSpacer,
  Divider,
  Footer,
} from 'components/Layouts';
import HeaderImage from './HeaderImage';
import { Box, Button, Chip, Typography } from '@material-ui/core';
import Icon from 'components/Icons';
import { useItemDetails, useShopDetails } from 'hooks/api';
import { useParams } from 'react-router-dom';
import { Loadable } from 'components/Progress';

const ItemFooter = () => (
  <Footer>
    <Button variant='contained' color='primary'>
      Đặt trước
    </Button>
  </Footer>
);

const InfoRow = ({ icon, children, loading }) => {
  return (
    <Row>
      <Icon icon={icon} size='lg' />
      <HorizontalSpacer />
      <Loadable loading={loading}>
        {typeof children === 'string' ? (
          <Typography>{children}</Typography>
        ) : (
          children || <div />
        )}
      </Loadable>
    </Row>
  );
};

const ItemDetailsScreen = () => {
  const { id: itemId } = useParams();
  const { data: itemDetails, loading: loadingItem } = useItemDetails(itemId);
  let {
    name,
    imgUrl,
    status,
    statusDetails,
    price,
    currency,
    likeCount,
    description,
    shopId,
  } = itemDetails || {};

  const { data: shopDetails, loading: loadingShop } = useShopDetails(shopId, {
    lazy: !shopId,
  });
  let { name: shopName, ship, address: shopAddress } = shopDetails || {};

  return (
    <VerticalLayout footer={<ItemFooter />}>
      <HeaderImage imgUrl={imgUrl} name={name} loading={loadingItem} />
      <PaddedContent>
        <Row>
          <Loadable size='lg' loading={loadingItem}>
            <Chip label={status} />

            <HorizontalSpacer size={0.5} />
            <Icon icon='Info' />
          </Loadable>
        </Row>
        <Loadable loading={loadingItem}>
          <Row mt={-1} mb={1.5}>
            <Typography color='textSecondary'>{statusDetails}</Typography>
          </Row>
        </Loadable>
        {/* <Divider /> */}
        <InfoRow
          icon='Price'
          loading={loadingItem}
        >{`${price} ${currency}`}</InfoRow>
        <InfoRow icon='Ship' loading={loadingItem || loadingShop}>
          {ship}
        </InfoRow>
        <InfoRow icon='Location' loading={loadingItem || loadingShop}>
          <Box>
            <Typography color='primary'>{shopName}</Typography>
            <Typography color='textSecondary'>{shopAddress}</Typography>
          </Box>
        </InfoRow>
        <InfoRow
          icon='Heart'
          loading={loadingItem}
        >{`${likeCount} người thích`}</InfoRow>
        <Divider />
        <Loadable loading={loadingItem}>
          <Row>
            <Typography>{description}</Typography>
          </Row>
        </Loadable>
      </PaddedContent>
    </VerticalLayout>
  );
};

ItemDetailsScreen.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  status: PropTypes.string,
  statusDetails: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  ship: PropTypes.string,
  shopName: PropTypes.string,
  shopAddress: PropTypes.string,
  likeCount: PropTypes.number,
  description: PropTypes.string,
};

export default ItemDetailsScreen;
