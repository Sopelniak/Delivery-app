import {
  InputStyled,
  LabelStyled,
  ListItem,
  Name,
  Price,
} from './CartItem.styled';

export function CartItem({
  item: { name, price, id, quantity },
  updateQuantity,
}) {
  const inputHandler = e => {
    updateQuantity(id, e.target.value.toString());
  };

  return (
    <ListItem>
      <Name>{name}</Name>
      <Price>Price: {price}</Price>
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
    </ListItem>
  );
}
