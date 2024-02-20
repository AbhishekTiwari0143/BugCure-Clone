import { useState } from "react";
import InputField from "./InputField";
import InputLabel from "./InputLabel";

const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    username: "",
    email: "",
    number: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      errorMessage:
        "Name must be 3-16 letters and shouldn't include special character",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
      errorMessage: "Email must valid",
    },
    {
      id: 3,
      name: "number",
      type: "tel",
      placeholder: "Number",
      label: "Number",
      pattern: "[0-9]{10}",
      required: true,
      errorMessage: "Enter Valid Number",
    },
  ];

  const CheckBox = [
    {
      key: 1,
      id: "webDev",
      name: "Website Development",
    },
    {
      key: 2,
      id: "AppDev",
      name: "App Development",
    },
    {
      key: 3,
      id: "ECommerce",
      name: "E-Commerce Development",
    },
    {
      key: 4,
      id: "DigitalMarketing",
      name: "Digital Marketing",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const enteredValue = values;
    setValues({ name: "", email: "", number: "" });
    console.log(enteredValue);
  };

  return (
    <>
      {!submitted && (
        <form
          onSubmit={handleSubmit}
          data-aos="fade-up"
          className="form w-[90%] m-auto bg-white p-8 rounded-lg md:w-[60%] md:max-w-[60%] grid mt-8 md:mt-auto md:gap-4 box-shadow"
        >
          <h1 className="text-center mb-6 text-3xl md:text-4xl font-semibold text-[#441151]">
            Let&apos;s Talk
          </h1>
          <div className="flex flex-col gap-4">
            {inputs.map((input) => {
              return (
                <InputField
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              );
            })}
          </div>

          <h2 className="text-xl montserrat font-semibold my-4 md:my-0">
            Request of Services
          </h2>
          <ul className="grid gap-2">
            {CheckBox.map((item) => {
              return <InputLabel key={item.key} item={item} />;
            })}
          </ul>

          <button
            type="submit"
            className="text-2xl w-max rounded-xl text-white m-auto px-10 py-2 font-medium bg-[#441151] mt-4"
          >
            Submit
          </button>
        </form>
      )}
      {submitted && (
        <form
          data-aos="fade"
          className="form w-[90%] m-auto bg-white p-8 rounded-lg md:w-[60%] md:max-w-[60%] grid mt-8 md:mt-auto md:gap-4 box-shadow"
        >
          <div className="text-message flex flex-col">
            <h1 className="text-center mb-6 text-3xl md:text-4xl font-semibold text-[#441151]">
              Form Submitted
            </h1>
            <p className="text-center">We Will Contact You Soon!!</p>
          </div>

          <button
            className="text-2xl w-max rounded-xl text-white m-auto px-10 py-2 font-medium bg-[#441151] mt-4"
            onClick={() => {
              setSubmitted(false);
            }}
          >
            Resubmit
          </button>
        </form>
      )}
    </>
  );
};
export default Form;
