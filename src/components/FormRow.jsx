
import React from 'react';

const FormRow = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      {children}
    </div>
  );
};

export default FormRow;
