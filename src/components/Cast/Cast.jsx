import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'service/api';
import { ActorPicture } from './Cast.styled';
import defaultPicture from 'components/default-image.jpg'

const service = new API();

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams('movieId');

  useEffect(() => {
    service.getActorsById(movieId).then(({ data }) => setActors(data.cast));
  }, [movieId]);

  return (
    <ul>
      {actors.map(({ name, profile_path, id }) => {
        return (
          <li key={id}>
            <ActorPicture
              alt={name}
              src={profile_path ?`https://image.tmdb.org/t/p/original${profile_path}` : defaultPicture}
            />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}
