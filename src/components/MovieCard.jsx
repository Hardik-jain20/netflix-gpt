import React from "react";
import { poster_URL } from "../utils/const";

const MovieCard = ({ posterPath }) => {
  // Right now we have removed those movies which don't have posters but we will fix this
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie-Card" src={poster_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
