import { Row, VerticalLayout } from './Layouts';
import { LoadingPlaceHolder } from './Progress';

const LoadableList = ({
  loading,
  renderEmptyState,
  renderList,
  items,
  ...props
}) => {
  const renderItemList = (items) => {
    if (loading) {
      return (
        <>
          <Row>
            <LoadingPlaceHolder size='lg' />
          </Row>
          <Row>
            <LoadingPlaceHolder size='md' />
          </Row>
          <Row>
            <LoadingPlaceHolder size='sm' />
          </Row>
        </>
      );
    }

    if (items === undefined || items === null || items.length === 0) {
      return renderEmptyState(props);
    }

    return renderList({ items, ...props });
  };

  return <VerticalLayout>{renderItemList(items)}</VerticalLayout>;
};

export default LoadableList;
