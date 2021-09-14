import { HomeTabs } from 'components/Tabs';
import { ItemList } from '.';
import PositionedFab from 'components/PositionedFab';

const { VerticalLayout } = require('components/Layouts');

const ItemListingScreen = ({ currentPage, items, ...props }) => (
  <>
    <VerticalLayout footer={<HomeTabs currentPage={currentPage} />}>
      <ItemList items={items} {...props} />
      {items && items.length > 0 && (
        <PositionedFab color='primary' aria-label='add'>
          Add
        </PositionedFab>
      )}
    </VerticalLayout>
  </>
);

export default ItemListingScreen;
