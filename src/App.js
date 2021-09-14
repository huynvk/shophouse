import { ItemListingPage } from 'pages/ItemListing';
import styled from 'styled-components';

const RootView = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <RootView>
      <ItemListingPage />
    </RootView>
  );
}

export default App;
