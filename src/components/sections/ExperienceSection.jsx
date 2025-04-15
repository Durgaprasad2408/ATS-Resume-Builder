
import React from 'react';
import { Briefcase, X } from 'lucide-react';
import FormField from '../FormField';
import FormRow from '../FormRow';
import InputField from '../InputField';
import DateInputField from '../DateInputField';
import TextareaField from '../TextareaField';
import ResumeFormSection from '../ResumeFormSection';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import AddItemButton from '../AddItemButton';

const ExperienceItem = ({ experience, index, updateExperience, removeExperience }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateExperience(index, { ...experience, [name]: value });
  };

  const addBulletPoint = () => {
    const updatedExp = { ...experience };
    updatedExp.bulletPoints = [...updatedExp.bulletPoints, ''];
    updateExperience(index, updatedExp);
  };

  const updateBulletPoint = (bulletIndex, value) => {
    const updatedExp = { ...experience };
    updatedExp.bulletPoints[bulletIndex] = value;
    updateExperience(index, updatedExp);
  };

  const removeBulletPoint = (bulletIndex) => {
    const updatedExp = { ...experience };
    updatedExp.bulletPoints = updatedExp.bulletPoints.filter((_, i) => i !== bulletIndex);
    updateExperience(index, updatedExp);
  };

  return (
    <div className="p-4 border rounded mb-4 bg-gray-50 relative">
      <div className="absolute top-2 right-2">
        <DeleteButton onClick={() => removeExperience(index)} />
      </div>
      <h4 className="font-medium mb-3">Experience #{index + 1}</h4>
      
      <FormRow>
        <FormField label="Company">
          <InputField
            name="company"
            placeholder="Company Name"
            value={experience.company}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="Position">
          <InputField
            name="position"
            placeholder="Job Title"
            value={experience.position}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField label="Location">
          <InputField
            name="location"
            placeholder="City, State or Remote"
            value={experience.location}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="Employment Type">
          <InputField
            name="employmentType"
            placeholder="Full-time, Part-time, Internship"
            value={experience.employmentType}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField label="Start Date">
          <DateInputField
            name="startDate"
            placeholder="MM/YYYY"
            value={experience.startDate}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="End Date">
          <DateInputField
            name="endDate"
            placeholder="MM/YYYY or Present"
            value={experience.endDate}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Key Achievements / Responsibilities</label>
        {experience.bulletPoints.map((bullet, bulletIndex) => (
          <div key={bulletIndex} className="flex mb-2">
            <span className="mr-2 text-gray-500">•</span>
            <input
              type="text"
              value={bullet}
              onChange={(e) => updateBulletPoint(bulletIndex, e.target.value)}
              placeholder="Used [technology] to achieve [result] which improved [metric] by [amount]"
              className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-resume-purple focus:border-transparent"
            />
            <button 
              type="button" 
              onClick={() => removeBulletPoint(bulletIndex)}
              className="ml-2 p-1 text-gray-500 hover:text-red-500"
              aria-label="Remove bullet point"
            >
              <X size={16} />
            </button>
          </div>
        ))}
        <AddItemButton onClick={addBulletPoint} label="Add Bullet Point" />
      </div>
    </div>
  );
};

const ExperienceSection = ({ 
  experience, 
  updateExperience, 
  addExperience, 
  removeExperience, 
  isOpen, 
  toggleOpen 
}) => {
  return (
    <ResumeFormSection
      title="Work Experience"
      icon={<Briefcase size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      {experience.map((exp, index) => (
        <ExperienceItem
          key={index}
          experience={exp}
          index={index}
          updateExperience={updateExperience}
          removeExperience={removeExperience}
        />
      ))}
      
      <AddButton onClick={addExperience} label="Add Work Experience" />
    </ResumeFormSection>
  );
};

export default ExperienceSection;
