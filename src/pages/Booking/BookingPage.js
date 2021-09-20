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
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import Icon from 'components/Icons';
import { BackButton } from 'components/Buttons';
import { withTheme } from '@mui/styles';
import { useItemDetails, usePostBooking } from 'hooks/api';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Loadable } from 'components/Progress';
import { FormTextField } from 'components/Form';

const BookingPage = ({ theme, hasAccount, createAccount }) => {
  const { id } = useParams();
  const { data: itemDetails, loading } = useItemDetails(id);
  const {
    mutate: createBooking,
    // loading: creatingBooking // @TODO: handle loading state
  } = usePostBooking();
  const { name, price, currency } = itemDetails || {};

  const { control, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      await createBooking(data);
    } catch (err) {
      console.error(err);
    }
  };

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
            type='submit'
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
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Row>
            <FormTextField
              name='amount'
              label='Số lượng'
              type='number'
              defaultValue={1}
              rules={{ min: 0 }}
              control={control}
              required
              fullWidth
            />
          </Row>
          <Row>
            <FormTextField
              name='address'
              label='Địa chỉ nhận hàng'
              control={control}
              required
              fullWidth
            />
          </Row>
          <Row>
            <FormTextField
              name='recipient'
              label='Tên người nhận'
              control={control}
              required
              fullWidth
            />
          </Row>
          <Row>
            <FormTextField
              name='recipientPhone'
              label='Số điện thoại'
              control={control}
              fullWidth
              required
            />
          </Row>
          <Row>
            <FormTextField
              name='note'
              label='Ghi chú'
              control={control}
              fullWidth
              required
            />
          </Row>
        </PaddedContent>
      </VerticalLayout>
    </form>
  );
};

BookingPage.propTypes = {
  hasAccount: PropTypes.bool,
  createAccount: PropTypes.bool,
  loading: PropTypes.bool,
};

export default withTheme(BookingPage);
