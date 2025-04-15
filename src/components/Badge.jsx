
import React from 'react';
import { X } from 'lucide-react';

const Badge = ({ label, onDelete }) => {
  return (
    <div className="inline-flex items-center bg-resume-lightPurple text-resume-darkPurple text-sm rounded-full px-3 py-1 m-1">
      <span>{label}</span>
      {onDelete && (
        <button 
          onClick={onDelete} 
          className="ml-1 hover:text-resume-purple" 
          aria-label="Remove item"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
};

export default Badge;
