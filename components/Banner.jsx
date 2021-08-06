import React from "react";

function Banner() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: "url(https://links.papareact.com/0fm)",
      }}>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg -mt-4">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white rounded-full px-7 py-3 sm:px-10 sm:py-4 shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 outline-none text-sm sm:text-base">
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
