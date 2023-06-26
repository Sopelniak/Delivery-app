import { NavLinkStyled } from './AppBar.styled';

export function AppBar() {
  return (
    <nav>
      <NavLinkStyled to="/">Shop</NavLinkStyled>
      <NavLinkStyled to="/cart">Shopping Cart</NavLinkStyled>
    </nav>
  );
}
