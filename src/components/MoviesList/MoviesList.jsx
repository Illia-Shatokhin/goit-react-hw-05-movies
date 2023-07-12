import { MovieItem } from 'components/MovieItem/MovieItem';

export const MoviesList = ({ movies, way }) => {
  return (
    <ul>
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
    </ul>
  );
};
