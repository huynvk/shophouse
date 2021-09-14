import { HomeTabs } from 'components/Tabs';

const { VerticalLayout } = require('components/Layouts');

const StoreScreen = ({ items, ...props }) => (
  <>
    <VerticalLayout footer={<HomeTabs />}>Store Screen</VerticalLayout>
  </>
);

export default StoreScreen;
