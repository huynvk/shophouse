import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ShopPage } from 'pages/Shop';

export default {
  title: 'Pages/Shop/ShopPage',
  component: ShopPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <ShopPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  mock: {
    shopDetails: {
      loading: false,
      data: {
        id: 1,
        name: 'Tạp hoá A7',
        address: 'Shophouse 16 Lavita Garden',
        description:
          'Nay mình đã ship Thủ Đức và quận 9 rồi nhé ạ. Cả nhà lên đơn mai mình ship nhé. Menu mình gồm có trà sữa (chai 330ml) và bánh tráng các loại.',
        ship: 'Miễn phí giao hàng cư dân Lavita Garden',
        liked: true,
      },
    },
    shopItems: {
      loading: false,
      data: [
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
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  mock: {
    shopDetails: {
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
    shopDetails: {
      loading: false,
      data: {
        id: 1,
        name: 'Tạp hoá A7',
        address: 'Shophouse 16 Lavita Garden',
        description:
          'Nay mình đã ship Thủ Đức và quận 9 rồi nhé ạ. Cả nhà lên đơn mai mình ship nhé. Menu mình gồm có trà sữa (chai 330ml) và bánh tráng các loại.',
        ship: 'Miễn phí giao hàng cư dân Lavita Garden',
        liked: false,
      },
    },
    shopItems: {
      loading: false,
      data: [],
    },
  },
};
