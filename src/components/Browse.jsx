import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Calling our custom hook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      - Main Container
        - Trailer
        - Title
        - Description
      - Secondary Container
        - Movie list * n
          - cards * n
      */}
    </div>
  );
};

export default Browse;
