import InputField from "./InputField";
import InputLabel from "./InputLabel";

const Form = () => (
  <>
    <div className="form w-[90%] m-auto bg-white p-8 rounded-lg md:w-[60%] md:max-w-[60%] grid mt-8 md:mt-auto md:gap-4 box-shadow">
      <h1 className="text-center text-4xl font-semibold text-[#441151]">
        Let&apos;s Talk
      </h1>

      <InputField placeholder={"Full Name"} />
      <InputField placeholder={"Company Email"} />
      <InputField placeholder={"Mobile Number"} />

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
        className="text-2xl w-max rounded-xl text-white m-auto px-10 py-2 font-medium bg-[#441151] mt-4 "
      >
        Submit
      </button>
    </div>
  </>
);

export default Form;
