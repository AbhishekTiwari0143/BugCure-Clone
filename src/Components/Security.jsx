import { useNavigate } from "react-router-dom";

const Security = () => {
  const navigation = useNavigate();
  return (
    <>
      <section className="security h-screen grid place-items-center px-6">
        <div className="container text-2xl text-center">
          <div className="security__inner flex flex-col gap-8">
            <h2 className="security__title">Security</h2>
            <p className="security__text">
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

export default Security;
