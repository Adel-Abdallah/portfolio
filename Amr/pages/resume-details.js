import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import resume from "./api/resume";

const ResumeDetails = () => {
  const [project, setProject] = useState(null);
  const { id } = useRouter().query;

  useEffect(() => {
    // Fetch the project details based on the ID
    const resumeDetails = resume.find(
      (project) => project.id === id
    );
    setProject(resumeDetails);
  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="project-page">
        <a href="/" className="back-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </a>
        <div className="container">
          <div className="project-content">
            <h1>{project.title}</h1>
            <div className="main-content">
              <p>Company: {project.company}</p>
              <p>Project Name: {project.project}</p>
              <p>Duration: {project.date}</p>
              <p><img src={project.image} alt={project.title} /></p>
              {project.projectDescription && (
                <div>
                  <h2>Project Description:</h2>
                  <p>Consultant: {project.projectDescription?.consultant}</p>
                  <p>Project Management Firm: {project.projectDescription?.projectManagementFirm}</p>
                  <p>Owner: {project.projectDescription?.owner}</p>
                  <p>Project Type: {project.projectDescription?.projectType}</p>
                  <p>Project Budget: {project.projectDescription?.projectBudget}</p>
                  {project.projectDescription?.projectScopeOfWork?.length > 0 && (
                    <div>
                      <p>Project Scope:</p>
                      <ul>
                        {project.projectDescription.projectScopeOfWork.map((scope, index) => (
                          <li key={index}>{scope}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              {Array.isArray(project.scopeOfWork) && (
                <div>
                  <h2>Scope of Work:</h2>
                  <ul>
                    {project.scopeOfWork.map((scope, index) => (
                      <li key={index}>{scope}</li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(project.mainResponsibilities) && (
                <div>
                  <h2>Main Responsibilities:</h2>
                  <ul>
                    {project.mainResponsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeDetails;
