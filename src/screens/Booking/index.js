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
} from '@material-ui/core';
import Icon from 'components/Icons';
import { BackButton } from 'components/Buttons';
import { withMuiTheme } from 'hoc';

const Booking = ({
  theme,
  name,
  price,
  unit,
  recipientAddress,
  amount,
  recipient,
  recipientPhone,
  note,
  hasAccount,
  createAccount,
}) => {
  return (
    <VerticalLayout
      header={
        <Box bgcolor='primary.main'>
          <Toolbar color='white'>
            <IconButton
              edge='false'
              aria-label='back'
              style={{ marginLeft: theme.spacing(-2) }}
            >
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
              <Button variant='outlined' color='primary' fullWidth>
                Huỷ
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant='contained' color='primary' fullWidth>
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
          <Typography color='textSecondary'>{`${price} ${unit}`}</Typography>
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

Booking.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  unit: PropTypes.string,
  recipientAddress: PropTypes.string,
  amount: PropTypes.number,
  recipient: PropTypes.string,
  recipientPhone: PropTypes.string,
  note: PropTypes.string,
  hasAccount: PropTypes.bool,
  createAccount: PropTypes.bool,
};

export default withMuiTheme(Booking);
