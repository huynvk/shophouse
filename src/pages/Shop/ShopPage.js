import { HomeTabs } from 'components/Tabs';
import { ItemList } from '.';
import PositionedFab from 'components/PositionedFab';
import Icon from 'components/Icons';
import { ToolbarHeader } from 'components/Headers';
import { Fab, Grid, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useGet } from 'hooks/restful';
import {
  HorizontalSpacer,
  PaddedContent,
  Row,
  VerticalLayout,
} from 'components/Layouts';
import { LoadingPlaceHolder } from 'components/Progress';

const Loadable = ({ size, loading, children }) => {
  if (loading) {
    return <LoadingPlaceHolder size={size} />;
  }
  return children;
};

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
            <IconButton>
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
  const id = '1';
  const { data, loading } = useGet({ path: `shops/${id}` });

  const { name, address, ship, liked, items } = data || {};

  return (
    <VerticalLayout
      header={<ToolbarHeader title='Cửa hàng' />}
      footer={<HomeTabs />}
    >
      <ShopInfo
        name={name}
        address={address}
        ship={ship}
        liked={liked}
        loading={loading}
      />

      <PaddedContent>
        <ItemList items={items} loading={loading} />
      </PaddedContent>
    </VerticalLayout>
  );
};

export default ShopPage;
