import { API_Options } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and updating the store
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_Options,
    );
    const json = await data.json();
    //Putting the data in store
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // if there is no data for now playing movies then only fetch the api call
    if (!nowPlayingMovies) getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
