import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'services/api';
import { TrendSection, TrendTitle } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrending();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <TrendSection>
      <TrendTitle>Today Trending</TrendTitle>
      <MoviesList movies={movies} way="/movies/" />
    </TrendSection>
  );
};
