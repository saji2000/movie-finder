import React from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const searchMovie = () => {};
  const movies = [
    { id: 1, title: "John Wick", release_date: "2017" },
    { id: 2, title: "Terminator", release_date: "1999" },
    { id: 3, title: "Parasite", release_date: "2019" },
  ];
  return (
    <div className="home">
      <form onSubmit={searchMovie} className="search-form">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input"
        />
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
