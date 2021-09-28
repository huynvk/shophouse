import { Typography, Grid, Button, Link } from '@mui/material';
import { Footer, Row } from 'components/Layouts';
import { useHistory } from 'react-router-dom';

const ItemFooter = ({ itemId }) => {
  const history = useHistory();
  return (
    <Footer>
      <Row>
        <Typography color='GrayText'>
          Gợi ý: Bạn có thể mua theo nhóm để nhận được nhiều ưu đãi hơn.{' '}
          <Link
            underline='always'
            color='primary'
            onClick={() => console.log('Hint: not implemented')}
            sx={{ cursor: 'pointer' }}
          >
            Tìm hiểu thêm
          </Link>
        </Typography>
      </Row>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Button
            variant='outlined'
            fullWidth
            color='primary'
            onClick={() => history.push(`/item/${itemId}/booking`)}
          >
            Mua theo nhóm
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={() => history.push(`/item/${itemId}/booking`)}
          >
            Mua ngay
          </Button>
        </Grid>
      </Grid>
    </Footer>
  );
};

export default ItemFooter;
