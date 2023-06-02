import { Link, Outlet } from 'react-router-dom';

export function ShopPage() {
  return (
    <div>
      <div>
        <h2>Shops:</h2>
        <ul>
          <li>
            <Link to="mc-duck">Mc Duck</Link>
          </li>
          <li>
            <Link to="cfk">CFK</Link>
          </li>
          <li>
            <Link to="minodos-pizza">Minodo's Pizza</Link>
          </li>
          <li>
            <Link to="bta">BTA</Link>
          </li>
          <li>
            <Link to="shenro">Shenro</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
