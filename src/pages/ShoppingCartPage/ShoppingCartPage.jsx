import { CartItem } from 'components/CartItem/CartItem';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { actionUpdateQuantity } from 'redux/store';

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
    return sum;
  }

  const submitHandler = e => {
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
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
        <label>
          Address
          <input type="text" name="address" />
        </label>

        <ul>
          {productsInCart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
        </ul>

        <p>total: {total}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
