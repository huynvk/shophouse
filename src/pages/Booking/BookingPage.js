import { useEffect, useState } from 'react';
import { BookingScreen } from '.';

const mockItemData = {
  name: 'Chả giò',
  price: 100000,
  currency: 'VNĐ',
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

const BookingPage = (props) => {
  const [item, loadingItem] = useItemData();

  const { name, price, currency } = item;
  return (
    <BookingScreen
      name={name}
      price={price}
      currency={currency}
      loading={loadingItem}
      hasAccount={false}
    />
  );
};

export default BookingPage;
