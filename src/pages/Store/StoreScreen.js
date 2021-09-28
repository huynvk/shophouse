import { VerticalLayout } from 'components/Layouts';
import { HomeTabs } from 'components/Tabs';

const StoreScreen = ({ items, ...props }) => (
  <>
    <VerticalLayout footer={<HomeTabs />}>Store Screen</VerticalLayout>
  </>
);

export default StoreScreen;
