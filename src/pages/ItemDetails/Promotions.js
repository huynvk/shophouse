import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Promotions = ({ promotions }) => (
  <Card>
    <CardContent sx={{ background: 'white' }}>
      <Typography variant='h6'>Ưu đãi</Typography>
      {promotions && promotions.length > 0 ? (
        <List>
          {promotions.map((promotion, i) => (
            <ListItem key={i}>
              <ListItemText>{promotion}</ListItemText>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography color='GrayText'>
          Tạm thời đã hết ưu đãi cho sản phẩm này
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default Promotions;
