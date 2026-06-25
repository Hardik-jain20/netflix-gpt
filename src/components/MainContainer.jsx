import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBg from "./VideoBg";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movie?.nowPlayingMovies);
  // if movies is empty like it didn't rendered till that continue the process
  if (!movies) return;

  const mainMovie = movies[0];
  const { title, overview, poster_path, id } = mainMovie;
  return (
    <div>
      <Videotitle title={title} description={overview} poster={poster_path} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
