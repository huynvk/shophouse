import { BookingPage } from 'pages/Booking';
import ItemDetails from 'pages/ItemDetails';
import { ItemListingPage } from 'pages/ItemListing';

const routes = {
  market: {
    location: '/',
    component: ItemListingPage,
  },
  itemDetail: {
    location: '/item/:id',
    component: ItemDetails,
  },
  booking: {
    location: '/item/:id/booking',
    component: BookingPage,
  },
};

export default routes;
