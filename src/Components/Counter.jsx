const Counter = () => (
  <section>
    <div className="my-14 md:my-10">
      <div className="data text-[rgb(68,17,81)] font-semibold flex justify-around items-center mb-16 text-center">
        <div className="Clients px-2">
          <h1 className="text-3xl font-bold sm:text-7xl">20+</h1>
          <h2 className="sm:text-2xl text-gray-600">Happy Clients</h2>
        </div>
        <div className="business">
          <h1 className="text-3xl font-bold sm:text-7xl">90%</h1>
          <h2 className="sm:text-2xl text-gray-600">Repeat Business</h2>
        </div>
        <div className="rating">
          <h1 className="text-3xl font-bold sm:text-7xl">4.5*</h1>
          <h2 className="sm:text-2xl text-gray-600">Avg. Ratings</h2>
        </div>
      </div>

      <div className="button flex justify-center">
        <button
          className="flex text-xl px-6 py-2 text-white bg-[#441151] font-semibold rounded-full text-shadow md:py-2 md:px-8 md:text-2xl"
          type="button"
        >
          Contact Us
        </button>
      </div>
    </div>
  </section>
);

export default Counter;
