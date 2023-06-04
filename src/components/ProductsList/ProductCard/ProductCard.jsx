import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  actionAddProductToCart,
  actionDeleteProductFromCart,
} from 'redux/store';

export function ProductCard({ product }) {
  const { name, price, id } = product;
  const [btnValue, setBtnValue] = useState('add to Cart');

  const dispatch = useDispatch();

  const onBtnClick = () => {
    if (btnValue === 'add to Cart') {
      dispatch(actionAddProductToCart({ ...product, quantity: '1' }));
      console.log('added to Cart');
      setBtnValue('remove from Cart');
    } else {
      dispatch(actionDeleteProductFromCart(id));
      setBtnValue('add to Cart');
      console.log('removed from Cart');
    }
  };
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={onBtnClick}>{btnValue}</button>
    </li>
  );
}
