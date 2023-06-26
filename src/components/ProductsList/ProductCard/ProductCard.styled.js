import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 100px;
  padding: 20px;
  background-color: #fffcf9;
  border-radius: 10px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
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
  background-color: ${props => {
    return props.btnValue === 'add to Cart' ? '#f07f2e' : '#AEAEAE';
  }};
  color: #ffffff;
  cursor: pointer;
  transition: box-shadow 100ms ease-in-out;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;
