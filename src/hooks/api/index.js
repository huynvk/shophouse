const { useGetWithCustomMock } = require('hooks/restful');

export const useShopList = (params) =>
  useGetWithCustomMock('shopList', { path: '/shops', ...params });

export const useShopDetails = (shopId, params) =>
  useGetWithCustomMock('shopDetails', { path: `/shops/${shopId}` });

export const useShopItems = (shopId, params) =>
  useGetWithCustomMock('shopItems', { path: `/items/?shop=${shopId}` });

export const useItemDetails = (itemId, params) =>
  useGetWithCustomMock('itemDetails', { path: `/items/${itemId}` });
