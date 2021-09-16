import { useGet } from 'hooks/restful';
import { HomeTabs } from 'components/Tabs';
import PositionedFab from 'components/PositionedFab';
import Icon from 'components/Icons';
import { ShopList } from '.';
import { Typography } from '@material-ui/core';

const { VerticalLayout, PaddedContent } = require('components/Layouts');

const MarketPage = () => {
  const { data: shops, loading } = useGet({ path: 'shops' });

  return (
    <VerticalLayout
      header={
        <PaddedContent pt={1} pb={0}>
          <Typography variant='h2' component='h1'>
            Chợ Lavita Garden
          </Typography>
        </PaddedContent>
      }
      footer={<HomeTabs />}
    >
      <ShopList items={shops} loading={loading} />
      {shops && shops.length > 0 && (
        <PositionedFab color='primary' aria-label='add'>
          <Icon icon='Plus' size='lg' />
        </PositionedFab>
      )}
    </VerticalLayout>
  );
};

export default MarketPage;
