import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieRecommendation from "./GPTMovieRecommendation";
import { bg_img_URL } from "../utils/const";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img
          className="h-screen object-cover md:h-auto"
          src={bg_img_URL}
          alt="Background Image"
        />
      </div>
      <GPTSearchBar />
      <div>
        <GPTMovieRecommendation />
      </div>
    </>
  );
};

export default GPTSearch;
