import ListingCard from 'components/ListingCard';
import { Button, makeStyles, Typography } from '@material-ui/core';

const {
  VerticalLayout,
  PaddedContent,
  ExpandedBox,
} = require('components/Layouts');

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const CardWithMargin = (props) => {
  const classes = useStyles();
  return <ListingCard classes={{ root: classes.root }} {...props} />;
};

const ItemList = ({ loading, items }) => {
  const renderItemList = (items) => {
    if (loading) {
      return (
        <ExpandedBox>
          <Typography align='center'>Đang tải...</Typography>
        </ExpandedBox>
      );
    }

    if (items === undefined || items.length === 0) {
      return (
        <ExpandedBox>
          <Typography align='center'>Chưa có mặt hàng nào đăng bán.</Typography>
          <Typography align='center'>
            Đăng bán ngay để trở thành người đầu tiên.
          </Typography>

          <Button variant='contained' color='primary'>
            Đăng bán
          </Button>
        </ExpandedBox>
      );
    }

    return (
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
    );
  };

  return <VerticalLayout>{renderItemList(items)}</VerticalLayout>;
};

export default ItemList;
