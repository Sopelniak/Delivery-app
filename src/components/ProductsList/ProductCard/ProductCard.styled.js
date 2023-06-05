import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: #fffcf9;
  border: 3px solid #1e2e5e;
  border-radius: 10px;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Price = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  border: 2px solid #f07f2e;
  border-radius: 5px;
  background-color: ${props => props.backColor};
  color: #ffffff;
  cursor: pointer;
`;
