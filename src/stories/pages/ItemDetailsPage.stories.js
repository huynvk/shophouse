import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemDetailsPage } from 'pages/ItemDetails';

export default {
  title: 'Pages/ItemDetailsPage',
  component: ItemDetailsPage,
};

const Template = ({ mockProducer, ...props }) => (
  <StoryContainer width='sm' height='800px' mockProducer={mockProducer}>
    <ItemDetailsPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const OnePrice = Template.bind({});
OnePrice.args = {
  mockProducer: (mock) => {
    mock.itemDetails.data.menu = [
      {
        name: 'Chả giò',
        price: 100000,
        currency: 'VNĐ',
        unit: 'Hộp 20 cuốn',
      },
    ];
  },
};

export const NoExternalLink = Template.bind({});
NoExternalLink.args = {
  mockProducer: (mock) => {
    delete mock.itemDetails.data.externalLink;
  },
};

export const NoContact = Template.bind({});
NoContact.args = {
  mockProducer: (mock) => {
    delete mock.user.data.zalo;
    delete mock.user.data.messenger;
    delete mock.user.data.website;
    delete mock.user.data.phone;
  },
};

export const NoPromotion = Template.bind({});
NoPromotion.args = {
  mockProducer: (mock) => {
    mock.itemDetails.data.promotions = [];
  },
};

export const PriceNoUnit = Template.bind({});
PriceNoUnit.args = {
  mockProducer: (mock) => {
    mock.itemDetails.data.menu = [
      {
        name: 'Chả giò',
        price: 100000,
        currency: 'VNĐ',
      },
      {
        name: 'Chả giò',
        price: 100000,
        currency: 'VNĐ',
      },
    ];
  },
};

export const LoadingItems = Template.bind({});
LoadingItems.args = {
  mockProducer: (mock) => {
    mock.itemDetails.loading = true;
  },
};

export const LoadingUser = Template.bind({});
LoadingUser.args = {
  mockProducer: (mock) => {
    mock.user.loading = true;
  },
};
