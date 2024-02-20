const InputLabel = (props) => {
  console.log(props.item.id);
  return (
    <>
      <li className="flex gap-4 text-lg montserrat font-medium">
        <input
          type="checkbox"
          id={props.item.id}
          name={props.item.name}
          className="w-4 border-2 border-red-700"
        />
        <label htmlFor={props.item.id}>{props.item.name}</label>
      </li>
    </>
  );
};

export default InputLabel;
