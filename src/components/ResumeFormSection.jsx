
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ResumeFormSection = ({ title, icon, children, isOpen, toggleOpen }) => {
  return (
    <div className="mb-6 border rounded-lg shadow-sm bg-white overflow-hidden">
      <button
        className="flex items-center justify-between w-full p-4 text-left bg-white hover:bg-gray-50"
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          {icon}
          <span className="ml-2 font-medium">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="p-4 border-t animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
};

export default ResumeFormSection;
