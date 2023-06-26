import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 20px;
  height: 80vh;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
  padding: 20px;
  background-color: #efefef;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const InputStyled = styled.input`
  height: 25px;
  border-radius: 5px;
`;

export const ListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 100%;
  padding: 30px;
  background-color: #efefef;
  border-radius: 10px;
  overflow-y: scroll;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 50px;
  margin-top: 30px;
`;

export const Total = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const Button = styled.button`
  padding: 5px 40px;
  background-color: #f07f2e;
  border-radius: 5px;
  border-color: #f07f2e;
  font-size: 20px;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    transform: scale(1);
    background-color: #fffcf9;
    border: 1px solid grey;
    cursor: auto;
  }
`;
