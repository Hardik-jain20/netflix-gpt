import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieRecommendation = () => {
  const { movieNames, gptMovieResult } = useSelector((store) => store.gpt);

  return (
    <div className="bg-black text-white opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptMovieResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieRecommendation;
