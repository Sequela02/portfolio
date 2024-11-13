import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import '../styles/ExperienceTimeline.css';

interface Event {
  type: 'work' | 'education';
  title: string;
  company?: string;
  institution?: string;
  date: string;
  description: React.ReactNode;
}

const events: Event[] = [
  {
    type: 'education',
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico de Hermosillo (ITH)',
    date: '2020 - Presente',
    description: (
      <div className="description-container">
        <p>
          Actualmente cursando la carrera, con un enfoque en desarrollo de software, algoritmos y estructuras de datos, especialmente en aplicaciones web y móviles. He adquirido conocimientos sólidos en diversas tecnologías y metodologías de desarrollo, los cuales aplico tanto en proyectos personales como profesionales.
        </p>
      </div>
    ),
  },
  {
    type: 'work',
    title: 'Desarrollador Fullstack',
    company: 'Lecosy',
    date: 'Febrero 2024 - Noviembre 2024',
    description: (
      <div className="description-container">
        <h4>Resumen de Actividades:</h4>
        <ul>
          <li>Automatización de tareas y reportes con Google AppScript y Looker Studio.</li>
          <li>Desarrollo y mantenimiento de Lecosy en React, TypeScript y Node.js; emails con AWS.</li>
          <li>Diseño de UI con Material UI y generación de reportes en React.</li>
          <li>Creación de sitios y blogs con Strapi en Heroku; suscripciones y correos con SendGrid.</li>
          <li>Integración avanzada con APIs de Google para hojas de cálculo y calendarios.</li>
        </ul>
      </div>
    ),
  }
  
];


const getIcon = (type: string) => {
  switch (type) {
    case 'work':
      return <FaBriefcase />;
    case 'education':
      return <FaGraduationCap />;
    default:
      return <FaBriefcase />;
  }
};

const ExperienceTimeline: React.FC = () => {
  return (
    <section className="experience-timeline">
      <h2 className="timeline-title">Experiencia y Educación</h2>
      <VerticalTimeline lineColor="#B22222">
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.date}
            icon={getIcon(event.type)}
            iconStyle={{
              background: '#3b3b3b',
              color: '#B22222',
              border: '3px solid #B22222',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            }}
            contentStyle={{
              background: '#1A1A1A',
              color: '#D3D3D3',
              border: '1px solid #333',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
              animation: 'fadeIn 1s ease-out forwards',
            }}
            contentArrowStyle={{ borderRight: '7px solid #1A1A1A' }}
            className="vertical-timeline-element"
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {event.company || event.institution}
            </h4>
            <div className="vertical-timeline-element-description">
              {event.description}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceTimeline;
