import { useGet } from 'hooks/restful';
import { HomeTabs } from 'components/Tabs';
import PositionedFab from 'components/PositionedFab';
import Icon from 'components/Icons';
import { ShopList } from '.';
import { Typography } from '@material-ui/core';

const { VerticalLayout, PaddedContent } = require('components/Layouts');

const MarketPage = () => {
  const { data: shops, loading } = useGet({ path: 'shops' });
  console.log('data', shops, loading);

  return (
    <VerticalLayout
      header={
        <PaddedContent>
          <Typography variant='h2'>Chợ Lavita Garden</Typography>
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
