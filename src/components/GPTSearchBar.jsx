import React from "react";
import langConst from "../utils/langConst";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="grid grid-cols-12 bg-black w-1/2 rounded-lg">
        <input
          className="p-4 m-4 col-span-9 bg-white rounded-md"
          type="text"
          placeholder={langConst[langKey].SearchBoxPlaceHolder}
        />
        <button className="py-2 px-4 m-4 rounded-lg text-xl col-span-3 bg-red-600 text-white rounde-lg">
          {langConst[langKey].Search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
