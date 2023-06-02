import { NavLink } from 'react-router-dom';

export function AppBar() {
  return (
    <nav>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Shopping Cart</NavLink>
    </nav>
  );
}
