import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ShopPage } from 'pages/Shop';

export default {
  title: 'Pages/Shop/ShopPage',
  component: ShopPage,
};

const Template = ({ mockProducer, ...props }) => (
  <StoryContainer width='sm' height='800px' mockProducer={mockProducer}>
    <ShopPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  mockProducer: (mock) => {
    mock.shopDetails.loading = true;
    mock.shopItems.loading = true;
  },
};

export const EmptyScreen = Template.bind({});
EmptyScreen.args = {
  mockProducer: (mock) => {
    mock.shopItems.data = [];
  },
};
