import { CartItem } from 'components/CartItem/CartItem';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { actionClearCart, actionUpdateQuantity } from 'redux/store';
import {
  InputStyled,
  InputBox,
  LabelStyled,
  Box,
  ListStyled,
  BtnBox,
  Total,
  Button,
} from './ShoppingCartPage.styled';
import { Notice } from 'components/Notice/Notice';

export function ShoppingCartPage() {
  const [total, setTotal] = useState(0);
  const productsInCart = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(calculateTotal(productsInCart));
  }, [productsInCart]);

  const updateQuantity = (id, quantity) => {
    dispatch(actionUpdateQuantity({ id, quantity }));
  };

  function calculateTotal(productsInCart) {
    let sum = 0;
    productsInCart.forEach(({ price, quantity }) => {
      sum += Number(price) * Number(quantity);
    });
    return sum.toFixed(2);
  }

  const submitHandler = e => {
    e.preventDefault();
    const { name, email, phone, address } = e.target;
    const products = productsInCart.map(item => {
      const { id, name, quantity } = item;
      return { id, name, quantity };
    });
    const newOrder = {
      id: nanoid(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
      products,
      total,
    };
    console.log(newOrder);
    e.target.reset();
    dispatch(actionClearCart());
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Box>
          <InputBox>
            <LabelStyled>
              Name*
              <InputStyled type="text" name="name" required />
            </LabelStyled>
            <LabelStyled>
              Email*
              <InputStyled type="email" name="email" required />
            </LabelStyled>
            <LabelStyled>
              Phone*
              <InputStyled type="tel" name="phone" required />
            </LabelStyled>
            <LabelStyled>
              Address
              <InputStyled type="text" name="address" />
            </LabelStyled>
          </InputBox>

          {productsInCart.length === 0 ? (
            <Notice message="Your shopping cart is empty!" />
          ) : (
            <ListStyled>
              {productsInCart.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                />
              ))}
            </ListStyled>
          )}
        </Box>

        <BtnBox>
          <Total>total: {total}$</Total>

          <Button
            type="submit"
            disabled={productsInCart.length > 0 ? false : true}
          >
            Submity
          </Button>
        </BtnBox>
      </form>
    </>
  );
}
