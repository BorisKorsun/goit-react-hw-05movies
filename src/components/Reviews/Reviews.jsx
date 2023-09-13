import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'service/api';

const service = new API();

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

    useEffect(() => {
      service
        .getReviewsById(movieId)
        .then(({ data }) => setReviews(data.results));
    }, [movieId]);
  return (
    <ul>
      {reviews.length === 0 && <li>We don't have any reviews for this movie</li>}
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
