import { BookingPage } from 'pages/Booking';
import { ItemDetailsPage } from 'pages/ItemDetails';
import { ItemListingPage } from 'pages/ItemListing';

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
};

export default routes;
