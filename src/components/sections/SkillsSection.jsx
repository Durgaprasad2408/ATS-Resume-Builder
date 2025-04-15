
import React, { useState } from 'react';
import { Cpu, X } from 'lucide-react';
import FormField from '../FormField';
import FormRow from '../FormRow';
import InputField from '../InputField';
import ResumeFormSection from '../ResumeFormSection';
import Badge from '../Badge';

const SkillsSection = ({ skills, updateSkills, isOpen, toggleOpen }) => {
  const [newTechnicalSkill, setNewTechnicalSkill] = useState('');
  const [newSoftSkill, setNewSoftSkill] = useState('');
  const [newLanguage, setNewLanguage] = useState('');
  const [newTool, setNewTool] = useState('');

  const addSkill = (type, value) => {
    if (!value.trim()) return;
    
    const updatedSkills = { ...skills };
    updatedSkills[type] = [...updatedSkills[type], value.trim()];
    updateSkills(updatedSkills);
    
    switch(type) {
      case 'technical':
        setNewTechnicalSkill('');
        break;
      case 'soft':
        setNewSoftSkill('');
        break;
      case 'languages':
        setNewLanguage('');
        break;
      case 'tools':
        setNewTool('');
        break;
      default:
        break;
    }
  };

  const removeSkill = (type, index) => {
    const updatedSkills = { ...skills };
    updatedSkills[type] = updatedSkills[type].filter((_, i) => i !== index);
    updateSkills(updatedSkills);
  };

  const handleKeyDown = (e, type, value) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill(type, value);
    }
  };

  return (
    <ResumeFormSection
      title="Skills"
      icon={<Cpu size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      <div className="mb-6">
        <FormField label="Technical Skills">
          <div className="flex">
            <InputField
              placeholder="React, Python, SQL, etc."
              value={newTechnicalSkill}
              onChange={(e) => setNewTechnicalSkill(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'technical', newTechnicalSkill)}
            />
            <button
              type="button"
              onClick={() => addSkill('technical', newTechnicalSkill)}
              className="ml-2 px-4 bg-resume-purple text-white rounded hover:bg-resume-darkPurple"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap mt-2">
            {skills.technical.map((skill, index) => (
              <Badge 
                key={index} 
                label={skill} 
                onDelete={() => removeSkill('technical', index)}
              />
            ))}
          </div>
        </FormField>
      </div>

      <div className="mb-6">
        <FormField label="Soft Skills">
          <div className="flex">
            <InputField
              placeholder="Leadership, Communication, etc."
              value={newSoftSkill}
              onChange={(e) => setNewSoftSkill(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'soft', newSoftSkill)}
            />
            <button
              type="button"
              onClick={() => addSkill('soft', newSoftSkill)}
              className="ml-2 px-4 bg-resume-purple text-white rounded hover:bg-resume-darkPurple"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap mt-2">
            {skills.soft.map((skill, index) => (
              <Badge 
                key={index} 
                label={skill} 
                onDelete={() => removeSkill('soft', index)}
              />
            ))}
          </div>
        </FormField>
      </div>

      <div className="mb-6">
        <FormField label="Languages">
          <div className="flex">
            <InputField
              placeholder="English (Native), Spanish (Intermediate)"
              value={newLanguage}
              onChange={(e) => setNewLanguage(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'languages', newLanguage)}
            />
            <button
              type="button"
              onClick={() => addSkill('languages', newLanguage)}
              className="ml-2 px-4 bg-resume-purple text-white rounded hover:bg-resume-darkPurple"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap mt-2">
            {skills.languages.map((language, index) => (
              <Badge 
                key={index} 
                label={language} 
                onDelete={() => removeSkill('languages', index)}
              />
            ))}
          </div>
        </FormField>
      </div>

      <div>
        <FormField label="Tools & Software">
          <div className="flex">
            <InputField
              placeholder="Git, JIRA, Figma, etc."
              value={newTool}
              onChange={(e) => setNewTool(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, 'tools', newTool)}
            />
            <button
              type="button"
              onClick={() => addSkill('tools', newTool)}
              className="ml-2 px-4 bg-resume-purple text-white rounded hover:bg-resume-darkPurple"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap mt-2">
            {skills.tools.map((tool, index) => (
              <Badge 
                key={index} 
                label={tool} 
                onDelete={() => removeSkill('tools', index)}
              />
            ))}
          </div>
        </FormField>
      </div>
    </ResumeFormSection>
  );
};

export default SkillsSection;
