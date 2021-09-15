import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ShopList } from 'pages/Market';

export default {
  title: 'Pages/Market/ShopList',
  component: ShopList,
};

const Template = (props) => (
  <StoryContainer width='sm' height='800px'>
    <ShopList {...props} />
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
    },
    {
      id: 2,
      name: 'Tạp hoá B1',
      address: 'Block B, chung cư Lavita Garden',
      imgUrl:
        'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
      description:
        'Nay mình đã ship Thủ Đức và quận 9 rồi nhé ạ. Cả nhà lên đơn mai mình ship nhé. Menu mình gồm có trà sữa (chai 330ml) và bánh tráng các loại.',
      liked: false,
      menu: [
        { name: 'Trà sữa', price: 30000, currency: 'VNĐ' },
        { name: 'Bánh tráng nướng', price: 30000, currency: 'VNĐ' },
        { name: 'Chả giò', price: 30000, currency: 'VNĐ' },
      ],
    },
  ],
};
