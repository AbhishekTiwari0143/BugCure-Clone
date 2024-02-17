import { Navigation, A11y, Autoplay } from "swiper/modules";

import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { testimonials } from "../assets/text";

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      speed={1000}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <div className="swiper-button-prev text-[#441151] w-4 show after:hidden">
        <FontAwesomeIcon icon={faAngleLeft} className="hidden sm:block" />
      </div>
      <div className="swiper-button-next text-[#441151] w-4 show after:hidden">
        <FontAwesomeIcon icon={faAngleRight} className="hidden sm:block" />
      </div>
      {testimonials.map((Testimonial) => {
        return (
          <SwiperSlide key={Testimonial.id}>
            <div className="max-w-[698px] flex flex-col justify-center items-center cursor-pointer md:bg-white md:box-shadow rounded-2xl p-4 md:p-6 md:pb-16">
              <img
                src={Testimonial.image}
                alt="image profile"
                className="w-[150px] rounded-full object-cover"
              />
              <div className="name flex flex-col items-center gap-2 my-4">
                <h1 className="text-3xl font-semibold text-[#441151]">
                  {Testimonial.name}
                </h1>
                <p className="text-gray-600">{Testimonial.subtitle}</p>
              </div>
              <p className="text-center text-gray-600 text-base sm:text-xl">
                {Testimonial.description}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonial;
