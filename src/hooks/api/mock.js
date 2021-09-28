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
      id: 1,
      name: 'Chả giò',
      imgUrl:
        'https://giaoducnamchau.edu.vn/wp-content/uploads/2021/05/well-foods-microbiome-superJumbo.jpg',
      status: 'Cho đặt trước',
      sellCondition: 'Mở bán khi tổng đơn trên 3 triệu',
      statusDetails: 'Mở bán lúc 11h thứ bảy 05/09/2021',
      menu: [
        {
          name: 'Chả giò',
          price: 100000,
          currency: 'VNĐ',
          unit: 'Hộp 20 cuốn',
        },
        {
          name: 'Chả giò',
          price: 100000,
          currency: 'VNĐ',
          unit: 'Hộp 20 cuốn',
        },
        {
          name: 'Chả giò',
          price: 100000,
          currency: 'VNĐ',
          unit: 'Hộp 20 cuốn',
        },
      ],
      externalLink: {
        link: 'https://huynvk.dev',
        title: 'Chợ Online Lavita Garden',
        description: 'Facebook Page',
      },
      promotions: [
        'Giảm 50.000 VNĐ cho hoá đơn trên 500.000 VNĐ',
        'Miễn phí ship cho cư dân Lavita Garden',
        'Miễn phí ship trong vòng 5km cho hoá đơn trên 300.000 VNĐ',
      ],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut nisi ut nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  },
  user: {
    loading: false,
    data: {
      id: 1,
      name: 'Phạm Anh Đào',
      address:
        'Khu A, chung cư Lavita Garden, đường số 3, Trường Thọ, Thủ Đức, TP HCM',
      phone: '0389930747',
      zalo: '0389930747',
      messenger: 'anhdaopta',
      website: 'https://huynvk.dev',
    },
  },
};

export default mocks;
