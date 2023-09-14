import { Outlet } from 'react-router-dom';
import { NavigationList, NavigationLink } from './SharedLayout.styled';
import { Suspense } from 'react';

import SuspenseFallback from 'components/SuspenseFallback';

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
        <Suspense fallback={<SuspenseFallback>Loading...</SuspenseFallback>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
