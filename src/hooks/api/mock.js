const mocks = {
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
};

export default mocks;
