import { Services } from "../assets/text.js";
import "./ServiceBox.css";

const ServiceBox = () => {
  return (
    <>
      {Services.map((service) => {
        return (
          <div
            key={service.id}
            className="serviceBox relative h-[200px] rounded-2xl box-shadow md:h-[400px] "
          >
            <div className="overlay w-full h-full absolute bg-[#00000085] rounded-2xl -z-[1] "></div>
            <img
              src={service.image}
              alt="image"
              className="absolute object-cover -z-10 w-[100%] h-[100%] rounded-2xl "
            />
            <div className={`service text-white h-[100%] items-end `}>
              <h1 className="absolute bottom-5 text-2xl md:text-4xl w-[100%] font-semibold text-center px-2">
                {service.title}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceBox;
