import { useEffect, useState } from 'react';
import { ItemDetailsScreen } from '.';

const mockItemData = {
  name: 'Chả giò',
  imgUrl:
    'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/240100151_4598293746881941_7751986560763473968_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=b9115d&_nc_ohc=Kf3H7qYm50kAX-qEqqs&_nc_ht=scontent.fsgn2-2.fna&oh=abf5f4d5cc6b3e786ec475af1081b991&oe=6140EEE9',
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

const useItemData = (props) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);

  const loadItemDetails = () => {
    setLoading(true);
    setTimeout(() => {
      setItem(mockItemData);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadItemDetails();
  }, []);

  return [item, loading, loadItemDetails];
};

const ItemDetailsPage = () => {
  const [item] = useItemData();

  const {
    name,
    imgUrl,
    status,
    statusDetails,
    price,
    currency,
    ship,
    shopName,
    shopAddress,
    likeCount,
    description,
  } = item;
  return (
    <ItemDetailsScreen
      name={name}
      imgUrl={imgUrl}
      status={status}
      statusDetails={statusDetails}
      price={price}
      currency={currency}
      ship={ship}
      shopName={shopName}
      shopAddress={shopAddress}
      likeCount={likeCount}
      description={description}
    />
  );
};

export default ItemDetailsPage;
