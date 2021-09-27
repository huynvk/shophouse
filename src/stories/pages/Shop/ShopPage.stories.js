import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ShopPage } from 'pages/Shop';

export default {
  title: 'Pages/Shop/ShopPage',
  component: ShopPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <ShopPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  mock: {
    shopDetails: {
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
    shopItems: {
      loading: false,
      data: [],
    },
  },
};
