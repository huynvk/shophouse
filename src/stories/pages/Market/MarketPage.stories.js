import { MarketPage } from 'pages/Market';
import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';

export default {
  title: 'Pages/Market/MarketPage',
  component: MarketPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <MarketPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  mock: {
    shopList: {
      loading: false,
      data: [
        {
          id: 1,
          name: 'Tạp hoá A7',
          address: 'Block A, chung cư Lavita Garden',
          imgUrl:
            'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
          description:
            'Nay mình đã ship Thủ Đức và quận 9 rồi nhé ạ. Cả nhà lên đơn mai mình ship nhé. Menu mình gồm có trà sữa (chai 330ml) và bánh tráng các loại.',
          liked: true,
          menuCount: 6,
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
          menuCount: 6,
        },
      ],
    },
    shopItems: {
      loading: false,
      data: [
        { name: 'Trà sữa', price: 30000, currency: 'VNĐ' },
        { name: 'Bánh tráng nướng', price: 30000, currency: 'VNĐ' },
        { name: 'Chả giò', price: 30000, currency: 'VNĐ' },
        { name: 'Bánh cam', price: 30000, currency: 'VNĐ' },
        { name: 'Bún bò', price: 30000, currency: 'VNĐ' },
        { name: 'Hủ tiếu', price: 30000, currency: 'VNĐ' },
      ],
    },
  },
};

export const LoadingMenu = Template.bind({});
LoadingMenu.args = {
  mock: {
    shopList: {
      loading: false,
      data: [
        {
          id: 1,
          name: 'Tạp hoá A7',
          address: 'Block A, chung cư Lavita Garden',
          imgUrl:
            'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
          description:
            'Nay mình đã ship Thủ Đức và quận 9 rồi nhé ạ. Cả nhà lên đơn mai mình ship nhé. Menu mình gồm có trà sữa (chai 330ml) và bánh tráng các loại.',
          liked: true,
          menuCount: 6,
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
          menuCount: 6,
        },
      ],
    },
    shopItems: {
      loading: true,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  mock: {
    shopList: {
      loading: true,
    },
    shopItems: {
      loading: true,
    },
  },
};

export const EmptyScreen = Template.bind({});
EmptyScreen.args = {
  mock: {
    shopList: {
      data: [],
      loading: false,
    },
  },
};
