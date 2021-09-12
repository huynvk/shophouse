import { useTheme } from '@material-ui/core';

const withMuiTheme = (Component) => (props) => {
  const theme = useTheme();
  return <Component theme={theme} {...props} />;
};

export default withMuiTheme;
