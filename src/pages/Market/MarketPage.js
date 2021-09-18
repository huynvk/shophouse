import { useGet } from 'hooks/restful';
import { HomeTabs } from 'components/Tabs';
import Icon from 'components/Icons';
import { ShopList } from '.';
import { SimpleTextHeader } from 'components/Headers';
import { PaddedContent, VerticalLayout } from 'components/Layouts';
import { Fab } from '@material-ui/core';

const MarketPage = () => {
  const { data: shops, loading } = useGet({ path: 'shops' });

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
      <PaddedContent style={{ position: 'relative' }}>
        <ShopList items={shops} loading={loading} />
      </PaddedContent>
    </VerticalLayout>
  );
};

export default MarketPage;
