import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'config/route';
import { withMuiTheme } from 'hoc';

const RootView = withMuiTheme(styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background};
`);

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
