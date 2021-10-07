export const localizeNumber = (num) => {
  if (isNaN(num)) return num;

  return num.toLocaleString('vi-VN');
};

export const localizeProductStatus = (status) => {
  const map = {
    AVAILABLE: 'Đang bán',
    'PRE-ORDER': 'Đặt trước',
    UNAVAILABLE: 'Ngưng nhận đơn',
  };
  return map[status] || status;
};
