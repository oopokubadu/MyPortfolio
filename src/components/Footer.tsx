import React from "react";
import Logo from "../assets/Logo/yellalogo.png"

function Footer() {
  return (
    <div className="bg-[#F3F5F6]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid justify-center gap-8 md:grid-cols-2 lg:grid-cols-3 sm:max-w-lg sm:mx-auto lg:max-w-full">
          <div className="flex lg:justify-center lg:border-r-2">
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Navigation
                </a>
              </div>
              <div className="my-4 grid grid-cols-2 ">
                <p className="mr-16 text-gray-700">work</p>
                <p className="text-gray-700">About</p>
                <p className="text-gray-700">Services</p>
                <p className="text-gray-700">Client</p>
              </div>
              <button
                type="button"
                className="hidden cursor-pointer items-center justify-center rounded-lg bg-[#376058] px-4 py-2.5 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text lg:inline-flex"
              >
                Say Hai
              </button>
            </div>
          </div>
          <div className="flex lg:justify-center">
            <div>
              <div className="mb-2 text-left lg:text-center">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block  text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                 <img className="h-9" src={Logo} alt="" /> 
                </a>
              </div>
              <p className="mb-3 text-sm text-left lg:text-center text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <p className="mt-3 text-sm text-left lg:text-center text-gray-700">
                @Copyright 2023 Yella Agency
              </p>
            </div>
          </div>
          <div className="flex lg:justify-center lg:border-l-2">
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Contact
                </a>
              </div>
              <p className="my-1 text-sm text-gray-700">+233503448860</p>
              <p className="my-1 text-sm text-gray-700">+233503448860</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
