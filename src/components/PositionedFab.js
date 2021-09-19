import { Fab } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    top: 'auto',
    left: 'auto',
    bottom: theme.spacing(1),
    right: theme.spacing(2),
    position: 'absolute',
  },
}));

const PositionedFab = (props) => {
  const classes = useStyles();
  return <Fab className={classes.root} {...props} />;
};

export default PositionedFab;
