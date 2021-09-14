import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { HomeTabs } from 'components/Tabs';

export default {
  title: 'Components/HomeTabs',
  component: HomeTabs,
};

const Template = ({ ...props }) => (
  <StoryContainer width={'sm'} height='800px'>
    <HomeTabs {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  currentPage: 'market',
};
