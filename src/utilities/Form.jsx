import { useState } from "react";
import InputField from "./InputField";
import InputLabel from "./InputLabel";

const Form = () => {
  const [formValid, SetFormValid] = useState(false);
  const [dataForm, SetDataForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValid) {
      // Form submission logic here
      console.log("Form is valid, submitting data:", dataForm);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form
      data-aos="fade-up"
      className="form w-[90%] m-auto bg-white p-8 rounded-lg md:w-[60%] md:max-w-[60%] grid mt-8 md:mt-auto md:gap-4 box-shadow"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center mb-6 text-3xl md:text-4xl font-semibold text-[#441151]">
        Let&apos;s Talk
      </h1>
      <div className="flex flex-col gap-4">
        <InputField
          placeholder={"Full Name"}
          valid={SetFormValid}
          data={SetDataForm}
        />
        <InputField
          placeholder={"Company Email"}
          valid={SetFormValid}
          data={SetDataForm}
        />
        <InputField
          placeholder={"Mobile Number"}
          valid={SetFormValid}
          data={SetDataForm}
        />
      </div>

      <h2 className="text-xl montserrat font-semibold my-4 md:my-0">
        Request of Services
      </h2>
      <ul className="grid gap-2">
        <InputLabel id="webDev" name="Website Development" />
        <InputLabel id="AppDev" name="App Development" />
        <InputLabel id="ECommerce" name="E-Commerce Development" />
        <InputLabel id="DigitalMarketing" name="Digital Marketing" />
      </ul>

      <button
        type="button"
        className="text-2xl w-max rounded-xl text-white m-auto px-10 py-2 font-medium bg-[#441151] mt-4"
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
