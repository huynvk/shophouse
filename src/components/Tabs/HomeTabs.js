import styled from 'styled-components';

import Icon from 'components/Icons';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { withMuiTheme } from 'hoc';
const { Paper, Box, Typography } = require('@material-ui/core');

// This component doesn't use tab from material ui, since it seems too complex
// Applied a simple solution first

const StyledLink = withMuiTheme(styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding-top: ${({ theme }) => theme.spacing(1)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(-1)};

  &:hover {
    background: ${({ theme }) => theme.palette.grey[300]};
  }
`);

const LinkTab = ({ label, icon, selected, to, ...props }) => {
  let match = useRouteMatch({
    path: to,
    exact: true,
  });
  return (
    <StyledLink to={to} {...props}>
      <Icon
        icon={icon}
        size='lg'
        color={match ? 'primary.main' : 'text.secondary'}
      />
      <Typography color={match ? 'primary' : 'textSecondary'} variant='caption'>
        {label}
      </Typography>
    </StyledLink>
  );
};

const homeTabItems = [
  { label: 'Chợ', icon: 'PriceTags', pageName: 'market', path: '/' },
  {
    label: 'Hoạt động',
    icon: 'DocumentPaper',
    pageName: 'activities',
    path: '/activities',
  },
  { label: 'Cửa hàng', icon: 'ShopHouse', pageName: 'store', path: '/store' },
  {
    label: 'Tài khoản',
    icon: 'Account',
    pageName: 'account',
    path: '/account',
  },
];

const HomeTabs = () => (
  <Paper square elevation={3}>
    <Box display='flex'>
      {homeTabItems.map(({ label, icon, pageName, path }, index) => (
        <LinkTab key={index} label={label} icon={icon} to={path} />
      ))}
    </Box>
  </Paper>
);

export default HomeTabs;
