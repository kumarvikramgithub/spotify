import React from 'react'

const TextInput = ({ label, type = 'text', placeholder, className }) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <label for={label} className="py-2 font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        className="p-2 border border-solid border-gray-300 rounded placeholder-gray-500"
      />
    </div>
  );
};

export default TextInput
