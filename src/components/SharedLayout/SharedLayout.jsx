import { Outlet } from 'react-router-dom';
import { Header, HeaderLink, Nav } from './SharedLayout .styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};
