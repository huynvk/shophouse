import { useGetWithCustomMock, useMutateWithCustomMock } from 'hooks/restful';

export const useShopList = (params) =>
  useGetWithCustomMock('shopList', { path: '/shops', ...params });

export const useShopDetails = (shopId, params) =>
  useGetWithCustomMock('shopDetails', { path: `/shops/${shopId}` });

export const useShopItems = (shopId, params) =>
  useGetWithCustomMock('shopItems', { path: `/products/?shop=${shopId}` });

export const useItemList = (params) =>
  useGetWithCustomMock('itemList', { path: `/products` });

export const useItemDetails = (itemId, params) =>
  useGetWithCustomMock('itemDetails', { path: `/products/${itemId}` });

export const useUser = (userId, params) =>
  useGetWithCustomMock('user', { path: `/users/${userId}` });

export const usePostBooking = () =>
  useMutateWithCustomMock('postBooking', {
    verb: 'POST',
    path: '/bookings',
  });
