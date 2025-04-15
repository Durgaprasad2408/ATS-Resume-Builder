
import React from 'react';
import { FileText } from 'lucide-react';
import FormField from '../FormField';
import TextareaField from '../TextareaField';
import ResumeFormSection from '../ResumeFormSection';

const SummarySection = ({ summary, updateSummary, isOpen, toggleOpen }) => {
  const handleChange = (e) => {
    updateSummary(e.target.value);
  };

  return (
    <ResumeFormSection
      title="Professional Summary"
      icon={<FileText size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      <FormField label="Summary (3-4 sentences highlighting your qualifications)">
        <TextareaField
          name="summary"
          placeholder="Experienced software engineer with a track record of developing scalable applications..."
          value={summary}
          onChange={handleChange}
          rows={4}
        />
      </FormField>
      <p className="text-sm text-gray-500 mt-2">
        Pro tip: Include keywords from the job description and focus on your strongest qualifications.
      </p>
    </ResumeFormSection>
  );
};

export default SummarySection;
