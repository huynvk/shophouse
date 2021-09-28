import { MarketPage } from 'pages/Market';
import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';

export default {
  title: 'Pages/Market/MarketPage',
  component: MarketPage,
};

const Template = ({ mockProducer, ...props }) => (
  <StoryContainer width='sm' height='800px' mockProducer={mockProducer}>
    <MarketPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const LoadingMenu = Template.bind({});
LoadingMenu.args = {
  mockProducer: (mock) => {
    mock.shopItems.loading = true;
  },
};

export const Loading = Template.bind({});
Loading.args = {
  mockProducer: (mock) => {
    mock.shopList.loading = true;
    mock.shopItems.loading = true;
  },
};

export const EmptyScreen = Template.bind({});
EmptyScreen.args = {
  mockProducer: (mock) => {
    mock.shopList.data = [];
  },
};
