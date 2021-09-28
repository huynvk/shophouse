import { Typography } from '@mui/material';
import Icon from 'components/Icons';
import { HorizontalSpacer, Row } from 'components/Layouts';
import { Loadable } from 'components/Progress';

const InfoRow = ({ icon, children, loading }) => {
  return (
    <Row mb={0.5}>
      <Icon icon={icon} size='lg' />
      <HorizontalSpacer />
      <Loadable loading={loading}>
        {typeof children === 'string' ? (
          <Typography>{children}</Typography>
        ) : (
          children || <div />
        )}
      </Loadable>
    </Row>
  );
};

export default InfoRow;
