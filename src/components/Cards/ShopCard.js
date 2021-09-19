import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Button, CardActionArea, Grid } from '@mui/material';
import { useShopItems } from 'hooks/api';
import { Loadable } from 'components/Progress';

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
  id,
  name,
  address,
  imgUrl,
  description,
  liked = true,
  menuCount = 0,
  onCardAction,
  ...props
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const { data: menu, loading } = useShopItems(id);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} {...props}>
      <CardActionArea onClick={onCardAction}>
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
            <Loadable size='lg' loading={loading}>
              {menu &&
                menu.map(({ name, price, currency }, index) => (
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
            </Loadable>
          </CardContent>
        </Collapse>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button color='primary' onClick={handleExpandClick}>
          {expanded
            ? 'Thu gọn'
            : `Xem menu (${menu ? menu.length : menuCount})`}
        </Button>
        <IconButton className={classes.like} size='large'>
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
  menuCount: PropTypes.number,
  onCardAction: PropTypes.func,
};

export default ShopCard;
