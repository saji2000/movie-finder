const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`
  );

  const data = await response.json();
  return data.results;
};

export const searchMovies = async () => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${
      process.env.API_KEY
    }&query=${encodedURIComponent(query)}`
  );

  const data = await response.json();
  return data.results;
};
