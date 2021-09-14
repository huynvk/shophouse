import { AccountPage } from 'pages/Account';
import { ActivitiesPage } from 'pages/Activites';
import { BookingPage } from 'pages/Booking';
import { ItemDetailsPage } from 'pages/ItemDetails';
import { ItemListingPage } from 'pages/ItemListing';
import { StorePage } from 'pages/Store';

const routes = {
  market: {
    location: '/',
    component: ItemListingPage,
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
