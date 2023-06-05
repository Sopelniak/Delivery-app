import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  actionAddProductToCart,
  actionDeleteProductFromCart,
} from 'redux/store';
import { Button, ListItem, Name, Price } from './ProductCard.styled';

export function ProductCard({ product }) {
  const { name, price, id } = product;
  const [btnValue, setBtnValue] = useState('add to Cart');
  const [btnBackColor, setBtnBackColor] = useState('#f07f2e');

  const dispatch = useDispatch();

  const onBtnClick = () => {
    if (btnValue === 'add to Cart') {
      dispatch(actionAddProductToCart({ ...product, quantity: '1' }));
      setBtnValue('remove from Cart');
      setBtnBackColor('#AEAEAE');
    } else {
      dispatch(actionDeleteProductFromCart(id));
      setBtnValue('add to Cart');
      setBtnBackColor('#f07f2e');
    }
  };
  return (
    <ListItem>
      <Name>{name}</Name>
      <div>
        <Price>{price}$</Price>
        <Button backColor={btnBackColor} onClick={onBtnClick}>
          {btnValue}
        </Button>
      </div>
    </ListItem>
  );
}
