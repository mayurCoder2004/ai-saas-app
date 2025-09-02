import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-gradient-to-b from-white via-brandYellow/20 to-white bg-cover bg-no-repeat min-h-screen">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]">
          Create amazing content <br /> with{" "}
          <span className="bg-gradient-to-r from-brandBlue via-brandOrange to-brandYellow bg-clip-text text-transparent">
            AI tools
          </span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-700">
          Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-gradient-to-r from-brandBlue via-brandOrange to-brandYellow text-white px-10 py-3 rounded-lg shadow-md hover:opacity-90 active:scale-95 transition cursor-pointer"
        >
          Start creating now
        </button>
        <button className="bg-white px-10 py-3 rounded-lg border border-gray-300 text-brandDark hover:bg-brandYellow/20 hover:border-brandOrange active:scale-95 transition cursor-pointer">
          Watch demo
        </button>
      </div>

      {/* Trusted Users */}
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-700">
        <img src={assets.user_group} alt="" className="h-8" />
        Trusted by <span className="text-brandOrange font-semibold">10k+</span> people
      </div>
    </div>
  );
};

export default Hero;
