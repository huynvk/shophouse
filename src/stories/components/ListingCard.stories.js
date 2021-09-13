import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import ListingCard from 'components/ListingCard';

export default {
  title: 'Components/ListingCard',
  component: ListingCard,
};

const Template = ({ ...props }) => (
  <StoryContainer width={'sm'} height='800px'>
    <ListingCard {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Chả giò',
  imgUrl:
    'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9',
  price: 100000,
  currency: 'VNĐ',
  status: 'SẮP MỞ BÁN',
  hasLiked: true,
  ship: '',
};

export const WithShippingFee = Template.bind({});
WithShippingFee.args = {
  name: 'Chả giò',
  imgUrl:
    'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9',
  price: 100000,
  currency: 'VNĐ',
  status: 'SẮP MỞ BÁN',
  hasLiked: true,
  ship: 'Thoả thuận',
};
