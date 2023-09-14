import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import API from 'service/api';

const service = new API();

export default function TrendingMovieList() {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    service
      .getTrendingMovies()
      .then(({ data }) => setMovieList(data.results))
      .catch(setError);
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <ul>
        {movieList.map(({ id, original_title, name }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title ?? name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
