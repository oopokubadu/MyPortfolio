import React from "react";

function Testimonials() {
  return (
    <div className="bg-[#F3F5F6]">
      <section>
        <div className="px-4 mx-auto rounded-md max-w-3xl sm:px-6 lg:px-8">
          <p className="text-4xl text-center font-semibold leading-relaxed text-[#223247]">
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint non deserunt ullamco”
          </p>
        </div>
      </section>
      <section className="pt-10 2xl:py-24 sm:pt-16 md:pt-0">
        <div className="px-4 mx-auto rounded-md bg-[#e5e6e8] max-w-7xl sm:px-6 lg:px-8">
          <div className="2xl:pl-24">
            <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 2xl:gap-x-20">
              <div className="text-center md:py-16 xl:py-24 md:text-left">
                <blockquote>
                  <p className="text-2xl font-semibold leading-relaxed text-gray-900">
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.”
                  </p>
                </blockquote>
                <div className="mt-6 sm:flex sm:items-baseline sm:justify-center md:justify-start">
                  <p className="text-base font-semibold text-gray-900">
                    Jenny Wilson
                  </p>
                  <p className="mt-2 text-base text-gray-700 sm:mt-0 sm:ml-2">
                    Project Manager at Microsoft
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  className="lg:-mt-24"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/cta/11/smiling-man.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
