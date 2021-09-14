import { HomeTabs } from 'components/Tabs';
import { ItemList } from '.';
import PositionedFab from 'components/PositionedFab';
import Icon from 'components/Icons';

const { VerticalLayout } = require('components/Layouts');

const ItemListingScreen = ({ items, ...props }) => (
  <>
    <VerticalLayout footer={<HomeTabs />}>
      <ItemList items={items} {...props} />
      {items && items.length > 0 && (
        <PositionedFab color='primary' aria-label='add'>
          <Icon icon='Plus' size='lg' />
        </PositionedFab>
      )}
    </VerticalLayout>
  </>
);

export default ItemListingScreen;
