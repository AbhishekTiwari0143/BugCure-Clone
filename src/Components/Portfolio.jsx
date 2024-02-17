import portfolio1 from "../assets/client-1.webp";
import portfolio2 from "../assets/client-2.webp";
import portfolio3 from "../assets/client-3.webp";
import portfolio4 from "../assets/client-4.webp";

import { A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: "Myiaar International",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Beat Coffee",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Portfolio",
  },
  {
    id: 4,
    image: portfolio4,
    title: "DSK Artist",
  },
];

const Portfolio = () => {
  return (
    <section className="linearGradientOrange">
      <div className="container m-auto p-4 sm:p-16 flex flex-col">
        <h1 className="text-5xl text-white font-bold text-center text-shadow my-12 mb-12">
          Portfolio
        </h1>
        <div className=" w-[350px] sm:w-[400px] lg:w-[950px] m-auto">
          <Swiper
            // install Swiper modules
            modules={[Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1000: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            speed={1000}
            loop={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <div className="w-[100px] sm:w-[500px] lg:w-[500px]">
              {data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <img
                      className="rounded-xl box-shadow object-contain w-[400px]"
                      src={item.image}
                      alt="image 1"
                    />
                    <h1 className="text-center text-3xl text-white text-shadow font-light my-2">
                      {item.title}
                    </h1>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
