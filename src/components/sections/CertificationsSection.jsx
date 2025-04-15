
import React from 'react';
import { Award } from 'lucide-react';
import FormField from '../FormField';
import FormRow from '../FormRow';
import InputField from '../InputField';
import DateInputField from '../DateInputField';
import ResumeFormSection from '../ResumeFormSection';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';

const CertificationItem = ({ certification, index, updateCertification, removeCertification }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateCertification(index, { ...certification, [name]: value });
  };

  return (
    <div className="p-4 border rounded mb-4 bg-gray-50 relative">
      <div className="absolute top-2 right-2">
        <DeleteButton onClick={() => removeCertification(index)} />
      </div>
      <h4 className="font-medium mb-3">Certification #{index + 1}</h4>
      
      <FormField label="Certification/Achievement Name">
        <InputField
          name="name"
          placeholder="AWS Solutions Architect"
          value={certification.name}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Issuing Organization">
        <InputField
          name="organization"
          placeholder="Amazon Web Services"
          value={certification.organization}
          onChange={handleChange}
        />
      </FormField>

      <FormRow>
        <FormField label="Date">
          <DateInputField
            name="date"
            placeholder="MM/YYYY"
            value={certification.date}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="Link (Optional)">
          <InputField
            name="link"
            placeholder="URL to certification"
            value={certification.link}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>
    </div>
  );
};

const CertificationsSection = ({ 
  certifications, 
  updateCertification, 
  addCertification, 
  removeCertification,
  isOpen,
  toggleOpen
}) => {
  return (
    <ResumeFormSection
      title="Certifications or Achievements"
      icon={<Award size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      {certifications.map((certification, index) => (
        <CertificationItem
          key={index}
          certification={certification}
          index={index}
          updateCertification={updateCertification}
          removeCertification={removeCertification}
        />
      ))}
      
      <AddButton onClick={addCertification} label="Add Certification" />
    </ResumeFormSection>
  );
};

export default CertificationsSection;
