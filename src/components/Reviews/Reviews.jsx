import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';

export const Reviews = () => {
  const [reviews, setRewievs] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const movieReviews = await getMovieReviews(id);
        setRewievs([...movieReviews]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);
  return (
    <ul>
      {reviews.length
        ? reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })
        : 'no Reviews'}
    </ul>
  );
};
