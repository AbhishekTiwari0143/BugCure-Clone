import { useState } from "react";

const InputField = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...others } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <div className="input-field">
        {/* <label htmlFor="">{label}</label> */}
        <input
          {...others}
          onChange={onChange}
          className={`input text-lg text-gray-500 outline-none input-shadow w-full p-1
          border-b-2 focus:border-b-black 
          `}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <h1 className="error text-red-600 text-xs">{errorMessage}</h1>
      </div>
    </div>
  );
};

export default InputField;
