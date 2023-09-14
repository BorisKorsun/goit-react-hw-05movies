import { NavLink, Outlet } from 'react-router-dom';
import { NavigationList, NavigationLink } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <>
      <header>
        <nav>
          <NavigationList>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </NavigationList>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
