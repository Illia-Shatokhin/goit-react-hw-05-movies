import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const BEARER =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzc1OTRkYjhiYTJkZTc1NmE4NjlkZjdmNGE3YWM4MCIsInN1YiI6IjY0NzlkZWI2Y2Y0YjhiMDEyMjc1NDQ0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AFSSvC4KCHIpByj_Pn4AKEBI4e9bM1IoAAf2VVjLCrU';
const options = params => {
  return {
    params,
    headers: {
      accept: 'application/json',
      Authorization: BEARER,
    },
  };
};

export async function getTrending() {
  const response = await axios.get(
    `${BASE_URL}trending/all/day`,
    options({ language: 'en-US' })
  );
  return response.data.results;
}

export async function getSearchMovie(query) {
  const response = await axios.get(
    `${BASE_URL}search/movie`,
    options({ query, include_adult: 'false', language: 'en-US', page: '1' })
  );
  return response.data.results;
}

export async function getMovieDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}`,
    options({ language: 'en-US' })
  );
  return response.data;
}

export async function getMovieCredits(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits`,
    options({ language: 'en-US' })
  );
  return response.data.cast;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews`,
    options({ language: 'en-US', page: '1' })
  );
  return response.data.results;
}
