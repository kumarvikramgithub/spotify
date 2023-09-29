import React from 'react'

const TextInput = ({
  label,
  type = "text",
  placeholder,
  className,
  name,
  updateInput,
  values
}) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label htmlFor={label} className="py-2 font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className="p-2 border border-solid border-gray-300 rounded placeholder-gray-500"
        name={name}
        value={values[name]}
        onChange={(e) => { updateInput(e) }}
      />
    </div>
  );
};

export default TextInput
