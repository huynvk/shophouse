import styled from 'styled-components';
import { withMuiTheme } from 'hoc';
import { VerticalLayout } from './Layouts';
import { Typography } from '@material-ui/core';

const ImageBoxContainer = styled.div`
  position: relative;
  overflow: hidden;

  // @TODO: adjust height based on resolution
  height: ${({ height }) => height || '300px'};

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
    padding: ${({ theme, paddingSize }) => theme.spacing(paddingSize)};
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

const ImageBox = ({
  theme,
  height,
  imgUrl,
  name,
  header,
  children,
  headerVariant = 'h1',
  paddingSize = 2,
}) => {
  return (
    <ImageBoxContainer theme={theme} height={height} paddingSize={paddingSize}>
      <img src={imgUrl} alt={name} />
      <div className='gradient' />
      <div className='content'>
        <VerticalLayout
          noBackground
          header={header}
          footer={
            <div className='info-bar'>
              <Typography variant={headerVariant} className='expanding'>
                {name}
              </Typography>
              {children}
            </div>
          }
        ></VerticalLayout>
      </div>
    </ImageBoxContainer>
  );
};

export default withMuiTheme(ImageBox);
