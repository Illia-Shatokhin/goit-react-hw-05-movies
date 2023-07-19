import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isShowLoader, setIsShowLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('query');

  useEffect(() => {
    if (movie === '') return;
    const fetchMovieWithQuery = async () => {
      try {
        setIsShowLoader(true);
        const gotSearchMovies = await getSearchMovie(movie);
        setMovies(gotSearchMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsShowLoader(false);
      }
    };
    fetchMovieWithQuery();
  }, [movie]);

  const onSubmit = e => {
    e.preventDefault();
    const input = document.querySelector('input');
    setSearchParams({ query: input.value });
    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" required minLength={2} />
        <button type="submit">Search</button>
      </form>
      {isShowLoader && (
        <Oval
          height={100}
          width={100}
          color="#404bbf"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#404bbf"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      )}
      <MoviesList movies={movies} way="" />
    </>
  );
};
