import React from "react";
import Navbar from "./Navbar";
import sunpic from "../images/Happy Sun-rafiki.png";
const SearchWeather = () => {
  return (
    <div>
      <Navbar />
      
      <div className="text-center ">
        <input
          type="text"
          className="rounded-s-3xl p-4 w-1/3  bg-slate-200 "
        />
        <button className="bg-blue-800 rounded-e-3xl p-4 md:p-4 font-semibold text-slate-50 hover:bg-blue-900b ">
          Search
        </button>
      </div>

      <img
        src={sunpic}
        alt=""
        className="w-1/5 items-center mx-auto "
      />

   
    </div>
  );
};

export default SearchWeather;
