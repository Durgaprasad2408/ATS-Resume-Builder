
import React from 'react';
import { Plus } from 'lucide-react';

const AddItemButton = ({ onClick, label }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center px-3 py-1 text-xs font-medium text-resume-purple hover:bg-resume-lightPurple rounded transition-colors"
    >
      <Plus size={14} className="mr-1" />
      {label}
    </button>
  );
};

export default AddItemButton;
