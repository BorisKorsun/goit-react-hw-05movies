import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from 'service/api';

const service = new API();

export default function TrendingMovieList() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    service.getTrendingMovies().then(({data}) => setMovieList(data.results))
  }, [])

  return (
    <>
      <ul>
        {movieList.map(({id, original_title, name}) => (
          <li key={id}>
            <Link to={`movies/${id}`}>{original_title ?? name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
