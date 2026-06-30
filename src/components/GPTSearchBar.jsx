import React, { useRef } from "react";
import langConst from "../utils/langConst";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_Options } from "../utils/const";
import { addGptMovieResults, addMovieNames } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  //Search movie in tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_Options,
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    // console.log(searchInput.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest 5 movies for the query: " +
      searchInput.current.value +
      ". Only give name of the movies, comma seperated refer the example result give ahead. Example Results: Don, Krish, Ready, Thank You, Kuch Kuch hota hai.";

    //Make an API call to get

    const response = await openai.responses.create({
      model: "gpt-5.4-mini",
      input: gptQuery,
      store: true,
    });

    // Array of the output
    const gptMovies = response.output_text.split(", ");
    dispatch(addMovieNames(gptMovies));
    // For each movie, search on TMDB Api

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie)); // [Promise, Promise, Promise ..] as an o/p due to async func.

    const tmdbResults = await Promise.all(promiseArray);

    //console.log(tmdbResults);
    dispatch(addGptMovieResults(tmdbResults));
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="grid grid-cols-12 bg-black w-full md:w-1/2 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchInput}
          className="p-4 m-4 col-span-9 bg-white rounded-md"
          type="text"
          placeholder={langConst[langKey].SearchBoxPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 rounded-lg text-xl col-span-3 bg-red-600 text-white rounde-lg"
          onClick={handleGPTSearchClick}
        >
          {langConst[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
