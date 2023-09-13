import { Link, Outlet } from 'react-router-dom';

import MovieCard from 'components/MovieCard';

export default function MovieDetails() {
  return (
    <section>
      <MovieCard/>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </section>
  );
}
