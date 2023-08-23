import React from "react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Carousel() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img className="mt-6" src="https://i.imgur.com/5JzWVvz.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mt-6" src="https://i.imgur.com/5JzWVvz.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="mt-6" src="https://i.imgur.com/5JzWVvz.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
