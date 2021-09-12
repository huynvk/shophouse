import PropTypes from 'prop-types';

import Heart from './Heart';
import BackArrow from './BackArrow';
import Info from './Info';
import Ship from './Ship';
import Price from './Price';
import Location from './Location';
import { withMuiTheme } from 'hoc';

const mappings = { Heart, BackArrow, Info, Ship, Price, Location };
const sizeMap = {
  sm: 0.5,
  md: 1,
  lg: 2,
  xl: 3,
};

const Icon = withMuiTheme(
  ({ theme, color = 'primary', size = 'md', icon, ...props }) => {
    const Component = mappings[icon];
    if (!Component) {
      return null;
    }
    const renderColor = theme.palette[color]
      ? theme.palette[color].main
      : color;
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

export { Heart, BackArrow, Info, Ship, Price, Location };
