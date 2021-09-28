import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemCard } from 'components/Cards';

export default {
  title: 'Components/Cards/ItemCard',
  component: ItemCard,
};

const Template = ({ ...props }) => (
  <StoryContainer width={'sm'} height='800px'>
    <ItemCard {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Chả giò',
  imgUrl:
    'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
  price: 100000,
  currency: 'VNĐ',
  sellerName: 'Pham Anh Dao',
  address: 'Chung cư Lavita Garden, Trường Thọ, Thủ Đức, TP HCM',
};
