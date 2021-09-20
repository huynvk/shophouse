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
import { useItemDetails } from 'hooks/api';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import { Loadable } from 'components/Progress';

const BookingPage = ({ theme, hasAccount, createAccount }) => {
  const { id } = useParams();
  const { data: itemDetails, loading } = useItemDetails(id);
  const { name, price, currency } = itemDetails || {};
  const {
    amount,
    recipientAddress,
    recipient,
    recipientPhone,
    note,
  } = useState({
    amount: 0,
    recipientAddress: '',
    recipient: '',
    recipientPhone: '',
    note: '',
  });

  const renderFooter = () => (
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
  );

  const renderHeader = () => (
    <Box bgcolor='primary.main'>
      <Toolbar>
        <IconButton edge='start' aria-label='back' size='large'>
          <BackButton light />
        </IconButton>
        <Typography variant='h2' color='white'>
          Đặt hàng
        </Typography>
      </Toolbar>
    </Box>
  );

  return (
    <VerticalLayout header={renderHeader()} footer={renderFooter()}>
      <PaddedContent>
        <Row>
          <Loadable size='lg' loading={loading}>
            <Typography variant='h1'>{name}</Typography>
          </Loadable>
        </Row>
        <Row>
          <Icon icon='Price' size='lg' />
          <HorizontalSpacer />
          <Loadable size='md' loading={loading}>
            <Typography color='textSecondary'>{`${price} ${currency}`}</Typography>
          </Loadable>
        </Row>
        <form noValidate autoComplete='off'>
          <Row>
            <FormControl fullWidth>
              <TextField
                required
                id='amount'
                label='Số lượng'
                value={amount}
                variant='standard'
              />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField
                required
                id='address'
                label='Địa chỉ nhận hàng'
                value={recipientAddress}
                variant='standard'
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
                variant='standard'
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
                variant='standard'
              />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth>
              <TextField
                id='note'
                label='Ghi chú'
                value={note}
                multiline
                variant='standard'
              />
            </FormControl>
          </Row>
        </form>
      </PaddedContent>
    </VerticalLayout>
  );
};

BookingPage.propTypes = {
  hasAccount: PropTypes.bool,
  createAccount: PropTypes.bool,
  loading: PropTypes.bool,
};

export default withTheme(BookingPage);
