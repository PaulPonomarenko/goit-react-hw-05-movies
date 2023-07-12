const KEY = '9b552d5a8c71a797069fcc867d8581be';
const BASE_URL = 'https://api.themoviedb.org';

export const trendingMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/3/trending/movie/day?api_key=${KEY}`
  );
  if (!response.ok) {
    throw new Error('Уууупсс, что-то пошло не так');
  }

  return response.json();
};

export const filmDetails = async movieId => {
  const response = await fetch(`${BASE_URL}/3/movie/${movieId}?api_key=${KEY}`);
  if (!response.ok) {
    throw new Error('Уууупсс, что-то пошло не так');
  }
  return response.json();
};

export const movieCredits = async () => {
  const response = await fetch();
  if (!response.ok) {
    throw new Error('Уууупсс, что-то пошло не так');
  }
  return response.json();
};

export const movieReviews = async () => {
  const response = await fetch();
  if (!response.ok) {
    throw new Error('Уууупсс, что-то пошло не так');
  }
  return response.json();
};
