import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { BookingPage } from 'pages/Booking';

export default {
  title: 'Pages/BookingPage',
  component: BookingPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <BookingPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  mock: {
    itemDetails: {
      loading: false,
      data: {
        name: 'Chả giò',
        price: 100000,
        currency: 'VNĐ',
      },
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  mock: {
    itemDetails: {
      loading: true,
    },
  },
};
