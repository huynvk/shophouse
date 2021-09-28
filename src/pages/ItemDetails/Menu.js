import { Typography, List, ListItem, ListItemText, Card } from '@mui/material';
import { WhiteCardContent } from 'components/Cards';

const Menu = ({ menu }) => (
  <Card>
    <WhiteCardContent>
      <Typography variant='h6'>Bảng giá</Typography>
      <List>
        {menu.map(({ name: menuItemName, price, unit, currency }, i) => (
          <ListItem key={i}>
            <ListItemText>{menuItemName}</ListItemText>
            <ListItemText align='right'>
              {unit ? `${price} ${currency} / ${unit}` : `${price} ${currency}`}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </WhiteCardContent>
  </Card>
);

export default Menu;
