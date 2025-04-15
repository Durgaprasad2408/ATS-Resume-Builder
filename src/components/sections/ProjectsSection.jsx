
import React from 'react';
import { Code, X } from 'lucide-react';
import FormField from '../FormField';
import FormRow from '../FormRow';
import InputField from '../InputField';
import DateInputField from '../DateInputField';
import TextareaField from '../TextareaField';
import ResumeFormSection from '../ResumeFormSection';
import DeleteButton from '../DeleteButton';
import AddButton from '../AddButton';
import AddItemButton from '../AddItemButton';

const ProjectItem = ({ project, index, updateProject, removeProject }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateProject(index, { ...project, [name]: value });
  };

  const addBulletPoint = () => {
    const updatedProject = { ...project };
    updatedProject.bulletPoints = [...updatedProject.bulletPoints, ''];
    updateProject(index, updatedProject);
  };

  const updateBulletPoint = (bulletIndex, value) => {
    const updatedProject = { ...project };
    updatedProject.bulletPoints[bulletIndex] = value;
    updateProject(index, updatedProject);
  };

  const removeBulletPoint = (bulletIndex) => {
    const updatedProject = { ...project };
    updatedProject.bulletPoints = updatedProject.bulletPoints.filter((_, i) => i !== bulletIndex);
    updateProject(index, updatedProject);
  };

  return (
    <div className="p-4 border rounded mb-4 bg-gray-50 relative">
      <div className="absolute top-2 right-2">
        <DeleteButton onClick={() => removeProject(index)} />
      </div>
      <h4 className="font-medium mb-3">Project #{index + 1}</h4>
      
      <FormField label="Project Name">
        <InputField
          name="name"
          placeholder="Project Title"
          value={project.name}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Technologies Used">
        <InputField
          name="technologies"
          placeholder="React, Node.js, MongoDB, etc."
          value={project.technologies}
          onChange={handleChange}
        />
      </FormField>

      <FormRow>
        <FormField label="Start Date">
          <DateInputField
            name="startDate"
            placeholder="MM/YYYY"
            value={project.startDate}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField label="End Date">
          <DateInputField
            name="endDate"
            placeholder="MM/YYYY or Present"
            value={project.endDate}
            onChange={handleChange}
          />
        </FormField>
      </FormRow>

      <FormField label="Project Link (Optional)">
        <InputField
          name="link"
          placeholder="https://github.com/yourusername/project"
          value={project.link}
          onChange={handleChange}
        />
      </FormField>

      <FormField label="Description">
        <TextareaField
          name="description"
          placeholder="Brief description of the project"
          value={project.description}
          onChange={handleChange}
          rows={2}
        />
      </FormField>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-2">Key Features / Accomplishments</label>
        {project.bulletPoints.map((bullet, bulletIndex) => (
          <div key={bulletIndex} className="flex mb-2">
            <span className="mr-2 text-gray-500">•</span>
            <input
              type="text"
              value={bullet}
              onChange={(e) => updateBulletPoint(bulletIndex, e.target.value)}
              placeholder="Implemented [feature] resulting in [benefit]"
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

const ProjectsSection = ({ projects, updateProject, addProject, removeProject, isOpen, toggleOpen }) => {
  return (
    <ResumeFormSection
      title="Projects"
      icon={<Code size={18} />}
      isOpen={isOpen}
      toggleOpen={toggleOpen}
    >
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          project={project}
          index={index}
          updateProject={updateProject}
          removeProject={removeProject}
        />
      ))}
      
      <AddButton onClick={addProject} label="Add Project" />
    </ResumeFormSection>
  );
};

export default ProjectsSection;
