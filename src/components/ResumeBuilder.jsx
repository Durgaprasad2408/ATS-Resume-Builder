import React, { useState } from 'react';
import { Download, Printer, Save } from 'lucide-react';
import { toast } from "sonner";
import html2pdf from 'html2pdf.js';
import PersonalInfoSection from './sections/PersonalInfoSection';
import SummarySection from './sections/SummarySection';
import EducationSection from './sections/EducationSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import CertificationsSection from './sections/CertificationsSection';
import HobbiesSection from './sections/HobbiesSection';
import ResumePreview from './ResumePreview';

const initialResumeState = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    github: '',
    website: ''
  },
  summary: '',
  education: [],
  experience: [],
  projects: [],
  skills: {
    technical: [],
    soft: [],
    languages: [],
    tools: []
  },
  certifications: [],
  hobbies: []
};

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(initialResumeState);
  const [openSections, setOpenSections] = useState({
    personalInfo: true,
    summary: false,
    education: false,
    experience: false,
    projects: false,
    skills: false,
    certifications: false,
    hobbies: false
  });

  const toggleSection = (section) => {
    setOpenSections({
      ...openSections,
      [section]: !openSections[section]
    });
  };

  const updatePersonalInfo = (updatedInfo) => {
    setResumeData({ ...resumeData, personalInfo: updatedInfo });
  };

  const updateSummary = (updatedSummary) => {
    setResumeData({ ...resumeData, summary: updatedSummary });
  };

  const updateEducation = (index, updatedEducation) => {
    const newEducation = [...resumeData.education];
    newEducation[index] = updatedEducation;
    setResumeData({ ...resumeData, education: newEducation });
  };

  const addEducation = () => {
    const newEducation = {
      institution: '',
      location: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
      gpa: ''
    };
    setResumeData({ ...resumeData, education: [...resumeData.education, newEducation] });
  };

  const removeEducation = (index) => {
    const newEducation = resumeData.education.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, education: newEducation });
  };

  const updateExperience = (index, updatedExperience) => {
    const newExperience = [...resumeData.experience];
    newExperience[index] = updatedExperience;
    setResumeData({ ...resumeData, experience: newExperience });
  };

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      location: '',
      employmentType: '',
      startDate: '',
      endDate: '',
      bulletPoints: ['']
    };
    setResumeData({ ...resumeData, experience: [...resumeData.experience, newExperience] });
  };

  const removeExperience = (index) => {
    const newExperience = resumeData.experience.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, experience: newExperience });
  };

  const updateProject = (index, updatedProject) => {
    const newProjects = [...resumeData.projects];
    newProjects[index] = updatedProject;
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const addProject = () => {
    const newProject = {
      name: '',
      technologies: '',
      startDate: '',
      endDate: '',
      link: '',
      description: '',
      bulletPoints: ['']
    };
    setResumeData({ ...resumeData, projects: [...resumeData.projects, newProject] });
  };

  const removeProject = (index) => {
    const newProjects = resumeData.projects.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, projects: newProjects });
  };

  const updateSkills = (updatedSkills) => {
    setResumeData({ ...resumeData, skills: updatedSkills });
  };

  const updateCertification = (index, updatedCertification) => {
    const newCertifications = [...resumeData.certifications];
    newCertifications[index] = updatedCertification;
    setResumeData({ ...resumeData, certifications: newCertifications });
  };

  const addCertification = () => {
    const newCertification = {
      name: '',
      organization: '',
      date: '',
      link: ''
    };
    setResumeData({ ...resumeData, certifications: [...resumeData.certifications, newCertification] });
  };

  const removeCertification = (index) => {
    const newCertifications = resumeData.certifications.filter((_, i) => i !== index);
    setResumeData({ ...resumeData, certifications: newCertifications });
  };

  const updateHobbies = (hobbies) => {
    setResumeData({ ...resumeData, hobbies });
  };

  const saveResume = () => {
    try {
      const data = JSON.stringify(resumeData);
      localStorage.setItem('savedResume', data);
      toast.success('Resume saved successfully!');
    } catch (error) {
      console.error('Error saving resume:', error);
      toast.error('Failed to save resume. Please try again.');
    }
  };

  const printResume = () => {
    window.print();
  };

  const downloadResume = () => {
    const element = document.getElementById('resume-content');
    
    if (!element) {
      toast.error('Resume content not found. Please try again.');
      return;
    }
    
    toast.success('Preparing your resume for download...');
    
    const clonedElement = element.cloneNode(true);
    
    const container = document.createElement('div');
    container.style.width = '210mm';
    container.style.minHeight = '297mm';
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.top = '0';
    container.style.overflow = 'visible';
    container.appendChild(clonedElement);
    
    document.body.appendChild(container);
    
    const options = {
      margin: [15, 15, 15, 15],
      filename: `${resumeData.personalInfo.fullName || 'Resume'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        scrollY: 0,
        windowWidth: container.scrollWidth + 100,
        windowHeight: container.scrollHeight + 100,
        onclone: function(doc) {
          const content = doc.getElementById('resume-content');
          if (content) {
            content.style.overflow = 'visible';
            content.style.height = 'auto';
            content.style.minHeight = '297mm';
          }
        }
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true,
        precision: 16,
        putOnlyUsedFonts: true,
        floatPrecision: 16
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };
    
    html2pdf()
      .from(clonedElement)
      .set(options)
      .save()
      .then(() => {
        toast.success('Resume downloaded successfully!');
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
        toast.error('Failed to download resume. Please try again.');
        if (document.body.contains(container)) {
          document.body.removeChild(container);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-resume-darkPurple">ResumeCraft ATS Builder</h1>
          <p className="text-gray-600">Create an ATS-friendly resume to help you land your dream job</p>
        </header>

        <div className="resume-container">
          <div className="form-container">
            <PersonalInfoSection
              personalInfo={resumeData.personalInfo}
              updatePersonalInfo={updatePersonalInfo}
              isOpen={openSections.personalInfo}
              toggleOpen={() => toggleSection('personalInfo')}
            />
            
            <SummarySection
              summary={resumeData.summary}
              updateSummary={updateSummary}
              isOpen={openSections.summary}
              toggleOpen={() => toggleSection('summary')}
            />
            
            <EducationSection
              education={resumeData.education}
              updateEducation={updateEducation}
              addEducation={addEducation}
              removeEducation={removeEducation}
              isOpen={openSections.education}
              toggleOpen={() => toggleSection('education')}
            />
            
            <ExperienceSection
              experience={resumeData.experience}
              updateExperience={updateExperience}
              addExperience={addExperience}
              removeExperience={removeExperience}
              isOpen={openSections.experience}
              toggleOpen={() => toggleSection('experience')}
            />
            
            <ProjectsSection
              projects={resumeData.projects}
              updateProject={updateProject}
              addProject={addProject}
              removeProject={removeProject}
              isOpen={openSections.projects}
              toggleOpen={() => toggleSection('projects')}
            />
            
            <SkillsSection
              skills={resumeData.skills}
              updateSkills={updateSkills}
              isOpen={openSections.skills}
              toggleOpen={() => toggleSection('skills')}
            />
            
            <CertificationsSection
              certifications={resumeData.certifications}
              updateCertification={updateCertification}
              addCertification={addCertification}
              removeCertification={removeCertification}
              isOpen={openSections.certifications}
              toggleOpen={() => toggleSection('certifications')}
            />
            
            <HobbiesSection
              hobbies={resumeData.hobbies}
              updateHobbies={updateHobbies}
              isOpen={openSections.hobbies}
              toggleOpen={() => toggleSection('hobbies')}
            />
            
            <div className="mt-6 flex justify-center">
              <button
                className="px-6 py-3 bg-resume-purple text-white rounded-lg font-medium flex items-center hover:bg-resume-darkPurple transition-colors"
                onClick={saveResume}
              >
                <Save size={18} className="mr-2" />
                Save Resume
              </button>
            </div>
          </div>

          <div className="preview-container" id="resume-preview">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-8">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-resume-darkPurple">Resume Preview</h2>
                <div className="flex space-x-2">
                  <button 
                    className="p-2 text-resume-purple hover:bg-resume-lightPurple rounded-full transition-colors"
                    onClick={printResume}
                    aria-label="Print resume"
                  >
                    <Printer size={20} />
                  </button>
                  <button 
                    className="p-2 text-resume-purple hover:bg-resume-lightPurple rounded-full transition-colors"
                    onClick={downloadResume}
                    aria-label="Download resume"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <div className="overflow-auto max-h-[calc(100vh-160px)]">
                <ResumePreview resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;