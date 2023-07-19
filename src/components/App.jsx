import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
// import { Oval } from 'react-loader-spinner';
// <Oval
//         height={100}
//         width={100}
//         color="#404bbf"
//         wrapperStyle={{}}
//         wrapperClass=""
//         visible={true}
//         ariaLabel="oval-loading"
//         secondaryColor="#404bbf"
//         strokeWidth={3}
//         strokeWidthSecondary={3}
//       />

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
