import React from "react";
import { poster_URL } from "../utils/const";
import { TriangleRightIcon } from "@primer/octicons-react";

const Videotitle = ({ title, description, poster }) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white bg-linear-to-r from-black w-screen aspect-video">
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-gray-400">
        <img className="w-full h-full object-cover" src={poster_URL + poster} />
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-md w-1/2 py-4">{description}</p>
      <div className="">
        <button className="bg-white p-1 px-10 text-black rounded-lg text-lg cursor-pointer hover:opacity-70">
          ▶︎ Play
        </button>
        <button className="bg-gray-600 p-1 px-10 text-white rounded-lg text-lg mx-2 cursor-pointer hover:opacity-70">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default Videotitle;
