import { AppBar } from 'components/AppBar/AppBar';
import { Container } from 'components/Container/Container';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  return (
    <Container>
      <header>
        <AppBar />
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
