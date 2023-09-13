import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import defaultImage from 'components/default-image.jpg';
import API from 'service/api';
import {
  CardContainer,
  Title,
  Score,
  SubTitle,
  Desctiption,
  PosterContainer,
  InfoContainer,
  GenresList
} from './MovieCard.styled';

const service = new API();

export default function MovieCard() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [score, setScore] = useState(null);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

  const { movieId } = useParams();
  useEffect(() => {
    service.getMovieById(movieId).then(({ data }) => {
      setTitle(data.original_title ?? data.name);
      setYear(data.release_date);
      setScore(data.vote_average);
      setOverview(data.overview);
      setGenres(data.genres);
      if(data.poster_path) {
        setImageUrl(`https://image.tmdb.org/t/p/original${data.poster_path}`)
      }
    });
  }, [movieId]);

  return (
    <>
      <CardContainer>
        <PosterContainer>
        <img width="100%" alt={title} src={imageUrl ? imageUrl : defaultImage} />
        </PosterContainer>
        <InfoContainer>
          <Title>{year ? `${title}: (${year.slice(0, 4)})` : `${title}`} </Title>
          <Score>User score: {Math.round(score * 10)}%</Score>
          <SubTitle>Overview</SubTitle>
          <Desctiption>{overview}</Desctiption>
          <SubTitle>Genres</SubTitle>
          <GenresList>
            {genres.map(({ name, id }) => {
              return <li key={id}>{name}</li>; 
            })}
          </GenresList>
        </InfoContainer>
      </CardContainer>
    </>
  );
}
