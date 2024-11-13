import React, { useRef } from 'react';
import { FaReact, FaAws, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiSpring, SiExpress, SiNestjs, SiMongodb, SiMicrosoftsqlserver, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiCsharp, SiPython, SiMarkdown, SiGit, SiVisualstudiocode, SiWindows, SiIntellijidea, SiVercel, SiNetlify, SiHeroku } from 'react-icons/si';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (skillsRef.current) {
      const rect = skillsRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      skillsRef.current.style.setProperty('--mouse-x', `${x}px`);
      skillsRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <section id="skills" className="skills" ref={skillsRef} onMouseMove={handleMouseMove}>
      <h2>Archivos del caso</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Lenguajes Encontrados</h3>
          <ul>
            <li><SiTypescript /> TypeScript</li>
            <li><SiJavascript /> JavaScript</li>
            <li><FaJava /> Java</li>
            <li><SiHtml5 /> HTML</li>
            <li><SiCss3 /> CSS</li>
            <li><SiCsharp /> C#</li>
            <li><SiPython /> Python</li>
            <li><SiMarkdown /> Markdown</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks y Librerías Usadas</h3>
          <ul>
            <li><SiTailwindcss /> TailwindCSS</li>
            <li><FaReact /> React</li>
            <li><SiSpring /> Spring Boot</li>
            <li><SiExpress /> Express</li>
            <li><SiNestjs /> NestJS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Herramientas de Exploración</h3>
          <ul>
            <li><SiGit /> Git</li>
            <li><SiVisualstudiocode /> Visual Studio Code</li>
            <li><SiWindows /> Windows</li>
            <li><SiIntellijidea /> IntelliJ</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Servicios en la Nube</h3>
          <ul>
            <li><FaAws /> AWS</li>
            <li><SiVercel /> Vercel</li>
            <li><SiNetlify /> Netlify</li>
            <li><SiHeroku /> Heroku</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Bases de Datos</h3>
          <ul>
            <li><SiMongodb /> MongoDB</li>
            <li><SiMicrosoftsqlserver /> SQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
