import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  withBackground: {
    background: theme.palette.common.white,
  },
}));

const VerticalLayout = ({
  header,
  footer,
  children,
  noBackground,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justifyContent='flex-start'
      alignItems='stretch'
      className={classNames(classes.root, {
        [classes.withBackground]: !noBackground,
      })}
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
