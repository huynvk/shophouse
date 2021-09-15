import { VerticalLayout } from './Layouts';
import Loading from './Loading';

const LoadableList = ({
  loading,
  renderEmptyState,
  renderList,
  items,
  ...props
}) => {
  const renderItemList = (items) => {
    if (loading) {
      return <Loading />;
    }

    if (items === undefined || items.length === 0) {
      return renderEmptyState(props);
    }

    return renderList({ items, ...props });
  };

  return <VerticalLayout>{renderItemList(items)}</VerticalLayout>;
};

export default LoadableList;
