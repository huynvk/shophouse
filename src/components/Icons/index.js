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
      <Component
        color={renderColor}
        width={renderSize}
        height={renderSize}
        {...props}
      />
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
};
