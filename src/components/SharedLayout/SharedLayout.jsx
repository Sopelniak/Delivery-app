import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <Container>
      <Header>
        <AppBar />
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
}
