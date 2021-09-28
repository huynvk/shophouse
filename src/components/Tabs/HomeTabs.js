import { styled } from '@mui/system';

import Icon from 'components/Icons';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { Paper, Box, Typography } from '@mui/material';

// This component doesn't use tab from material ui, since it seems too complex
// Applied a simple solution first

const StyledLink = styled(Link)`
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
`;

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
  { label: 'Chợ', icon: 'PriceTags', path: '/' },
  { label: 'Nhóm mua', icon: 'ShopHouse', path: '/group' },
  {
    label: 'Hoạt động',
    icon: 'DocumentPaper',
    path: '/activities',
  },

  {
    label: 'Tài khoản',
    icon: 'Account',
    path: '/account',
  },
];

const HomeTabs = () => (
  <Paper square elevation={3}>
    <Box display='flex'>
      {homeTabItems.map(({ label, icon, path }, index) => (
        <LinkTab key={index} label={label} icon={icon} to={path} />
      ))}
    </Box>
  </Paper>
);

export default HomeTabs;
