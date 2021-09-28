import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const Menu = ({ menu }) => (
  <Card>
    <CardContent sx={{ background: 'white' }}>
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
    </CardContent>
  </Card>
);

export default Menu;
