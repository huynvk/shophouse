import { VerticalLayout } from 'components/Layouts';
import { HomeTabs } from 'components/Tabs';

const AccountScreen = ({ items, ...props }) => (
  <>
    <VerticalLayout footer={<HomeTabs />}>Account Screen</VerticalLayout>
  </>
);

export default AccountScreen;
