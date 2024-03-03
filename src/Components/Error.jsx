const Error = () => {
  return (
    <section className="error grid place-items-center h-screen">
      <div className="text text-2xl md:text-5xl">
        <h1>This page does not seem to exist.</h1>
        <p className="text-xl md:text-3xl">
          It looks like the link pointing here was faulty. Maybe try searching?
        </p>
      </div>
    </section>
  );
};

export default Error;
