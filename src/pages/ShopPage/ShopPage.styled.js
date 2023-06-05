import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  height: 90vh;
  display: flex;
  gap: 20px;
`;

export const ShopsBox = styled.div`
  padding: 20px;
  background-color: #efefef;
  border: 3px solid #1e2e5e;
  border-radius: 10px;
`;

export const ShopsTitle = styled.h2`
  display: block;
  margin-bottom: 15px;
  text-align: center;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Link = styled(NavLink)`
  display: block;
  width: 200px;
  padding: 30px 0;
  text-align: center;
  text-decoration: none;
  color: #1e2e5e;
  background-color: #ffffff;
  border: 3px solid #1e2e5e;
  border-radius: 10px;

  &.active {
    color: #ffffff;
    background-color: #f07f2e;
    border-color: #f07f2e;
  }
`;
