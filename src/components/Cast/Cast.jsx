import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const fetchReviews = async id => {
      try {
        const movieCast = await getMovieCredits(id);
        setCast([...movieCast]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews(movieId);
  }, [movieId]);
  return (
    <ul>
      {cast.length
        ? cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path &&
                    `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  }
                  alt={actor.name}
                  width="100"
                />
                <p>{actor.name}</p>
                <p>{actor.character}</p>
              </li>
            );
          })
        : 'no Cast'}
    </ul>
  );
};

export default Cast;
