import React from 'react';

const ResumePreview = ({ resumeData }) => {
  const { 
    personalInfo, 
    summary, 
    education, 
    experience, 
    projects, 
    skills, 
    certifications,
    hobbies 
  } = resumeData;

  return (
    <div className="bg-white p-8 text-left text-sm w-full overflow-visible" id="resume-content">
      {/* Header / Personal Info */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-resume-charcoal">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <div className="flex flex-wrap justify-center gap-x-3 mt-1 text-sm text-resume-gray">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 mt-1 text-xs text-resume-purple">
          {personalInfo.linkedin && <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>}
          {personalInfo.github && <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>}
          {personalInfo.website && <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:underline">Portfolio</a>}
        </div>
      </div>

      {/* Professional Summary */}
      {summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Professional Summary
          </h2>
          <p className="text-sm">{summary}</p>
        </div>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 || skills.soft.length > 0 || skills.languages.length > 0 || skills.tools.length > 0) && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Skills
          </h2>
          
          {skills.technical.length > 0 && (
            <div className="mb-1">
              <span className="font-semibold">Technical Skills:</span>{" "}
              {skills.technical.join(", ")}
            </div>
          )}
          
          {skills.soft.length > 0 && (
            <div className="mb-1">
              <span className="font-semibold">Soft Skills:</span>{" "}
              {skills.soft.join(", ")}
            </div>
          )}
          
          {skills.languages.length > 0 && (
            <div className="mb-1">
              <span className="font-semibold">Languages:</span>{" "}
              {skills.languages.join(", ")}
            </div>
          )}
          
          {skills.tools.length > 0 && (
            <div>
              <span className="font-semibold">Tools & Software:</span>{" "}
              {skills.tools.join(", ")}
            </div>
          )}
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Experience
          </h2>
          
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{exp.position}</h3>
                  <p className="text-resume-darkPurple">{exp.company} | {exp.location}</p>
                </div>
                <p className="text-xs">
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <ul className="list-disc ml-5 mt-1">
                {exp.bulletPoints.filter(bullet => bullet.trim() !== '').map((bullet, i) => (
                  <li key={i} className="text-sm">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Education
          </h2>
          
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{edu.degree} in {edu.fieldOfStudy}</h3>
                  <p className="text-resume-darkPurple">{edu.institution} | {edu.location}</p>
                </div>
                <p className="text-xs">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
              {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Projects
          </h2>
          
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">
                    {project.name}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-1 text-resume-purple text-xs hover:underline"
                      >
                        [Link]
                      </a>
                    )}
                  </h3>
                  <p className="text-resume-darkPurple text-sm">{project.technologies}</p>
                </div>
                <p className="text-xs">
                  {project.startDate} - {project.endDate}
                </p>
              </div>
              {project.description && <p className="text-sm mt-1">{project.description}</p>}
              <ul className="list-disc ml-5 mt-1">
                {project.bulletPoints.filter(bullet => bullet.trim() !== '').map((bullet, i) => (
                  <li key={i} className="text-sm">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Hobbies & Interests */}
      {hobbies && hobbies.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Hobbies & Interests
          </h2>
          <p className="text-sm">{hobbies.join(", ")}</p>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div>
          <h2 className="text-lg font-bold text-resume-charcoal uppercase border-b border-gray-300 pb-1 mb-2">
            Certifications & Achievements
          </h2>
          
          {certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">
                    {cert.name}
                    {cert.link && (
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-1 text-resume-purple text-xs hover:underline"
                      >
                        [Verify]
                      </a>
                    )}
                  </h3>
                  <p className="text-resume-darkPurple">{cert.organization}</p>
                </div>
                <p className="text-xs">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
