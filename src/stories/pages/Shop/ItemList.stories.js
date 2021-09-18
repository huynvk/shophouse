import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemList } from 'pages/Shop';

export default {
  title: 'Pages/Shop/ItemList',
  component: ItemList,
};

const Template = (props) => (
  <StoryContainer width='sm' height='800px'>
    <ItemList {...props} />
  </StoryContainer>
);

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const EmptyScreen = Template.bind({});
EmptyScreen.args = {};

export const WithData = Template.bind({});
WithData.args = {
  items: [
    {
      id: 1,
      name: 'Chả giò',
      imgUrl:
        'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
      price: 100000,
      currency: 'VNĐ',
      status: 'SẮP MỞ BÁN',
      hasLiked: true,
    },
    {
      id: 2,
      name: 'Chả giò nhỏ',
      imgUrl:
        'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
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
        'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
      price: 200000,
      currency: 'VNĐ',
      status: 'SẮP MỞ BÁN',
      hasLiked: false,
    },
  ],
};
