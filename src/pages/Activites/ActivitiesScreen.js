import { VerticalLayout } from 'components/Layouts';
import { HomeTabs } from 'components/Tabs';

const ActivitiesScreen = ({ items, ...props }) => {
  return <VerticalLayout footer={<HomeTabs />}>Activity Screen</VerticalLayout>;
};

export default ActivitiesScreen;
