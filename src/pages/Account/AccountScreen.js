import { HomeTabs } from 'components/Tabs';

const { VerticalLayout } = require('components/Layouts');

const AccountScreen = ({ items, ...props }) => (
  <>
    <VerticalLayout footer={<HomeTabs />}>Account Screen</VerticalLayout>
  </>
);

export default AccountScreen;
