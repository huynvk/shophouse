import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemDetailsPage } from 'pages/ItemDetails';

export default {
  title: 'Pages/ItemDetailsPage',
  component: ItemDetailsPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <ItemDetailsPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const LoadingItems = Template.bind({});
LoadingItems.args = {
  mock: {
    itemDetails: {
      loading: true,
    },
  },
};

export const LoadingShop = Template.bind({});
LoadingShop.args = {
  mock: {
    shopDetails: {
      loading: true,
    },
  },
};
