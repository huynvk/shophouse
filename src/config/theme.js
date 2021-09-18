import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      dark: '#d29001',
      light: '#e8c675',
      main: '#ddab38',
    },
    secondary: {
      dark: '#E1B440',
      light: '#E1B440',
      main: '#E1B440',
    },
    background: '#fff',
  },
  typography: {
    fontFamily: ['Roboto'],

    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
  },
  spacing: (factor) => `${1 * factor}rem`,
});

export default theme;
