import Form from "../utilities/Form";

import { Services, Testimonials, Workflow, Portfolio, Counter } from "./index";

const Home = () => (
  <>
    <div className="linearGradientOrange">
      <div className="pt-8 container m-auto py-12 flex flex-col justify-between gap-6 px-8 lg:gap-12 md:flex-row md:max-w-[1140px]">
        <div className="text w-full text-center">
          <h1
            data-aos="fade-in"
            className="text-[25px] montserrat font-bold text-white text-shadow md:text-[3.7rem] md:text-left"
          >
            Smart Digital Solutions for
            <br className="hidden md:block" />
            Growing Business Needs
          </h1>
          <h3
            data-aos="fade-in"
            className="text-2xl text-white tracking-wider text-shadow mt-4 md:mt-8 montserrat md:text-left md:text-[35px]"
          >
            Satisfaction Guaranteed!
          </h3>
        </div>

        <Form />
      </div>
    </div>
    <Services />
    <Testimonials />
    <Workflow />
    <Portfolio />
    <Counter />
  </>
);

export default Home;
