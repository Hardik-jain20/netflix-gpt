import { useDispatch } from "react-redux";
import { addtrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options } from "../utils/const";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // fetch trailer video using movie id && updating the store with the trailer data
  const getMovieVideos = async () => {
    // Remeber to make it dynamic
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        "1084242" +
        "/videos?language=en-US",
      API_Options,
    );
    const json = await data.json();

    // Only need trailer video so using filter
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addtrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
