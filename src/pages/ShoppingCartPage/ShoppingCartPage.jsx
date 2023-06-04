import { CartItem } from 'components/CartItem/CartItem';
import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import { useState } from 'react';

export function ShoppingCartPage() {
  const [productsInCart, setProductsInCart] = useState([
    {
      id: 'GGOEGOAR013099',
      name: 'Google Stylus Pen w/ LED Light',
      description:
        'Get yourself a great multitasking tool! Write a note, sign a tablet, and shine a light with this Google Stylus Pen w/LED Light!',
      features:
        '<p>Aluminum cap off ballpoint pen</p>\n<p>LED light</p>\n<p>Stylus that works with touch screen devices</p>\n<p>Three mercury-free AG3/LR41 batteries included</p>',
      price: '5.50',
      keywords:
        'Ballpoint Pen/Stylus/LED Light, LED Light, Pen, pens, Pens, Google Ballpoint Pen/LED Light, ballpoint pen, Google Ballpoint Pen/Stylus/LED Light, stylus, Stylus, LED Light, LED lights, led, LED',
      url: 'Google+Stylus+Pen+w+LED+Light',
      category: 'office',
      subcategory: 'office',
      quantity: '1',
    },
    {
      id: 'GGOEGOCJ093999',
      name: 'Google Large Standard Journal Grey',
      description:
        'Use all 192 pages to store anything from meeting notes to that next big idea in this Google hard cover notebook.',
      features:
        '<p>Hard Cover</p>\n<p>Elastic Band Closure with Ribbon Page Marker</p>\n<p>192 White, College Ruled Pages</p>\n<p>Size: 5.5 x 8.5 inch</p>',
      price: '15.99',
      keywords:
        'Google Large Standard Journal Grey, google journal, google large standard journal, google large grey journal, google grey journal Google Large Standard Journal Grey',
      url: 'Google+Large+Standard+Journal+Grey',
      category: 'office',
      subcategory: 'office',
      quantity: '1',
    },
  ]);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(productsInCart));
  }, [productsInCart]);

  const updateQuantity = (id, quantity) => {
    const itemIndex = productsInCart.findIndex(item => item.id === id);
    setProductsInCart(prev => {
      const arr = [...prev];
      arr[itemIndex].quantity = quantity;
      return arr;
    });
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
    const newOrder = {
      id: nanoid(),
      name: name.value,
      email: email.value,
      phone: phone.value,
      address: address.value,
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
              updateTotal={setTotal}
              productsInCart={productsInCart}
              calculateTotal={calculateTotal}
            />
          ))}
        </ul>

        <p>total: {total}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
