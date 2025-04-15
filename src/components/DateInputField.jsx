
import React from 'react';

const DateInputField = ({ 
  placeholder = "MM/YYYY", 
  value, 
  onChange, 
  name,
  required = false 
}) => {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-resume-purple focus:border-transparent"
    />
  );
};

export default DateInputField;
