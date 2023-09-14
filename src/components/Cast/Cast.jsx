import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'service/api';
import { ActorPicture } from './Cast.styled';
import defaultPicture from 'components/default-image.jpg';

const service = new API();

export default function Cast() {
  const [actors, setActors] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    service
      .getActorsById(movieId)
      .then(({ data }) => setActors(data.cast))
      .catch(setError);
  }, [movieId]);

  if(error) {
    return <p>{error}</p>
  }

  return (
    <ul>
      {actors.length === 0 && (
        <li>We don't have any information about cast for this movie</li>
      )}
      {actors.map(({ name, profile_path, id }) => {
        return (
          <li key={id}>
            <ActorPicture
              alt={name}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : defaultPicture
              }
            />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
