import React from 'react';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>Expediente Personal</h2>
      <div className="about-content">
        <div className="missing-frame">
          <img src="/icon.jpg" alt="Ricardo Armenta Parra" className="about-image" />
          <p className="name-text">Ricardo Armenta Parra</p>
          <p className="missing-text">MISSING PERSON</p>
        </div>
        <p className="about-text">
          Ricardo Armenta Parra, conocido como "Canitas," es un desarrollador fullstack dedicado a la creación de 
          experiencias digitales únicas. Con un enfoque en la creatividad y la técnica, construye aplicaciones y juegos 
          que no solo funcionan, sino que también cuentan historias.
          <br /><br />
          En su trayectoria, ha explorado el mundo de la programación con pasión, afrontando desafíos y siempre en busca 
          de proyectos que dejen huella. A través de su trabajo, busca conectar con el usuario de una manera significativa.
        </p>
      </div>
    </section>
  );
};

export default About;
