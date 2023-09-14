import { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import API from 'service/api';

const service = new API();

export default function SearchFormMovieList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ name: '' });
  const movieName = searchParams.get('name') ?? '';

  const location = useLocation();

  const updateSearchParams = name => {
    if (name === '') {
      return setSearchParams({});
    }
    setSearchParams({ name });
  };

  useEffect(() => {
    service
      .getMoviesByTitle(movieName)
      .then(({ data }) => setMovies(data.results))
      .catch(setError);
  }, [movieName]);

  const onChange = e => {
    const name = e.target.value;
    updateSearchParams(name);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('submit');
    setSearchParams({});
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={movieName} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
