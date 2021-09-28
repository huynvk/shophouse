import { Card, Typography, List, ListItem, ListItemText } from '@mui/material';
import { WhiteCardContent } from 'components/Cards';

const Promotions = ({ promotions }) => (
  <Card>
    <WhiteCardContent>
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
    </WhiteCardContent>
  </Card>
);

export default Promotions;
