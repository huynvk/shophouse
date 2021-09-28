import PropTypes from 'prop-types';
import _ from 'lodash';
import { withTheme } from '@mui/styles';

import Account from './Account';
import Heart from './Heart';
import BackArrow from './BackArrow';
import DocumentPaper from './DocumentPaper';
import Info from './Info';
import Ship from './Ship';
import Price from './Price';
import PriceTags from './PriceTags';
import Location from './Location';
import ShopHouse from './ShopHouse';
import Plus from './Plus';
import Zalo from './Zalo';
import Messenger from './Messenger';
import Website from './Website';
import Phone from './Phone';
import Calendar from './Calendar';
import { Box } from '@mui/system';

const mappings = {
  Account,
  Heart,
  BackArrow,
  Info,
  Ship,
  Price,
  Location,
  PriceTags,
  DocumentPaper,
  ShopHouse,
  Plus,
  Zalo,
  Messenger,
  Website,
  Phone,
  Calendar,
};
const sizeMap = {
  sm: 0.5,
  md: 1,
  lg: 2,
  xl: 3,
};

const Icon = withTheme(
  ({ theme, color = 'primary.main', size = 'md', icon, ...props }) => {
    const Component = mappings[icon];
    if (!Component) {
      return null;
    }

    const renderColor = _.get(theme.palette, color) || color;
    const renderSize = theme.spacing(sizeMap[size] || size);

    return (
      <Box
        width={renderSize}
        height={renderSize}
        justifyContent='center'
        alignItems='center'
      >
        <Component
          width={renderSize}
          height={renderSize}
          color={renderColor}
          {...props}
        />
      </Box>
    );
  }
);

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizeMap)),
  icon: PropTypes.oneOf(Object.keys(mappings)),
};

export default Icon;

export {
  Account,
  Heart,
  BackArrow,
  Info,
  Ship,
  Price,
  Location,
  PriceTags,
  DocumentPaper,
  ShopHouse,
  Plus,
  Zalo,
  Messenger,
  Website,
  Phone,
  Calendar,
};
