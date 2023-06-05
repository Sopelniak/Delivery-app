import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkStyled = styled(NavLink)`
  padding: 0 15px;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #2c2c2c;
  &:not(:last-child) {
    border-right: 3px solid #2c2c2c;
  }
  &.active {
    text-decoration: underline;
    color: #f07f2e;
  }
`;
