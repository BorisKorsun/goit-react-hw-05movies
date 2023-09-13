import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'service/api';
import { ActorPicture } from './Cast.styled';

const service = new API();

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    service.getActorsById(movieId).then(({ data }) => setActors(data.cast));
  }, [movieId]);

  return (
    <ul>
      {actors.map(({ name, profile_path }) => {
        return (
          <li key={name}>
            <ActorPicture
              alt={name}
              src={`https://image.tmdb.org/t/p/original${profile_path}`}
            />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
