import { Button, Grid } from '@mui/material';
import Icon from 'components/Icons';

const ContactPad = ({ phone, zalo, messenger, website }) => {
  if (!phone && !zalo && !messenger && !website) {
    return <></>;
  }

  return (
    <Grid container display='flex'>
      <Button
        sx={{ flex: 1 }}
        component='a'
        href={`https://zalo.me/${zalo}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon icon='Zalo' size='lg' />
      </Button>
      <Button
        sx={{ flex: 1 }}
        component='a'
        href={`https://m.me/${messenger}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon icon='Messenger' size='lg' />
      </Button>
      <Button
        sx={{ flex: 1 }}
        component='a'
        href={website}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon icon='Website' size='lg' />
      </Button>
      <Button sx={{ flex: 1 }}>
        <Icon
          icon='Phone'
          size='lg'
          component='a'
          href={`tel://${phone}`}
          target='_blank'
          rel='noopener noreferrer'
        />
      </Button>
    </Grid>
  );
};

export default ContactPad;
