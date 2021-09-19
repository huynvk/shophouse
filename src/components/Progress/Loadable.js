import { LoadingPlaceHolder } from '.';

const Loadable = ({ size = 'md', loading, children }) => {
  if (loading) {
    return <LoadingPlaceHolder size={size} />;
  }
  return children;
};

export default Loadable;
