import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: theme.palette.white,
  },
}));

const VerticalLayout = ({ header, footer, children, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='stretch'
      className={classes.root}
      {...rest}
    >
      {header}
      <Box flex={1} style={{ overflow: 'scroll' }} margin={0}>
        {children}
      </Box>
      {footer}
    </Grid>
  );
};

export default VerticalLayout;
