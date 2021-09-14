import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'config/route';

const RootView = styled.div`
  width: 100vw;
  height: 100vh;
`;

const AppRouter = () => (
  <Router>
    <Switch>
      {Object.values(routes).map(
        ({ location, component: Component }, index) => {
          return (
            <Route key={index} path={location} component={Component} exact />
          );
        }
      )}
    </Switch>
  </Router>
);

function App() {
  return (
    <RootView>
      <AppRouter />
    </RootView>
  );
}

export default App;
