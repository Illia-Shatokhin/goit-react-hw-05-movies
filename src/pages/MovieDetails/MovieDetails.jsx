import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';

export const MovieDetails = () => {
  let [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const gotMovieDetails = await getMovieDetails(id);
        setMovieDetails({ ...gotMovieDetails });
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  return (
    <section>
      <img
        src={
          movieDetails.poster_path &&
          `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        }
        alt={movieDetails.title}
      />
      <h2>{`${movieDetails.title ? movieDetails.title : 'No title'} (${
        movieDetails.release_date && movieDetails.release_date.split('-')[0]
      })`}</h2>
      <p>{`User score: ${
        movieDetails.vote_average
          ? Math.round(movieDetails.vote_average * 10)
          : 'No score'
      }%`}</p>
      <p>Overview</p>
      <p>{movieDetails.overview ? movieDetails.overview : 'No overview'}</p>
      <p>Genres</p>
      <p>
        {movieDetails.genres && movieDetails.genres.length
          ? movieDetails.genres.map(genre => genre.name + ', ')
          : 'No genres'}
      </p>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};
