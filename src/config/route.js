import { AccountPage } from 'pages/Account';
import { ActivitiesPage } from 'pages/Activites';
import { BookingPage } from 'pages/Booking';
import { ItemDetailsPage } from 'pages/ItemDetails';
import { MarketPage } from 'pages/Market';
import { ShopPage } from 'pages/Shop';
import { StorePage } from 'pages/Store';

const routes = {
  market: {
    location: '/',
    component: MarketPage,
  },
  shop: {
    location: '/shop/:id',
    component: ShopPage,
  },
  itemDetail: {
    location: '/item/:id',
    component: ItemDetailsPage,
  },
  booking: {
    location: '/item/:id/booking',
    component: BookingPage,
  },
  activities: {
    location: '/activities',
    component: ActivitiesPage,
  },
  store: {
    location: '/store',
    component: StorePage,
  },
  account: {
    location: '/account',
    component: AccountPage,
  },
};

export default routes;
