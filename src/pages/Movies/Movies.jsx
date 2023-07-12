import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getSearchMovie } from 'services/api';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovieWithQuery = async () => {
      try {
        const gotSearchMovies = await getSearchMovie(query);
        setMovies(gotSearchMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieWithQuery();
  }, [query]);

  const onSubmit = e => {
    e.preventDefault();
    const input = document.querySelector('input');
    setQuery(input.value);
    input.value = '';
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      {movies.length ? (
        <MoviesList movies={movies} way="" />
      ) : (
        `No films with "${query}" name`
      )}
    </>
  );
};
