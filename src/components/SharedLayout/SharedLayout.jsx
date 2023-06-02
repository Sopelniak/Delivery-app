import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Outlet />
    </div>
  );
}
