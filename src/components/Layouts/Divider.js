import { styled } from '@mui/system';

const Divider = styled('div')`
  ${({ theme }) => `
    width: ${theme.spacing(6)};
    height: 1px;
    background-color: ${theme.palette.primary.light};
    margin-bottom: ${theme.spacing(1)};
  `}
`;

export default Divider;
