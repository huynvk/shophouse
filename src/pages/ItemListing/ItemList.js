import ListingCard from 'components/ListingCard';
import { Box, Button, makeStyles, Typography } from '@material-ui/core';

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

const ItemList = ({ items }) => {
  const renderItemList = (items) => {
    if (items === undefined || items.length === 0) {
      return (
        <Box
          display='flex'
          flex={1}
          justifyContent='center'
          alignItems='center'
          margin='center'
          flexDirection='column'
          style={{ with: '100%', height: '100%' }}
        >
          <Typography align='center'>Chưa có mặt hàng nào đăng bán.</Typography>
          <Typography align='center'>
            Đăng bán ngay để trở thành người đầu tiên.
          </Typography>

          <Button variant='contained' color='primary'>
            Đăng bán
          </Button>
        </Box>
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
