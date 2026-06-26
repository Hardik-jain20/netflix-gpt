import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 pl-5">
        <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movie.popularMovies} />
        <MovieList title={"Top Rated"} movies={movie.topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies} />
      </div>
    </div>
  );

  {
    /*
    Movie list - popular
    Movie list - trending
    Movie list - Now playing
      - moviecard * n
    */
  }
};

export default SecondaryContainer;
