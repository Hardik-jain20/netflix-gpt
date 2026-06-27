import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieRecommendation from "./GPTMovieRecommendation";
import { bg_img_URL } from "../utils/const";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={bg_img_URL} alt="Background Image" />
      </div>
      <GPTSearchBar />
      <GPTMovieRecommendation />
    </div>
  );
};

export default GPTSearch;
