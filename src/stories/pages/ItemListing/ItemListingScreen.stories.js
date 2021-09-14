import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemListingScreen } from 'pages/ItemListing';

export default {
  title: 'Pages/ItemListing/ItemListingScreen',
  component: ItemListingScreen,
};

const Template = (props) => (
  <StoryContainer width='sm' height='800px'>
    <ItemListingScreen {...props} />
  </StoryContainer>
);

export const EmptyScreen = Template.bind({});
EmptyScreen.args = {
  currentPage: 'market',
};

export const WithData = Template.bind({});
WithData.args = {
  currentPage: 'market',
  items: [
    {
      id: 1,
      name: 'Chả giò',
      imgUrl:
        'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9',
      price: 100000,
      currency: 'VNĐ',
      status: 'SẮP MỞ BÁN',
      hasLiked: true,
    },
    {
      id: 2,
      name: 'Chả giò nhỏ',
      imgUrl:
        'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9',
      price: 50000,
      currency: 'VNĐ',
      status: 'SẮP MỞ BÁN',
      hasLiked: true,
      ship: 'Thoả thuận',
    },
    {
      id: 3,
      name: 'Chả giò lớn',
      imgUrl:
        'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9',
      price: 200000,
      currency: 'VNĐ',
      status: 'SẮP MỞ BÁN',
      hasLiked: false,
    },
  ],
};
