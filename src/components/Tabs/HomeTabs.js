import Icon from 'components/Icons';
import PropTypes from 'prop-types';
const { Paper, Box, Typography } = require('@material-ui/core');

// This component doesn't use tab from material ui, since it seems too complex
// Applied a simple solution first
const Tab = ({ label, icon, selected, ...props }) => {
  return (
    <Box
      flexGrow={1}
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      {...props}
    >
      <Icon
        icon={icon}
        size='lg'
        color={selected ? 'primary.main' : 'text.secondary'}
      />
      <Typography
        color={selected ? 'primary' : 'textSecondary'}
        variant='caption'
      >
        {label}
      </Typography>
    </Box>
  );
};

const homeTabItems = [
  { label: 'Chợ', icon: 'PriceTags', pageName: 'market' },
  { label: 'Hoạt động', icon: 'DocumentPaper', pageName: 'activities' },
  { label: 'Cửa hàng', icon: 'ShopHouse', pageName: 'store' },
  { label: 'Tài khoản', icon: 'Account', pageName: 'account' },
];

const HomeTabs = ({ currentPage = '' }) => (
  <Paper square>
    <Box display='flex' flexDirectiom='row' pt={0.5} pb={0.5}>
      {homeTabItems.map(({ label, icon, pageName }, index) => (
        <Tab
          key={index}
          flexGrow={1}
          label={label}
          icon={icon}
          selected={currentPage === pageName}
        />
      ))}
    </Box>
  </Paper>
);

HomeTabs.propTypes = {
  currentPage: PropTypes.oneOf(['market', 'activities', 'store', 'account']),
};

export default HomeTabs;