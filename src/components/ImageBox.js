import styled from 'styled-components';
import { withTheme } from '@mui/styles';
import { Typography } from '@mui/material';

const ImageBoxContainer = styled.div`
  position: relative;
  overflow: hidden;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  height: 0;
  padding-top: 56.25%; // 16:9

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
    color: ${({ theme }) => theme.palette.common.white};
  }

  .info-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${({ theme, paddingSize }) => theme.spacing(paddingSize)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    box-sizing: border-box;
  }

  .expanding {
    flex: 1;
  }
`;

const ImageBox = ({
  theme,
  imgUrl,
  name,
  header,
  children,
  headerVariant = 'h1',
  paddingSize = 2,
}) => {
  return (
    <ImageBoxContainer theme={theme} paddingSize={paddingSize} imgUrl={imgUrl}>
      <div className='gradient' />
      <div className='content'>
        {header}
        <div className='expanding' />
        <div className='info-bar'>
          <Typography variant={headerVariant} className='expanding'>
            {name}
          </Typography>
          {children}
        </div>
      </div>
    </ImageBoxContainer>
  );
};

export default withTheme(ImageBox);
