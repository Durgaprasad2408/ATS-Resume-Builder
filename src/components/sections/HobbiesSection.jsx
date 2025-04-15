
import React from 'react';
import { Dumbbell } from 'lucide-react';
import ResumeFormSection from '../ResumeFormSection';
import InputField from '../InputField';
import Badge from '../Badge';

const HobbiesSection = ({ hobbies, updateHobbies, isOpen, toggleOpen }) => {
  const [newHobby, setNewHobby] = React.useState('');

  const handleAddHobby = () => {
    if (newHobby.trim()) {
      updateHobbies([...hobbies, newHobby.trim()]);
      setNewHobby('');
    }
  };

  const handleRemoveHobby = (index) => {
    const updatedHobbies = hobbies.filter((_, i) => i !== index);
    updateHobbies(updatedHobbies);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddHobby();
    }
  };

  return (
    <ResumeFormSection
      title="Hobbies & Interests"
      icon={<Dumbbell size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      <div className="mb-4">
        <div className="flex items-end gap-2 mb-3">
          <div className="flex-grow">
            <InputField
              placeholder="Add a hobby or interest"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          <button
            type="button"
            className="px-4 py-2 bg-resume-purple text-white rounded hover:bg-resume-darkPurple transition-colors"
            onClick={handleAddHobby}
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {hobbies.map((hobby, index) => (
            <Badge
              key={index}
              text={hobby}
              onRemove={() => handleRemoveHobby(index)}
            />
          ))}
        </div>
      </div>
    </ResumeFormSection>
  );
};

export default HobbiesSection;
