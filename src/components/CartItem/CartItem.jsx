import { useDispatch } from 'react-redux';
import {
  Box,
  BtnDelete,
  InputStyled,
  LabelStyled,
  ListItem,
  Name,
  Price,
} from './CartItem.styled';
import { actionDeleteProductFromCart } from 'redux/store';

export function CartItem({
  item: { name, price, id, quantity },
  updateQuantity,
}) {
  const dispatch = useDispatch();

  const inputHandler = e => {
    updateQuantity(id, e.target.value.toString());
  };

  const onBtnClick = () => {
    dispatch(actionDeleteProductFromCart(id));
  };

  return (
    <ListItem>
      <Name>{name}</Name>
      <Price>Price: {price}</Price>
      <Box>
        <BtnDelete onClick={onBtnClick}>Delete</BtnDelete>
        <LabelStyled>
          Quantity
          <InputStyled
            onChange={inputHandler}
            type="number"
            value={quantity}
            min="1"
            max="10"
            step="1"
            name={id}
          />
        </LabelStyled>
      </Box>
    </ListItem>
  );
}
