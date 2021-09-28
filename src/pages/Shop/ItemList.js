import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import { ItemCard } from 'components/Cards';
import { ExpandedBox, VerticalSpacer } from 'components/Layouts';
import LoadableList from 'components/LoadableList';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const CardWithMargin = (props) => {
  const classes = useStyles();
  return <ItemCard classes={{ root: classes.root }} {...props} />;
};

const ItemList = (props) => {
  const history = useHistory();
  return (
    <LoadableList
      renderEmptyState={() => (
        <ExpandedBox>
          <Typography align='center'>Chưa có mặt hàng nào đăng bán.</Typography>
          <Typography align='center'>
            Đăng bán ngay để trở thành người đầu tiên.
          </Typography>

          <Button variant='contained' color='primary'>
            Đăng bán
          </Button>
        </ExpandedBox>
      )}
      renderList={({ items }) => (
        <>
          {items.map(
            ({ id, name, imgUrl, sellerName, price, currency, address }) => (
              <>
                <CardWithMargin
                  key={id}
                  name={name}
                  imgUrl={imgUrl}
                  price={price}
                  currency={currency}
                  sellerName={sellerName}
                  address={address}
                  onCardAction={() => history.push(`/item/${id}`)}
                />
                <VerticalSpacer />
              </>
            )
          )}
        </>
      )}
      {...props}
    />
  );
};

ItemList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      imgUrl: PropTypes.string,
      price: PropTypes.number,
      currency: PropTypes.string,
      status: PropTypes.string,
      hasLiked: PropTypes.bool,
      ship: PropTypes.string,
    })
  ),
};

export default ItemList;
