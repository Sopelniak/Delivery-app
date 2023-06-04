export function CartItem({
  item: { name, price, id, quantity },
  updateQuantity,
}) {
  const inputHandler = e => {
    updateQuantity(id, e.target.value.toString());
  };

  return (
    <li>
      <p>{name}</p>
      <p>Price: {price}</p>
      <label>
        Quantity
        <input
          onChange={inputHandler}
          type="number"
          value={quantity}
          min="1"
          max="10"
          step="1"
          name={id}
        />
      </label>
    </li>
  );
}
