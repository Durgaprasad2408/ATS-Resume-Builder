
import React from 'react';

const TextareaField = ({ 
  placeholder = "", 
  value, 
  onChange, 
  name,
  rows = 4,
  required = false 
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      required={required}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-resume-purple focus:border-transparent"
    />
  );
};

export default TextareaField;
