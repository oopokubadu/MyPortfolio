import React from "react";

function Hero() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mt-5 max-w-5xl text-left">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-left ">
            <p className="text-lg text-gray-600">
              Preline is a large open-source project, crafted with Tailwind CSS
              framework by Hmlstream.
            </p>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Hero;
