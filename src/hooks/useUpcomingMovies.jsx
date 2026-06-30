import { API_Options } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch data from TMDB API and updating the store
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_Options,
    );

    const json = await data.json();
    //Putting the data in store
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    if (!upcomingMovies) getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
