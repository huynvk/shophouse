import { HomeTabs } from 'components/Tabs';
import Icon from 'components/Icons';
import { SimpleTextHeader } from 'components/Headers';
import { PaddedContent, VerticalLayout } from 'components/Layouts';
import { Fab } from '@mui/material';
import { useItemList } from 'hooks/api';
import { ItemList } from 'pages/Shop';

const MarketPage = () => {
  const { data: items, loading } = useItemList();
  return (
    <VerticalLayout
      header={<SimpleTextHeader>Shophouse.vn</SimpleTextHeader>}
      footer={<HomeTabs />}
      fab={
        items &&
        items.length > 0 && (
          <Fab color='primary' aria-label='add'>
            <Icon icon='Plus' size='lg' />
          </Fab>
        )
      }
    >
      <PaddedContent fullHeight>
        <ItemList items={items} loading={loading} />
      </PaddedContent>
    </VerticalLayout>
  );
};

export default MarketPage;
