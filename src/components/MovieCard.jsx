import React from "react";
import { poster_URL } from "../utils/const";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie-Card" src={poster_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
