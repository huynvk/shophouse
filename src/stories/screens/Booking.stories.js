import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import Booking from 'pages/Booking';

export default {
  title: 'Screens/Booking',
  component: Booking,
};

const Template = (props) => (
  <StoryContainer width='sm' height='800px'>
    <Booking {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  hasAccount: false,
  name: 'Chả giò',
  price: 100000,
  currency: 'VNĐ',
  recipientAddress: '',
  amount: 1,
  recipient: '',
  recipientPhone: '',
  note: '',
};

export const Filled = Template.bind({});
Filled.args = {
  hasAccount: false,
  createAccount: true,
  name: 'Chả giò',
  price: 100000,
  currency: 'VNĐ',
  recipientAddress: 'Sảnh A, chung cư Lavita Garden',
  amount: 1,
  recipient: 'Ngô Việt Khánh Huy',
  recipientPhone: '0978826812',
  note:
    'Ít cay thôi nha chị, cho em nhiều mắm. Ít cay thôi nha chị, cho em nhiều mắm.',
};

export const ExistingUser = Template.bind({});
ExistingUser.args = {
  hasAccount: true,
  name: 'Chả giò',
  price: 100000,
  currency: 'VNĐ',
  recipientAddress: '',
  amount: 1,
  recipient: '',
  recipientPhone: '',
  note: '',
};
