import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import portfolio from "./api/portfolio";

const ProjectDetails = () => {
  const [project, setProject] = useState(null);
  const { id } = useRouter().query;

  useEffect(() => {
    // Fetch the project details based on the ID
    const projectDetails = portfolio.find((item) => item.id === id);
    setProject(projectDetails);
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
            <h1>{project.projectName}</h1>
            <div className="main-content">
              <p>Project Type: {project.projectType}</p>
              <p>City: {project.city}</p>
              {project && project.project ? <p>Project: {project.project}</p> : null}
              <div className="image-gallery">
                {project.images.map((image, index) => (
                  <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
