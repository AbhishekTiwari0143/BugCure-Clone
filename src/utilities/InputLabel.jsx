const InputLabel = ({ id, name }) => {
  return (
    <>
      <li className="flex gap-4 text-lg montserrat font-medium">
        <input
          type="checkbox"
          id={id}
          name={name}
          className="w-4 border-2 border-red-700"
        />
        <label htmlFor={id}>{name}</label>
      </li>
    </>
  );
};

export default InputLabel;
