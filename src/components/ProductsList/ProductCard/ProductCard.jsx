import { useState } from 'react';

export function ProductCard({ product: { name, price } }) {
  const [btnValue, setBtnValue] = useState('add to Cart');

  const onBtnClick = () => {
    if (btnValue === 'add to Cart') {
      console.log('added to Cart');
      setBtnValue('remove from Cart');
    } else {
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
