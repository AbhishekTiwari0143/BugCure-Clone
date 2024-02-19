import { useState } from "react";

const InputField = ({ placeholder: name, valid, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      // You can submit the form data here
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Mobile number validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number is invalid";
      valid = false;
    } else {
      newErrors.mobile = "";
    }

    setErrors(newErrors);
    return valid;
  };

  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          className={`text-lg text-gray-500 outline-none input-shadow w-full p-1
          border-b-2 focus:border-b-black 
          
          `}
          placeholder={name}
          name={name}
          // value={formData.name}
          onChange={handleChange}
        />
        {/* {errors && <h1 className="text-red-600">Please enter {name} </h1>} */}
      </div>
    </div>
  );
};

export default InputField;
