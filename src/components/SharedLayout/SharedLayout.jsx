import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <h1>Cinema-site</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
