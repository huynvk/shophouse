import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';
import { ShopCard } from 'components/Cards';
import { ExpandedBox } from 'components/Layouts';
import LoadableList from 'components/LoadableList';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
}));

const CardWithMargin = (props) => {
  const classes = useStyles();
  return <ShopCard classes={{ root: classes.root }} {...props} />;
};

const ShopList = (props) => {
  let history = useHistory();
  return (
    <LoadableList
      renderEmptyState={() => (
        <ExpandedBox>
          <Typography align='center'>Chưa có cửa hàng nào đăng ký.</Typography>
          <Typography align='center'>
            Đăng bán ngay để trở thành cửa hàng đầu tiên.
          </Typography>

          <Button variant='contained' color='primary'>
            Đăng bán
          </Button>
        </ExpandedBox>
      )}
      renderList={({ items }) => (
        <>
          {items.map(
            ({ id, name, address, imgUrl, description, liked, menu }) => (
              <CardWithMargin
                key={id}
                id={id}
                name={name}
                imgUrl={imgUrl}
                address={address}
                description={description}
                liked={liked}
                menu={menu}
                onCardAction={() => history.push(`/shop/${id}`)}
              />
            )
          )}
        </>
      )}
      {...props}
    />
  );
};

ShopList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      address: PropTypes.string,
      imgUrl: PropTypes.string,
      description: PropTypes.string,
      liked: PropTypes.bool,
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          price: PropTypes.number,
          name: PropTypes.string,
          currency: PropTypes.string,
        })
      ),
    })
  ),
};

export default ShopList;
