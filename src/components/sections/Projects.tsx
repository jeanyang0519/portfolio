import "../sections/Project.css";
import { projectData } from "@/data/projectData";
import oceanImage from "../../assets/ocean.png";

export default function Projects() {
  return (
    <section className="projects-section">
      <img
        src={oceanImage}
        alt="Ocean background"
        className="projects-background"
      />

      <div className="projects-content">
        {/* Title on top */}
        <h2 className="projects-heading">My Projects</h2>

        {/* Projects grid */}
        <div className="projects-container">
          {projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.imageSrc}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title-card">{project.title}</h3>
              <p className="project-description">{project.shortDescription}</p>
              <div className="tech-badges">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-badge">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
