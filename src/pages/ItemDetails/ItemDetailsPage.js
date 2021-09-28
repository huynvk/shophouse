import {
  VerticalLayout,
  Row,
  HorizontalSpacer,
  Footer,
  VerticalSpacer,
  PaddedContent,
} from 'components/Layouts';
import {
  Button,
  CardMedia,
  Chip,
  Typography,
  Link,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';
import Icon from 'components/Icons';
import { useItemDetails, useUser } from 'hooks/api';
import { useParams } from 'react-router-dom';
import { Loadable } from 'components/Progress';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/system';
import { useState } from 'react';

const ItemFooter = ({ itemId }) => {
  const history = useHistory();
  return (
    <Footer>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push(`/item/${itemId}/booking`)}
      >
        Đặt trước
      </Button>
    </Footer>
  );
};

const InfoRow = ({ icon, children, loading }) => {
  return (
    <Row mb={0.5}>
      <Icon icon={icon} size='lg' />
      <HorizontalSpacer />
      <Loadable loading={loading}>
        {typeof children === 'string' ? (
          <Typography>{children}</Typography>
        ) : (
          children || <div />
        )}
      </Loadable>
    </Row>
  );
};

const ExternalLink = ({ link, title, description }) => {
  return (
    <Box
      sx={{ bgcolor: 'grey.300', p: 0.5, pl: 1, pr: 1, mb: 1 }}
      onClick={() => window.open(link, '_blank')}
    >
      <Typography>{title || link}</Typography>
      {description && <Typography color='GrayText'>{description}</Typography>}
    </Box>
  );
};

const Description = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  if (!description) {
    return <div />;
  }

  const canExpand = description.length > 300;
  const truncatedValue = description.slice(0, 200) + '...';

  return (
    <Typography color='GrayText'>
      {canExpand && !expanded ? truncatedValue : description}{' '}
      {canExpand && (
        <Link
          underline='always'
          color='primary'
          onClick={() => setExpanded(!expanded)}
          sx={{ cursor: 'pointer' }}
        >
          {expanded ? 'Thu gọn' : 'Xem thêm'}
        </Link>
      )}
    </Typography>
  );
};

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

const ItemDetailsPage = () => {
  const { id: itemId } = useParams();
  const { data: itemDetails, loading: loadingItem } = useItemDetails(itemId);
  const {
    name,
    status,
    description,
    imgUrl,
    sellCondition,
    menu,
    externalLink,
    promotions,
    sellerId,
  } = itemDetails || {};

  const { data: seller, loading: loadingSeller } = useUser(sellerId, {
    lazy: loadingItem,
  });

  const { name: sellerName, address, phone, zalo, messenger, website } =
    seller || {};

  const price =
    menu && menu.length === 1
      ? `${menu[0].price} ${menu[0].currency}`
      : undefined;

  return (
    <VerticalLayout bg='primary' footer={<ItemFooter itemId={itemId} />}>
      <Box sx={{ background: '#fff', p: 1 }}>
        <CardMedia
          image={imgUrl}
          title={name}
          sx={{
            width: '100px',
            height: '100px',
            float: 'right',
            ml: 1,
            mb: 1,
          }}
        />
        <Loadable size='md' loading={loadingItem}>
          <Typography variant='h6' component='h1'>
            {name}
          </Typography>
        </Loadable>
        <Row mb={0.5}>
          <Loadable size='md' loading={loadingItem || loadingSeller}>
            <Typography variant='subtitle2' color='GrayText'>
              {sellerName}
            </Typography>
            <HorizontalSpacer size={0.5} />
            <Chip label={status} size='small' />
          </Loadable>
        </Row>
        <InfoRow icon='Calendar' loading={loadingItem}>
          <Typography color='primary'>{sellCondition}</Typography>
        </InfoRow>
        {price && <InfoRow icon='Price'>{price}</InfoRow>}
        <InfoRow icon='Location' loading={loadingItem || loadingSeller}>
          {address}
        </InfoRow>
        <VerticalSpacer />
        <Row>
          <Loadable size='lg' loading={loadingItem}>
            <Description description={description} />
          </Loadable>
        </Row>
        <Loadable size='md' loading={loadingItem}>
          {externalLink && (
            <ExternalLink
              title={externalLink.title}
              link={externalLink.link}
              description={externalLink.description}
            />
          )}
        </Loadable>
        <Loadable size='lg' loading={loadingItem || loadingSeller}>
          <ContactPad
            phone={phone}
            zalo={zalo}
            messenger={messenger}
            website={website}
          />
        </Loadable>
      </Box>
      <PaddedContent>
        <Loadable size='lg' loading={loadingItem}>
          <Card>
            <CardContent sx={{ background: 'white' }}>
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
            </CardContent>
          </Card>
        </Loadable>
        {!loadingItem && menu && menu.length > 1 && (
          <>
            <VerticalSpacer />
            <Card>
              <CardContent sx={{ background: 'white' }}>
                <Typography variant='h6'>Bảng giá</Typography>
                <List>
                  {menu.map(
                    ({ name: menuItemName, price, unit, currency }, i) => (
                      <ListItem key={i}>
                        <ListItemText>{menuItemName}</ListItemText>
                        <ListItemText align='right'>
                          {unit
                            ? `${price} ${currency} / ${unit}`
                            : `${price} ${currency}`}
                        </ListItemText>
                      </ListItem>
                    )
                  )}
                </List>
              </CardContent>
            </Card>
          </>
        )}
      </PaddedContent>
    </VerticalLayout>
  );
};

ItemDetailsPage.propTypes = {};

export default ItemDetailsPage;
