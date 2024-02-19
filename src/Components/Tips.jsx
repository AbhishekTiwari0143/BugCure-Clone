import { useNavigate } from "react-router-dom";

const Tips = () => {
  let navigation = useNavigate();

  return (
    <>
      <section className="blogsSection h-[100vh] grid place-items-center px-4">
        <div className="container m-auto flex flex-col gap-10 justify-center items-center">
          <h1 className="text-center">
            10 Proven Tips to Build an Impressive Website
          </h1>
          <button
            className="previous container m-auto w-full text-2xl px-4 py-2 text-white bg-orange-600 rounded-3xl"
            onClick={() => navigation(-1)}
          >
            Back
          </button>
        </div>
      </section>
    </>
  );
};

export default Tips;
