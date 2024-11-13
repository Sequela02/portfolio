import React from 'react';
import { FaTools, FaPauseCircle, FaCheckCircle } from 'react-icons/fa';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: 'completed' | 'in progress' | 'paused';
  imageUrl?: string;
  repoLink?: string;
  liveLink?: string;
}

// Definimos los estilos de las tecnologías en un objeto
const techStyles: { [key: string]: React.CSSProperties } = {
  React: { backgroundColor: '#61DAFB', color: '#000' },
  'React Native': { backgroundColor: '#61DAFB', color: '#000' },
  JavaScript: { backgroundColor: '#F7DF1E', color: '#000' },
  CSS: { backgroundColor: '#264de4', color: '#fff' },
  TypeScript: { backgroundColor: '#007ACC', color: '#fff' },
  HTML: { backgroundColor: '#E34F26', color: '#fff' },
  Nodejs: { backgroundColor: '#83CD29', color: '#fff' },
  Express: { backgroundColor: '#000', color: '#fff' },
  MongoDB: { backgroundColor: '#4DB33D', color: '#fff' },
  SQL: { backgroundColor: '#00758F', color: '#fff' },
  Java: { backgroundColor: '#f89820', color: '#fff' },
};

const projects: Project[] = [
  {
    title: 'Sitio Web de Portfolio',
    description:
      'Sitio web de portfolio personal, aún en progreso. Muestra el título y la descripción de los proyectos.',
    technologies: ['React', 'TypeScript', 'CSS'],
    status: 'in progress',
  },
  {
    title: 'Sitio Web de "Avenida Azul"',
    description:
      'Sitio web para "Avenida Azul", una academia de arte en Hermosillo. Aún en progreso.',
    technologies: ['React', 'TypeScript', 'CSS'],
    status: 'in progress',
  },
  {
    title: 'Aplicación Móvil de Quesoro',
    description:
      'Aplicación móvil para Quesoro, desarrollada con React Native y TypeScript.',
    technologies: ['React Native', 'TypeScript'],
    status: 'in progress',
  },
  {
    title: 'Lore Builder',
    description:
      'Herramienta web para crear historias y personajes, desarrollada con React, TypeScript, CSS y SQL.',
    technologies: ['React', 'TypeScript', 'CSS', 'SQL'],
    status: 'in progress',
  },
  {
    title: 'Aplicación Todo para Móvil y Web',
    description:
      'Aplicación Todo para móvil y web, desarrollada con React Native, React, TypeScript y MongoDB. Tematizada con una historia de supervivencia donde las tareas realizadas marcan el progreso.',
    technologies: ['React Native', 'React', 'TypeScript', 'MongoDB'],
    status: 'in progress',
  },
  {
    title: 'Mod de Minecraft para Creación de Misiones',
    description:
      'Mod de Minecraft que permite a los jugadores crear y jugar misiones personalizadas, desarrolladas en Java. Aún en progreso.',
    technologies: ['Java'],
    status: 'in progress',
  },
];

const Projects: React.FC = () => {
  const renderStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'in progress':
        return <FaTools className="status-icon in-progress" />;
      case 'paused':
        return <FaPauseCircle className="status-icon paused" />;
      case 'completed':
        return <FaCheckCircle className="status-icon completed" />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="projects">
      <h2>Evidencias recolectadas</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="project-image default-image">?</div>
            )}
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-status">
                {renderStatusIcon(project.status)}
                {project.status === 'in progress'
                  ? ' En Progreso'
                  : project.status === 'paused'
                  ? ' Pausado'
                  : ' Completado'}
              </p>
              <p className="project-description">{project.description}</p>
              <p className="project-technologies">
                <strong>Tecnologías:</strong>{' '}
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={techStyles[tech] || { backgroundColor: '#444', color: '#E5E5E5' }}
                    className="tech-tag"
                  >
                    {tech}
                  </span>
                ))}
              </p>
              <div className="project-links">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repositorio
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Aplicación
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
