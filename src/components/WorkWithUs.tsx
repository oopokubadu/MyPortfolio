import React from "react";
import Carousel from "./Carousel";

function WorkWithUs() {
  return (
    <div className="bg-[#F3F5F6]">
      <section className="p-6 md:p-10 ">
        <div className="bg-[#EAE9E9] rounded-[3rem] mx-auto max-w-7xl space-y-8 md:space-y-20">
          {/* 1/3 and 2/3 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:p-8">
            <div className="flex flex-col rounded-3xl pt-8 sm:py-8 pl-3 sm:pl-8 ">
              <h2 className="text-2xl font-semibold text-gradient gradient-peach md:text-3xl">
                Why work with us & how we work?
              </h2>
              <div className="flex flex-wrap mt-4">
                <span className=" rounded-full border-2 border-[#376058] px-2  py-1 text-sm font-semibold text-[#376058]">
                  Creative
                </span>
                <span className="md:mt-2 lg:mt-0 md:mx-0 mx-2 lg:mx-2 rounded-full border-2 border-[#376058]  px-2  py-1  text-sm font-semibold text-[#376058]">
                  Out of the Box
                </span>
              </div>
              <div className="mt-6 grid lg:grid-cols-2 items-end flex-1 place-items-center">
                <div className="m-2 md:m-1">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>

                  <h6 className="mb-2 font-semibold leading-5">
                    The quick fox
                  </h6>
                  <p className="mb-3 text-sm text-gray-900">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium rem aperiam.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                  </a>
                </div>
                <div className="m-2 md:m-1">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="mb-2 font-semibold leading-5">
                    The quick fox
                  </h6>
                  <p className="mb-3 text-sm text-gray-900">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium rem aperiam.
                  </p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-3xl p-4 sm:p-8 md:col-span-2">
              <div className="flex flex-wrap justify-between">
                <div className="rounded-[2rem] block lg:max-w-[17rem] p-6 bg-white hover:bg-gray-100">
                  <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900">
                    Evolving ideas into their final form through the development
                  </h5>
                  <div className="mt-8 flex items-center">
                    <img
                      className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                      alt=""
                    />
                    <img
                      className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=687&h=687&q=80"
                      alt=""
                    />
                    <img
                      className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=686&h=686&q=80"
                      alt=""
                    />
                    <img
                      className="h-10 w-10 -mx-1.5 ring ring-white rounded-full object-cover"
                      src="https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=1401&h=1401&q=80"
                      alt=""
                    />
                    <h1 className="text-[#FF7D33] mx-2 font-semibold text-4xl">
                      +
                    </h1>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0 rounded-[2rem] block max-w-md p-6 bg-[#376058]">
                  <h5 className="mb-12 text-xl font-bold tracking-tight text-white">
                    Evolving ideas into their final form through the development
                  </h5>
                  <span className=" rounded-full border-2 border-white px-2 py-1 text-sm font-semibold text-white">
                    Team Work
                  </span>
                </div>
              </div>

           <Carousel/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkWithUs;
