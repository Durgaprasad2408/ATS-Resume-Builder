
import React from 'react';

const FormField = ({ label, children, className = "" }) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      {children}
    </div>
  );
};

export default FormField;
