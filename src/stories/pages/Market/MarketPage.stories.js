import { MarketPage } from 'pages/Market';
import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';

export default {
  title: 'Pages/Market/MarketPage',
  component: MarketPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <MarketPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const LoadingMenu = Template.bind({});
LoadingMenu.args = {
  mock: {
    shopItems: {
      loading: true,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  mock: {
    shopList: {
      loading: true,
    },
    shopItems: {
      loading: true,
    },
  },
};

export const EmptyScreen = Template.bind({});
EmptyScreen.args = {
  mock: {
    shopList: {
      data: [],
      loading: false,
    },
  },
};
