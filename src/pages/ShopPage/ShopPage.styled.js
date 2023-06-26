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
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
`;

export const ShopsTitle = styled.h2`
  display: block;
  margin-bottom: 15px;
  text-align: center;
`;

export const ListItem = styled.li`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  overflow: hidden;
  transition: background-color 500ms linear, transform 100ms ease-in-out;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.05);
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

  &.active {
    color: #ffffff;
    background-color: #f07f2e;
    border-color: #f07f2e;
  }
`;
