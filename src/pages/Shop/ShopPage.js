import { Grid, IconButton, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Icon from 'components/Icons';
import { ToolbarHeader } from 'components/Headers';
import {
  HorizontalSpacer,
  PaddedContent,
  Row,
  VerticalLayout,
} from 'components/Layouts';
import { Loadable } from 'components/Progress';
import { useShopDetails, useShopItems } from 'hooks/api';
import { ItemList } from '.';

const ShopInfo = ({ name, address, ship, liked, loading }) => (
  <PaddedContent pr={1} pb={0}>
    <Row>
      <Grid container justifyContent='space-between' spacing={1}>
        <Grid item>
          <Loadable loading={loading} size='lg'>
            <Typography variant='h2'>{name}</Typography>
          </Loadable>
        </Grid>
        <Grid item>
          <Loadable loading={loading} size='sm'>
            <IconButton size="large">
              <FavoriteIcon color={liked ? 'primary' : 'action'} />
            </IconButton>
          </Loadable>
        </Grid>
      </Grid>
    </Row>

    <Row alignItems='flex-start'>
      <Loadable loading={loading} size='md'>
        <Typography color='textSecondary'>{address}</Typography>
      </Loadable>
    </Row>
    <Row>
      <Icon icon='Ship' size='lg' />
      <HorizontalSpacer />
      <Loadable loading={loading} size='lg'>
        <Typography>{ship}</Typography>
      </Loadable>
    </Row>
  </PaddedContent>
);

const ShopPage = () => {
  const { id: shopId } = useParams();
  const { data, loading: loadingShopInfo } = useShopDetails(shopId);
  const { data: items, loading: loadingItems } = useShopItems(shopId);

  const { name, address, ship, liked } = data || {};

  return (
    <VerticalLayout header={<ToolbarHeader title='Cửa hàng' />}>
      <ShopInfo
        name={name}
        address={address}
        ship={ship}
        liked={liked}
        loading={loadingShopInfo}
      />

      <PaddedContent fullHeight>
        <ItemList items={items} loading={loadingItems} />
      </PaddedContent>
    </VerticalLayout>
  );
};

export default ShopPage;
