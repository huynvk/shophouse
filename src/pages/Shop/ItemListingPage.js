import { useEffect, useState } from 'react';
import { ItemListingScreen } from '.';

const mockItemList = [
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
];

const useMarketItemList = () => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadMarketItemList = () => {
    setLoading(true);
    setTimeout(() => {
      setItemList(mockItemList);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    loadMarketItemList();
  }, []);

  return [itemList, loading, loadMarketItemList];
};

const ItemListingPage = () => {
  const [items, loadingItems] = useMarketItemList();
  return <ItemListingScreen items={items} loading={loadingItems} />;
};

export default ItemListingPage;
