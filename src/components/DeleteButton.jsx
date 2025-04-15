
import React from 'react';
import { Trash2 } from 'lucide-react';

const DeleteButton = ({ onClick }) => {
  return (
    <button 
      type="button" 
      onClick={onClick}
      className="p-1 text-gray-500 hover:text-red-500 transition-colors"
      aria-label="Delete item"
    >
      <Trash2 size={18} />
    </button>
  );
};

export default DeleteButton;
