import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
});

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
      <Box flex={1}>{children}</Box>
      {footer}
    </Grid>
  );
};

export default VerticalLayout;
