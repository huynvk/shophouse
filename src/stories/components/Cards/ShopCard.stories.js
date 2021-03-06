import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ShopCard } from 'components/Cards';

export default {
  title: 'Components/Cards/ShopCard',
  component: ShopCard,
};

const Template = ({ ...props }) => (
  <StoryContainer width={'sm'} height='800px'>
    <ShopCard {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Tạp hoá A7',
  address: 'Block A, chung cư Lavita Garden',
  imgUrl:
    'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
  description:
    'Nay mình đã ship Thủ Đức và quận 9 rồi nhé ạ. Cả nhà lên đơn mai mình ship nhé. Menu mình gồm có trà sữa (chai 330ml) và bánh tráng các loại.',
  liked: true,
  menu: [
    { name: 'Trà sữa', price: 30000, currency: 'VNĐ' },
    { name: 'Bánh tráng nướng', price: 30000, currency: 'VNĐ' },
    { name: 'Chả giò', price: 30000, currency: 'VNĐ' },
    { name: 'Bánh cam', price: 30000, currency: 'VNĐ' },
    { name: 'Bún bò', price: 30000, currency: 'VNĐ' },
    { name: 'Hủ tiếu', price: 30000, currency: 'VNĐ' },
  ],
  menuCount: 6,
};
