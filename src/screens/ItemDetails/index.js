import PropTypes from 'prop-types';
import {
  VerticalLayout,
  PaddedContent,
  Row,
  HorizontalSpacer,
  Divider,
  Footer,
} from 'components/Layouts';
import ImageBox from './ImageBox';
import { Box, Button, Typography } from '@material-ui/core';
import Icon from 'components/Icons';

const ItemDetails = ({
  name,
  imgUrl,
  status,
  statusDetails,
  price,
  unit,
  ship,
  shopName,
  shopAddress,
  likeCount,
  description,
}) => {
  return (
    <VerticalLayout
      footer={
        <Footer>
          <Button variant='contained' color='primary'>
            Đặt trước
          </Button>
        </Footer>
      }
    >
      <ImageBox imgUrl={imgUrl} name={name} />
      <PaddedContent>
        <Row>
          <Typography color='primary' variant='h6'>
            {status}
          </Typography>
          <HorizontalSpacer size={0.5} />
          <Icon icon='Info' />
        </Row>
        <Row mt={-1} mb={1.5}>
          <Typography color='textSecondary'>{statusDetails}</Typography>
        </Row>
        <Divider />
        <Row>
          <Icon icon='Price' size='lg' />
          <HorizontalSpacer />
          <Typography>{`${price} ${unit}`}</Typography>
        </Row>
        <Row>
          <Icon icon='Ship' size='lg' />
          <HorizontalSpacer />
          <Typography>{ship}</Typography>
        </Row>
        <Row>
          <Icon icon='Location' size='lg' />
          <HorizontalSpacer />
          <Box>
            <Typography color='primary'>{shopName}</Typography>
            <Typography color='textSecondary'>{shopAddress}</Typography>
          </Box>
        </Row>
        <Row>
          <Icon icon='Heart' size='lg' />
          <HorizontalSpacer />
          <Typography>{likeCount} người thích</Typography>
        </Row>
        <Divider />
        <Row>
          <Typography>{description}</Typography>
        </Row>
      </PaddedContent>
    </VerticalLayout>
  );
};

ItemDetails.propTypes = {
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  status: PropTypes.string,
  statusDetails: PropTypes.string,
  price: PropTypes.number,
  unit: PropTypes.string,
  ship: PropTypes.string,
  shopName: PropTypes.string,
  shopAddress: PropTypes.string,
  likeCount: PropTypes.number,
  description: PropTypes.string,
};

export default ItemDetails;
