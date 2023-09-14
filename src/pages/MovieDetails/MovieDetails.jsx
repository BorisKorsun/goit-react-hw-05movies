import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import MovieCard from 'components/MovieCard';
import SuspenseFallback from 'components/SuspenseFallback';

export default function MovieDetails() {
  return (
    <section>
      <MovieCard />

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<SuspenseFallback>Loading..</SuspenseFallback>}>
        <Outlet />
      </Suspense>
    </section>
  );
}
