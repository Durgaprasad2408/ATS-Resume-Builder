
import React from 'react';
import { GraduationCap, X } from 'lucide-react';
import FormField from '../FormField';
import FormRow from '../FormRow';
import InputField from '../InputField';
import DateInputField from '../DateInputField';
import ResumeFormSection from '../ResumeFormSection';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

const EducationItem = ({ education, index, updateEducation, removeEducation }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateEducation(index, { ...education, [name]: value });
  };

  return (
    <div className="p-4 border rounded mb-4 bg-gray-50 relative">
      <div className="absolute top-2 right-2">
        <DeleteButton onClick={() => removeEducation(index)} />
      </div>
      <h4 className="font-medium mb-3">Education #{index + 1}</h4>
      
      <FormField label="Institution">
        <InputField
          name="institution"
          placeholder="University/College Name"
          value={education.institution}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Location">
        <InputField
          name="location"
          placeholder="City, State"
          value={education.location}
          onChange={handleChange}
        />
      </FormField>

      <FormRow>
        <FormField label="Degree">
          <InputField
            name="degree"
            placeholder="Bachelor of Science"
            value={education.degree}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="Field of Study">
          <InputField
            name="fieldOfStudy"
            placeholder="Computer Science"
            value={education.fieldOfStudy}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormRow>
        <FormField label="Start Date">
          <DateInputField
            name="startDate"
            placeholder="MM/YYYY"
            value={education.startDate}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="End Date (or Expected)">
          <DateInputField
            name="endDate"
            placeholder="MM/YYYY or Present"
            value={education.endDate}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormField label="GPA (Optional)">
        <InputField
          name="gpa"
          placeholder="3.8/4.0"
          value={education.gpa}
          onChange={handleChange}
        />
      </FormField>
    </div>
  );
};

const EducationSection = ({ education, updateEducation, addEducation, removeEducation, isOpen, toggleOpen }) => {
  return (
    <ResumeFormSection
      title="Education"
      icon={<GraduationCap size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      {education.map((edu, index) => (
        <EducationItem
          key={index}
          education={edu}
          index={index}
          updateEducation={updateEducation}
          removeEducation={removeEducation}
        />
      ))}
      
      <AddButton onClick={addEducation} label="Add Education" />
    </ResumeFormSection>
  );
};

export default EducationSection;
