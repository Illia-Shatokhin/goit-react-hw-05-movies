import { MovieItem } from 'components/MovieItem/MovieItem';
import { MovieList } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies, way }) => {
  return (
    <MovieList>
      {movies.map(movie => {
        return (
          <MovieItem
            way={way}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            name={movie.name}
          />
        );
      })}
    </MovieList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  way: PropTypes.string,
};
