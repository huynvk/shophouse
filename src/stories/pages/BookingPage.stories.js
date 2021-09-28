import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { BookingPage } from 'pages/Booking';

export default {
  title: 'Pages/BookingPage',
  component: BookingPage,
};

const Template = ({ mockProducer, ...props }) => (
  <StoryContainer width='sm' height='800px' mockProducer={mockProducer}>
    <BookingPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  mockProducer: (mock) => {
    mock.itemDetails.loading = true;
  },
};
