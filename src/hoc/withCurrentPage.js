const withCurrentPage = (Component) => (props) => {
  return <Component currentPage='market' {...props} />;
};

export default withCurrentPage;
