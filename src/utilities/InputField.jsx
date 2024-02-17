import { useState } from "react";

const InputField = ({ placeholder: name }) => {
  const [inputValue, setInputValue] = useState("");
  const [isError, SetIsError] = useState(false);
  const [EmailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    // Handle Email
    // if (
    //   name.includes("Email") &&
    //   inputValue.trim() &&
    //   !inputValue.includes("@") &&
    //   !inputValue.includes(".g")
    // ) {
    //   console.log("yes");
    //   setEmailError(true);
    // } else {
    //   console.log("No");
    //   setEmailError(false);
    // }
  };

  const handleFocus = () => {
    if (inputValue.trim().length === 0) {
      console.log("nice");
      SetIsError(true);
    } else {
      SetIsError(false);
    }

    // Handle Email
    // if (
    //   name.includes("Email") &&
    //   inputValue.trim() &&
    //   !inputValue.includes("@") &&
    //   !inputValue.includes(".g")
    // ) {
    //   console.log("yes");
    //   setEmailError(true);
    // } else {
    //   console.log("No");
    //   setEmailError(false);
    // }
  };

  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          className={`text-base text-gray-500 outline-none input-shadow w-full p-1
          border-b-2 focus:border-b-black ${isError && "border-b-red-500"}`}
          placeholder={name}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleFocus}
        />
        {EmailError && <h1 className="text-red-600">Please enter {name} </h1>}
      </div>
    </div>
  );
};

export default InputField;
