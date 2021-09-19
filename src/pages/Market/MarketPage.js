import { HomeTabs } from 'components/Tabs';
import Icon from 'components/Icons';
import { ShopList } from '.';
import { SimpleTextHeader } from 'components/Headers';
import { PaddedContent, VerticalLayout } from 'components/Layouts';
import { Fab } from '@mui/material';
import { useShopList } from 'hooks/api';

const MarketPage = () => {
  const { data: shops, loading } = useShopList();

  return (
    <VerticalLayout
      header={<SimpleTextHeader>Chợ Lavita Garden</SimpleTextHeader>}
      footer={<HomeTabs />}
      fab={
        shops &&
        shops.length > 0 && (
          <Fab color='primary' aria-label='add'>
            <Icon icon='Plus' size='lg' />
          </Fab>
        )
      }
    >
      <PaddedContent fullHeight>
        <ShopList items={shops} loading={loading} />
      </PaddedContent>
    </VerticalLayout>
  );
};

export default MarketPage;
