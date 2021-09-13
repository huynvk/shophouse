import styled from 'styled-components';
import { Typography, Toolbar, IconButton } from '@material-ui/core';

import { LikeButton, BackButton } from 'components/Buttons';
import { withMuiTheme } from 'hoc';

const ImageBoxContainer = styled.div`
  position: relative;
  overflow: hidden;

  // @TODO: adjust height based on resolution
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .gradient {
    background: black;
    background: linear-gradient(
      0,
      black 0%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.2) 50%,
      black 100%
    );
    opacity: 0.6;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.palette.white};
  }

  .info-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    box-sizing: border-box;

    .expanding {
      flex: 1;
    }
  }

  .spacer {
    flex: 1;
  }
`;

const ImageBox = ({ theme, imgUrl, name }) => {
  return (
    <ImageBoxContainer theme={theme}>
      <img src={imgUrl} alt={name} />
      <div className='gradient' />
      <div className='content'>
        <Toolbar>
          <IconButton
            edge='false'
            aria-label='back'
            style={{ marginLeft: theme.spacing(-1) }}
          >
            <BackButton light />
          </IconButton>
        </Toolbar>
        <div className='spacer' />
        <div className='info-bar'>
          <Typography variant='h1' className='expanding'>
            {name}
          </Typography>
          <LikeButton size={2} active />
        </div>
      </div>
    </ImageBoxContainer>
  );
};

export default withMuiTheme(ImageBox);
