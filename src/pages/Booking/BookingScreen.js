import PropTypes from 'prop-types';
import {
  VerticalLayout,
  PaddedContent,
  Row,
  HorizontalSpacer,
  Footer,
} from 'components/Layouts';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import Icon from 'components/Icons';
import { BackButton } from 'components/Buttons';
import { withTheme } from '@mui/styles';

const BookingScreen = ({
  theme,
  name,
  price,
  currency,
  recipientAddress,
  amount,
  recipient,
  recipientPhone,
  note,
  hasAccount,
  createAccount,
  loading,
}) => {
  return (
    <VerticalLayout
      header={
        <Box bgcolor='primary.main'>
          <Toolbar>
            <IconButton edge='start' aria-label='back' size='large'>
              <BackButton light />
            </IconButton>
            <Typography
              variant='h2'
              style={{ color: theme.palette.common.white }}
            >
              Đặt hàng
            </Typography>
          </Toolbar>
        </Box>
      }
      footer={
        <Footer>
          {!hasAccount && (
            <Row ml={-0.5}>
              <Checkbox checked={createAccount} />
              <Typography>
                Tạo tài khoản cho tôi để không cần phải nhập lại lần nữa
              </Typography>
            </Row>
          )}
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Button
                variant='outlined'
                color='primary'
                fullWidth
                disabled={loading}
              >
                Huỷ
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                disabled={loading}
              >
                Đặt trước
              </Button>
            </Grid>
          </Grid>
        </Footer>
      }
    >
      <PaddedContent>
        <Row>
          <Typography variant='h1'>{name}</Typography>
        </Row>
        <Row>
          <Icon icon='Price' size='lg' />
          <HorizontalSpacer />
          <Typography color='textSecondary'>{`${price} ${currency}`}</Typography>
        </Row>
        <form noValidate autoComplete='off'>
          <Row>
            <FormControl fullWidth>
              <TextField required id='amount' label='Số lượng' value={amount} />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField
                required
                id='address'
                label='Địa chỉ nhận hàng'
                value={recipientAddress}
              />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField
                required
                id='recipient'
                label='Tên người nhận'
                value={recipient}
              />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField
                required
                id='recipientPhone'
                label='Số điện thoại'
                value={recipientPhone}
              />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField id='note' label='Ghi chú' value={note} multiline />
            </FormControl>
          </Row>
        </form>
      </PaddedContent>
    </VerticalLayout>
  );
};

BookingScreen.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  recipientAddress: PropTypes.string,
  amount: PropTypes.number,
  recipient: PropTypes.string,
  recipientPhone: PropTypes.string,
  note: PropTypes.string,
  hasAccount: PropTypes.bool,
  createAccount: PropTypes.bool,
  loading: PropTypes.bool,
};

export default withTheme(BookingScreen);
