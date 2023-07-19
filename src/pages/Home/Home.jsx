import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'services/api';
import { TrendSection, TrendTitle } from './Home.styled';
import { Oval } from 'react-loader-spinner';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isShowLoader, setIsShowLoader] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsShowLoader(true);
        const trendingMovies = await getTrending();
        setMovies(trendingMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsShowLoader(false);
      }
    };
    fetchMovies();
  }, []);
  return (
    <TrendSection>
      <TrendTitle>Today Trending</TrendTitle>
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
      <MoviesList movies={movies} way="/movies/" />
    </TrendSection>
  );
};
