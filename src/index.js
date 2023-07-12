import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import {
//   getMovieCredits,
//   getMovieDetails,
//   getMovieReviews,
//   getSearchMovie,
//   getTrending,
// } from 'services/api';

// async function name() {
//   const trend = await getTrending();
//   const movie = await getTrending();
//   const details = await getTrending();
//   const credits = await getTrending();
//   const reviews = await getTrending();
//   console.log(
//     'trend',
//     trend.data.results,
//     'movie',
//     movie.data.results,
//     'details',
//     details.data.results,
//     'credits',
//     credits.data.results,
//     'reviews',
//     reviews.data.results
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
