// Import Swiper styles

import Testimonial from "../utilities/Testimonial";

const Testimonials = () => {
  return (
    <section className="linearGradientOrange relative py-8 testimonials flex flex-col justify-around items-center m-auto md:flex-row">
      <h1
        className="text-center text-4xl
       md:text-5xl font-semibold montserrat text-white text-shadow"
      >
        Client <br /> Testimonials
      </h1>
      <div className="w-full h-auto px-4 md:px-6 md:w-[698px] mt-8">
        <div className="slides bg-white rounded-2xl md:bg-transparent ">
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
