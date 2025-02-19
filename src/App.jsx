import React from "react";
import MovieCard from "./components/MovieCard";

const App = () => {
  return (
    <div>
      <MovieCard movie={{ title: "Sajad's Film", release_date: "2024" }} />
    </div>
  );
};

export default App;
