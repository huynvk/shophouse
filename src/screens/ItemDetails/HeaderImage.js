import { Toolbar, IconButton } from '@material-ui/core';

import { LikeButton, BackButton } from 'components/Buttons';
import ImageBox from 'components/ImageBox';
import { withMuiTheme } from 'hoc';

const HeaderImage = ({ theme, imgUrl, name }) => {
  return (
    <ImageBox
      imgUrl={imgUrl}
      name={name}
      header={
        <Toolbar>
          <IconButton
            edge='false'
            aria-label='back'
            style={{ marginLeft: theme.spacing(-1) }}
          >
            <BackButton light />
          </IconButton>
        </Toolbar>
      }
    >
      <LikeButton size={2} active />
    </ImageBox>
  );
};

export default withMuiTheme(HeaderImage);
