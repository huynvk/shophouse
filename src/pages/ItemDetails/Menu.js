import { Typography, List, ListItem, ListItemText, Card } from '@mui/material';
import { localizeNumber } from 'common/transform';
import { WhiteCardContent } from 'components/Cards';

const Menu = ({ prices }) => (
  <Card>
    <WhiteCardContent>
      <Typography variant='h6'>Bảng giá</Typography>
      <List>
        {prices.map(({ price, unit, currency }, i) => (
          <ListItem key={i}>
            <ListItemText>{unit}</ListItemText>
            <ListItemText align='right'>{`${localizeNumber(
              price
            )} ${currency}`}</ListItemText>
          </ListItem>
        ))}
      </List>
    </WhiteCardContent>
  </Card>
);

export default Menu;
