import { MovieItem } from 'components/MovieItem/MovieItem';
import { MovieList } from './MoviesList.styled';

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
