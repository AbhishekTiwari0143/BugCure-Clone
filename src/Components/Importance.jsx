import { useNavigate } from "react-router-dom";

const Importance = () => {
  const navigation = useNavigate();

  return (
    <>
      <section className="importance h-screen grid place-items-center px-4">
        <div className="container m-auto text-2xl">
          <div className="importance__inner text-center flex flex-col gap-8">
            <h2 className="importance__title">Importance</h2>
            <p className="importance__text">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorized access or disclosure, we have put in
              place suitable physical, electronic and managerial procedures to
              safeguard and secure the information we collect online.
            </p>
            <button
              className="previous text-2xl px-4 py-2 text-white bg-orange-600 rounded-3xl"
              onClick={() => navigation(-1)}
            >
              Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Importance;
