import React from 'react';
import StoryContainer from 'stories/Helpers/StoryContainer';
import { ItemDetailsScreen } from 'pages/ItemDetails';

export default {
  title: 'Pages/ItemDetailsScreen',
  component: ItemDetailsScreen,
};

const Template = (props) => (
  <StoryContainer width='sm' height='800px'>
    <ItemDetailsScreen {...props} />
  </StoryContainer>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Chả giò',
  imgUrl:
    'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
  status: 'SẮP MỞ BÁN',
  statusDetails: 'Mở bán lúc 11h thứ bảy 05/09/2021',
  price: 100000,
  currency: 'VNĐ',
  ship: 'Miễn phí giao hàng cho cư dân Lavita Garden',
  shopName: 'Shophouse TM 16',
  shopAddress: 'Block A, Chung cư Lavita Garden',
  likeCount: 12,
  description:
    'CHẢ GIÒ CUỐN bánh tráng xốp giòn. Nguyên liệu sạch lựa chọn kĩ lưỡng. Em tính qua tuần mới cuốn nhưng có vài chị đặt nên e nhận thêm 7 phần nữa ạ.',
};
