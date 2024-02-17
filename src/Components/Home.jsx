import Form from "../utilities/Form";

const Home = () => (
  <>
    <div className="linearGradientOrange">
      <div className="pt-8 container m-auto py-12 flex flex-col justify-between  md:gap-12 md:flex-row md:max-w-[1140px]">
        <div className="text w-full text-center">
          <h1 className="text-[25px] montserrat font-bold text-white text-shadow md:text-[3.7rem] md:text-left">
            Smart Digital Solutions for
            <br className="hidden md:block" />
            Growing Business Needs
          </h1>
          <h3 className="text-2xl text-white tracking-wider text-shadow mt-4 md:mt-8 montserrat md:text-left md:text-[35px]">
            Satisfaction Guaranteed!
          </h3>
        </div>

        <Form />
      </div>
    </div>
  </>
);

export default Home;
