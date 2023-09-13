import { Link } from 'react-router-dom';

export default function MovieList({ movieList }) {
  return (
    <>
      <ul>
        {movieList.map(movie => (
          <li key={movie}>
            <Link to={`movies/${movie}`}>{movie}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
