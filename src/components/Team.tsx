import React from "react";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function Team() {
  return (
    <div className="bg-[#F3F5F6]">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="px-2 mx-auto mb-10 lg:max-w-2xl sm:text-center">
          <h1 className="inline-block py-px mb-4 text-3xl font-semibold">
            The A-Team
          </h1>
          <p className="text-sm text-gray-700">
            “Turning ideas into reality with efficiency and finesse”
          </p>
        </div>
        <div className="mx-auto px-2">
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            // pagination={{ clickable: true }}
            breakpoints={{
              0: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              375: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              575: {
                spaceBetween: 10,
                slidesPerView: 1,
              },
              767: {
                spaceBetween: 10,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 10,
                slidesPerView: 4,
              },
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4 shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full  rounded-3xl"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">Oliver Aguilerra</p>
                  <p className="mb-5 text-xs text-gray-800">Product Manager</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4 shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">Marta Clermont</p>
                  <p className="mb-5 text-xs text-gray-800">Design Team Lead</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4  shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">Alice Melbourne</p>
                  <p className="mb-5 text-xs text-gray-800">Human Resources</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4 shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="mb-5 text-xs text-gray-800">Good guy</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4 shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">Oliver Aguilerra</p>
                  <p className="mb-5 text-xs text-gray-800">Product Manager</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4 shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">Marta Clermont</p>
                  <p className="mb-5 text-xs text-gray-800">Design Team Lead</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4  shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">Alice Melbourne</p>
                  <p className="mb-5 text-xs text-gray-800">Human Resources</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <div className="relative pb-56 mb-4 shadow lg:pb-64">
                  <img
                    className="absolute object-cover w-full h-full rounded-3xl"
                    src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="Person"
                  />
                </div>
                <div className="flex flex-col sm:text-left">
                  <p className="text-lg font-bold">John Doe</p>
                  <p className="mb-5 text-xs text-gray-800">Good guy</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Team;
