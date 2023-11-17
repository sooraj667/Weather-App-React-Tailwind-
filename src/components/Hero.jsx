import React from "react";
import wpic from "../images/Weather-bro.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="overflow-y-auto">
      <div className="text-[28px] text-white font-semibold text-center  md:text-[40px]">
        Weather App
      </div>
      <div className="text-[12px] text-white font-semibold text-center  md:text-[20px] mt-5">
        <button className="bg-blue-800 rounded-xl p-3 md:p-4">
          <Link to="search/"> Get Weather </Link>
        </button>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-around">
        <img src={wpic} alt="" className="w-1/2 md:w-1/3 " />

        <div className="text-[20px] md:text-[30px] font-semibold text-white px-11 text-center">
          Find out Weathers across the globe!
          <div className="mt-1 text-[15px] md:text-[27px] text-center">Get current weather in just one click!</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
