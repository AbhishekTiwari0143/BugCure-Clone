// Import Swiper styles

import Testimonial from "../utilities/Testimonial";

const Testimonials = () => {
  return (
    <section className="linearGradientOrange relative">
      <div className="container py-8 testimonials flex flex-col justify-around items-center m-auto px-4 md:px-6 md:flex-row">
        <h1 className="text-center text-4xl font-semibold montserrat text-white text-shadow md:text-5xl">
          Client <br /> Testimonials
        </h1>
        <div className="w-full md:w-1/2 h-auto px-4 bg-white rounded-2xl md:px-6 lg:w-[698px] mt-8">
          <div className="slides bg-white md:bg-transparent ">
            <Testimonial />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
