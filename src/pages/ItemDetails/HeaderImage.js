import { Toolbar, IconButton } from '@mui/material';

import { LikeButton, BackButton } from 'components/Buttons';
import ImageBox from 'components/ImageBox';
import { withTheme } from '@mui/styles';

const HeaderImage = ({ theme, imgUrl, name }) => {
  return (
    <ImageBox
      imgUrl={imgUrl}
      name={name}
      header={
        <Toolbar>
          <IconButton edge='start' aria-label='back' size='large'>
            <BackButton light />
          </IconButton>
        </Toolbar>
      }
    >
      <LikeButton size={2} active />
    </ImageBox>
  );
};

export default withTheme(HeaderImage);
