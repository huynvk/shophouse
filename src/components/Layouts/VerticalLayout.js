import { withMuiTheme } from 'hoc';
import styled from 'styled-components';

const VerticalLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow-y: auto;
`;

const StickyFooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Footer = withMuiTheme(styled.div`
  align-self: stretch;
  background: ${({ theme }) => theme.palette.common.white};
`);

const Fab = withMuiTheme(styled.div`
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`);

const VerticalLayout = ({ header, footer, children, fab }) => (
  <VerticalLayoutContainer>
    {header}
    <ContentContainer>{children}</ContentContainer>
    {(footer || fab) && (
      <StickyFooterContainer>
        {fab && <Fab>{fab}</Fab>}
        {footer && <Footer>{footer}</Footer>}
      </StickyFooterContainer>
    )}
  </VerticalLayoutContainer>
);

export default VerticalLayout;
