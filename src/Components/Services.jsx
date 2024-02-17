import ServiceBox from "../utilities/ServiceBox";

const Services = () => (
  <>
    <section className="services py-16">
      <h1 className="title montserrat text-5xl font-semibold text-[#441151] grid text-center py-12 mb-8">
        Services
      </h1>
      <div className="services py-8 grid grid-cols-2 justify-between gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
        <ServiceBox />
      </div>
    </section>
  </>
);

export default Services;
