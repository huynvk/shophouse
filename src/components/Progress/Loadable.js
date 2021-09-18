import { LoadingPlaceHolder } from '.';

const Loadable = ({ size, loading, children }) => {
  if (loading) {
    return <LoadingPlaceHolder size={size} />;
  }
  return children;
};

export default Loadable;
