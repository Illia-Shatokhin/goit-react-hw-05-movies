import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetails } from 'services/api';
import { MiniTitle, Movie, MovieTitle, Text } from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/');

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
      <Link to={backLinkHref.current}>Back</Link>
      <Movie>
        <img
          src={
            movieDetails.poster_path &&
            `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
          }
          alt={movieDetails.title}
          width="250"
          height="375"
        />
        <div>
          <MovieTitle>{`${
            movieDetails.title ? movieDetails.title : 'No title'
          } (${
            movieDetails.release_date && movieDetails.release_date.split('-')[0]
          })`}</MovieTitle>
          <Text>{`User score: ${
            movieDetails.vote_average
              ? Math.round(movieDetails.vote_average * 10)
              : 'No score'
          }%`}</Text>
          <MiniTitle>Overview</MiniTitle>
          <Text>
            {movieDetails.overview ? movieDetails.overview : 'No overview'}
          </Text>
          <MiniTitle>Genres</MiniTitle>
          <Text>
            {movieDetails.genres && movieDetails.genres.length
              ? movieDetails.genres.map(genre => genre.name).join(', ')
              : 'No genres'}
          </Text>
        </div>
      </Movie>

      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
