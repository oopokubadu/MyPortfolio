import React from "react";

function Footer() {
  return (
    <div className="bg-[#F3F5F6]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-6xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="flex lg:border-r-2">
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Navigation
                </a>
              </div>
              <div className="my-4 grid grid-cols-2 ">
                <p className=" text-gray-700">work</p>
                <p className=" text-gray-700">About</p>
                <p className=" text-gray-700">Services</p>
                <p className=" text-gray-700">Client</p>
              </div>
              <button
                type="button"
                className="hidden cursor-pointer items-center justify-center rounded-lg bg-[#376058] px-4 py-2.5 text-base font-normal text-white shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text lg:inline-flex"
              >
                Get in touch
              </button>
            </div>
          </div>
          <div className="flex lg:border-r-2">
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Pizza, you should try it
                </a>
              </div>
              <p className="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <a href="/" aria-label="Author" title="Author" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Alex Stratulat
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div>
              <div className="mb-2">
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Whatever, just feed me
                </a>
              </div>
              <p className="mb-5 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <div className="flex items-center">
                <a href="/" aria-label="Author" title="Author" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Susie the Cat
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
