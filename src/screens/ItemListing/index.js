import ListingCard from 'components/ListingCard';
import { makeStyles } from '@material-ui/core';

const { VerticalLayout, PaddedContent } = require('components/Layouts');

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const CardWithMargin = (props) => {
  const classes = useStyles();
  return <ListingCard classes={{ root: classes.root }} {...props} />;
};

const ItemListing = ({ items }) => (
  <VerticalLayout>
    <PaddedContent>
      {items.map(
        ({ id, name, imgUrl, price, currency, status, hasLiked, ship }) => (
          <CardWithMargin
            key={id}
            name={name}
            imgUrl={imgUrl}
            price={price}
            currency={currency}
            status={status}
            hasLiked={hasLiked}
            ship={ship}
          />
        )
      )}
    </PaddedContent>
  </VerticalLayout>
);

export default ItemListing;
