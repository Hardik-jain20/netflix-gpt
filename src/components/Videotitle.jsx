import React from "react";
import { poster_URL } from "../utils/const";
import { TriangleRightIcon } from "@primer/octicons-react";

const Videotitle = ({ title, description, poster }) => {
  return (
    <div className="pt-[35%] md:pt-[20%] px-6 md:px-10 absolute text-white bg-linear-to-r from-black w-screen aspect-video">
      <div className="hidden md:inline-block w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-gray-400">
        <img className="w-full h-full object-cover" src={poster_URL + poster} />
      </div>
      <h1 className="text-lg md:text-3xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-md w-1/2 py-4">{description}</p>
      <div className="">
        <button className="bg-white py-1 px-3  md:p-1 md:px-10 text-black rounded-lg text-lg cursor-pointer hover:opacity-70 md:my-0 my-2">
          ▶︎ Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 p-1 px-10 text-white rounded-lg text-lg mx-2 cursor-pointer hover:opacity-70">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
