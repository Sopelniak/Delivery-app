import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
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

export const Box = styled.div`
  display: flex;
`;

export const BtnDelete = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 100ms ease-in-out;
  &:hover {
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: auto;
`;

export const InputStyled = styled.input`
  height: 25px;
  border-radius: 5px;
`;
