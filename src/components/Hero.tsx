import React from "react";

function Hero() {
  return (
    <div>
      <div className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mt-5 max-w-5xl text-left">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl">
              Consider us your digital storytellers. With us you get end-to-end
              product development and marketing expertise. Join us as we weave
              tales of success and explore the rich tapestry of innovation.
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-left ">
            <p className="text-lg text-gray-600">
              “Building products and Marketing magic, all in on place”
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white pt-12 sm:pt-16 lg:pt-20 xl:pt-24">
        <div className="bg-[#F3F5F6]">
          <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex lg:h-[20rem] flex-wrap justify-between">
              <div className="max-w-md  lg:-mt-[3rem] mx-auto text-center  lg:mx-0 lg:text-left">
                <p className="mt-4 text-7xl font-medium text-[#FF7D34] lg:mt-6">
                  *
                </p>
                <p className="text-lg font-medium text-gray-900">Branding</p>
                <p className="mt-4 text-lg font-medium text-gray-900 lg:mt-6">
                  Product Development
                </p>
                <p className="mt-4 text-lg font-medium text-gray-900 lg:mt-6">
                  Marketing
                </p>
                <p className="mt-4 text-lg font-medium text-gray-900 lg:mt-6">
                  Photography/Videography:
                </p>
              </div>
              <div className=" flex flex-col items-start md:flex-row mx-auto lg:mx-0 gap-10">
                <div className="max-w-xl mx-auto ">
                  <img
                    className="h-auto mt-6 md:mt-[5.8rem] max-w-sm rounded-3xl lg:-mt-[3rem]"
                    src="https://placehold.co/300x350"
                    alt=""
                  />
                </div>
                <div className="max-w-xl mx-auto">
                  <img
                    className="h-auto md:mt-10 max-w-sm rounded-3xl lg:-mt-[6rem]"
                    src="https://placehold.co/300x400"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <section className="py-12 sm:py-16 lg:py-20">
              <div className="mx-auto max-w-7xl">
                <div className="xl:flex xl:items-center xl:justify-between">
                  <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-5 lg:gap-x-8">
                    <img
                      className="object-contain w-auto mx-auto h-9"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg"
                      alt=""
                    />
                    <img
                      className="object-contain w-auto mx-auto h-9"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-squarestone.svg"
                      alt=""
                    />
                    <img
                      className="object-contain w-auto mx-auto h-9"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-martino.svg"
                      alt=""
                    />
                    <img
                      className="object-contain w-auto mx-auto h-9"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-waverio.svg"
                      alt=""
                    />
                    <img
                      className="object-contain w-auto mx-auto h-9"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/brands/1/logo-vertex.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
