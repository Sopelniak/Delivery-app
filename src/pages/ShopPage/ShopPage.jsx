import { Outlet } from 'react-router-dom';
import { Box, Link, ListItem, ShopsBox, ShopsTitle } from './ShopPage.styled';

export function ShopPage() {
  return (
    <Box>
      <ShopsBox>
        <ShopsTitle>Shops:</ShopsTitle>
        <ul>
          <ListItem>
            <Link to="mc-duck">Mc Duck</Link>
          </ListItem>
          <ListItem>
            <Link to="cfk">CFK</Link>
          </ListItem>
          <ListItem>
            <Link to="minodos-pizza">Minodo's Pizza</Link>
          </ListItem>
          <ListItem>
            <Link to="bta">BTA</Link>
          </ListItem>
          <ListItem>
            <Link to="shenro">Shenro</Link>
          </ListItem>
        </ul>
      </ShopsBox>

      <Outlet />
    </Box>
  );
}
