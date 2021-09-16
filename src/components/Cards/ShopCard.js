import PropTypes from 'prop-types';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Box, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  like: {
    marginLeft: 'auto',
  },
}));

const ShopCard = ({
  name,
  address,
  imgUrl,
  description,
  liked = true,
  menu = [],
  menuCount = 0,
  ...props
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} {...props}>
      <CardHeader title={name} subheader={address} />
      <CardMedia className={classes.media} image={imgUrl} title={name} />
      <CardContent>
        <Typography color='textSecondary' component='p'>
          {description}
        </Typography>
      </CardContent>
      <Collapse in={!expanded} timeout='auto' unmountOnExit>
        <Box height='1px' bgcolor='grey.300' />
      </Collapse>

      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          {menu.map(({ name, price, currency }, index) => (
            <Grid
              key={index}
              container
              justifyContent='space-between'
              spacing={1}
            >
              <Grid item>
                <Typography>{name}</Typography>
              </Grid>
              <Grid item>
                <Typography>{`${price} ${currency}`}</Typography>
              </Grid>
            </Grid>
          ))}
        </CardContent>
      </Collapse>
      <CardActions disableSpacing>
        <Button color='primary' onClick={handleExpandClick}>
          {expanded ? 'Thu gọn' : `Xem menu (${menu.length || menuCount})`}
        </Button>
        <IconButton className={classes.like}>
          <FavoriteIcon color={liked ? 'primary' : 'action'} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

ShopCard.propTypes = {
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
  menuCount: PropTypes.number,
};

export default ShopCard;
