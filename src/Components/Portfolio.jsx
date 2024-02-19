import { portfolio } from "../assets/text";

import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <section className="linearGradientOrange">
      <div className=" p-4 flex flex-col">
        <h1 className="text-5xl text-white font-bold text-center text-shadow my-12 mb-12">
          Portfolio
        </h1>

        <div className="slides cursor-pointer w-[350px] xs:w-[480px] sm:w-[620px] md:w-[610px] lg:w-[950px] m-auto relative z-10">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              720: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={1000}
            loop={true}
          >
            <div className="swiper-button-prev text-[#ffffff] w-4 show after:hidden">
              <FontAwesomeIcon icon={faAngleLeft} className="hidden sm:block" />
            </div>
            <div className="swiper-button-next text-[#ffffff] w-4 show after:hidden">
              <FontAwesomeIcon
                icon={faAngleRight}
                className="hidden sm:block"
              />
            </div>
            {portfolio.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <img
                    className="rounded-xl box-shadow object-contain"
                    src={item.image}
                    alt="image 1"
                  />
                  <h1 className="text-center text-3xl text-white text-shadow font-light my-2">
                    {item.title}
                  </h1>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
