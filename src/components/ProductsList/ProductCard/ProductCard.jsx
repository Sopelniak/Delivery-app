import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionAddProductToCart,
  actionDeleteProductFromCart,
} from 'redux/store';
import { Button, ListItem, Name, Price } from './ProductCard.styled';
import { selectProducts } from 'redux/selectors';
import { useEffect } from 'react';

const textBtn = {
  add: 'add to Cart',
  del: 'remove from Cart',
};

export function ProductCard({ product }) {
  const { name, price, id } = product;
  const [btnValue, setBtnValue] = useState(textBtn.add);
  const productsInCart = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsInCart.find(product => product.id === id)) {
      setBtnValue(textBtn.del);
    }
  }, [id, productsInCart]);

  const onBtnClick = () => {
    if (btnValue === textBtn.add) {
      dispatch(actionAddProductToCart({ ...product, quantity: '1' }));
      setBtnValue(textBtn.del);
    } else {
      dispatch(actionDeleteProductFromCart(id));
      setBtnValue(textBtn.add);
    }
  };
  return (
    <ListItem>
      <Name>{name}</Name>
      <div>
        <Price>{price}$</Price>
        <Button btnValue={btnValue} onClick={onBtnClick}>
          {btnValue}
        </Button>
      </div>
    </ListItem>
  );
}
