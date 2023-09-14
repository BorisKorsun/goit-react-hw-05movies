import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;

  & > li {
    margin-right: 15px;
  }
`;

export const NavigationLink = styled(NavLink)`
  font-size: 20px;

  &:visited {
    color: inherit;
  }

  &.active {
    color: red;
  }
`;
