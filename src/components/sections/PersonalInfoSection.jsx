
import React from 'react';
import { User } from 'lucide-react';
import FormField from '../FormField';
import FormRow from '../FormRow';
import InputField from '../InputField';
import ResumeFormSection from '../ResumeFormSection';

const PersonalInfoSection = ({ personalInfo, updatePersonalInfo, isOpen, toggleOpen }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <ResumeFormSection
      title="Personal Information"
      icon={<User size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      <FormField label="Full Name">
        <InputField
          name="fullName"
          placeholder="Your full name"
          value={personalInfo.fullName}
          onChange={handleChange}
          required
        />
      </FormField>

      <FormRow>
        <FormField label="Email">
          <InputField
            type="email"
            name="email"
            placeholder="email@example.com"
            value={personalInfo.email}
            onChange={handleChange}
            required
          />
        </FormField>
        
        <FormField label="Phone">
          <InputField
            name="phone"
            placeholder="(123) 456-7890"
            value={personalInfo.phone}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormField label="Location">
        <InputField
          name="location"
          placeholder="City, State"
          value={personalInfo.location}
          onChange={handleChange}
        />
      </FormField>

      <FormRow>
        <FormField label="LinkedIn">
          <InputField
            name="linkedin"
            placeholder="linkedin.com/in/yourprofile"
            value={personalInfo.linkedin}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="GitHub">
          <InputField
            name="github"
            placeholder="github.com/yourusername"
            value={personalInfo.github}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormField label="Personal Website (Optional)">
        <InputField
          name="website"
          placeholder="yourwebsite.com"
          value={personalInfo.website}
          onChange={handleChange}
        />
      </FormField>
    </ResumeFormSection>
  );
};

export default PersonalInfoSection;
