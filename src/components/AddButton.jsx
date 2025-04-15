
import React from 'react';
import { Plus } from 'lucide-react';

const AddButton = ({ onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center px-4 py-2 mt-2 text-sm font-medium text-resume-purple bg-resume-lightPurple rounded hover:bg-opacity-80 transition-colors"
    >
      <Plus size={16} className="mr-1" />
      {label}
    </button>
  );
};

export default AddButton;
