import {
  VerticalLayout,
  Row,
  HorizontalSpacer,
  VerticalSpacer,
  PaddedContent,
} from 'components/Layouts';
import { CardMedia, Chip, IconButton, Typography } from '@mui/material';
import { useItemDetails, useUser } from 'hooks/api';
import { useParams } from 'react-router-dom';
import { Loadable } from 'components/Progress';
import { Box } from '@mui/system';
import ItemFooter from './ItemFooter';
import InfoRow from './InfoRow';
import ExternalLink from './ExternalLink';
import Description from './Description';
import ContactPad from './ContactPad';
import Promotions from './Promotions';
import Menu from './Menu';
import { ArrowBack, Share } from '@mui/icons-material';

const Header = ({ shareData }) => (
  <Box pl={1} pr={1} bgcolor='white' display='flex'>
    <IconButton edge='start' aria-label='back' size='large'>
      <ArrowBack />
    </IconButton>
    <Box flex={1} />
    <IconButton
      edge='start'
      aria-label='back'
      size='small'
      onClick={async () => {
        try {
          console.log('shareData', shareData);
          await navigator.share(shareData);
          console.log('share successfully');
        } catch (err) {
          alert(err);
        }
      }}
    >
      <Share />
    </IconButton>
  </Box>
);

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
    <VerticalLayout
      bg='primary'
      header={
        <Header
          shareData={{
            title: `${name} | Shophouse.vn`,
            text: description,
            url: window.location.href,
          }}
        />
      }
      footer={<ItemFooter itemId={itemId} />}
    >
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
          <Promotions promotions={promotions} />
        </Loadable>
        {!loadingItem && menu && menu.length > 1 && (
          <>
            <VerticalSpacer />
            <Menu menu={menu} />
          </>
        )}

        <VerticalSpacer size={5} />
      </PaddedContent>
    </VerticalLayout>
  );
};

ItemDetailsPage.propTypes = {};

export default ItemDetailsPage;
