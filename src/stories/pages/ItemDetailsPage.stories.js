import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemDetailsPage } from 'pages/ItemDetails';

export default {
  title: 'Pages/ItemDetailsPage',
  component: ItemDetailsPage,
};

const Template = ({ mock, ...props }) => (
  <StoryContainer width='sm' height='800px' mock={mock}>
    <ItemDetailsPage {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  mock: {
    itemDetails: {
      loading: false,
      data: {
        name: 'Chả giò',
        imgUrl:
          'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
        status: 'SẮP MỞ BÁN',
        statusDetails: 'Mở bán lúc 11h thứ bảy 05/09/2021',
        price: 100000,
        currency: 'VNĐ',
        hasLiked: true,
        likeCount: 12,
        description:
          'CHẢ GIÒ CUỐN bánh tráng xốp giòn. Nguyên liệu sạch lựa chọn kĩ lưỡng. Em tính qua tuần mới cuốn nhưng có vài chị đặt nên e nhận thêm 7 phần nữa ạ.',
      },
    },
    shopDetails: {
      loading: false,
      data: {
        ship: 'Miễn phí giao hàng cho cư dân Lavita Garden',
        name: 'Shophouse TM 16',
        address: 'Block A, Chung cư Lavita Garden',
      },
    },
  },
};

export const LoadingItems = Template.bind({});
LoadingItems.args = {
  mock: {
    itemDetails: {
      loading: true,
    },
  },
};

export const LoadingShop = Template.bind({});
LoadingShop.args = {
  mock: {
    itemDetails: {
      loading: false,
      data: {
        name: 'Chả giò',
        imgUrl:
          'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
        status: 'SẮP MỞ BÁN',
        statusDetails: 'Mở bán lúc 11h thứ bảy 05/09/2021',
        price: 100000,
        currency: 'VNĐ',
        hasLiked: true,
        likeCount: 12,
        description:
          'CHẢ GIÒ CUỐN bánh tráng xốp giòn. Nguyên liệu sạch lựa chọn kĩ lưỡng. Em tính qua tuần mới cuốn nhưng có vài chị đặt nên e nhận thêm 7 phần nữa ạ.',
      },
    },
    shopDetails: {
      loading: true,
    },
  },
};
