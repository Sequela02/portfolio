import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/ContactSection.css';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">¿Posees pistas que puedan resolver el caso?</h2>
      <p className="contact-description">
        Comunícate con el Departamento de Investigación por estos medios.
      </p>
      <div className="contact-upper">
        <div className="photo-frame">
          <img src="/icon.jpg" alt="Foto de evidencia" />
        </div>
        <div className="social-media">
          <h3>Canales de Comunicación</h3>
          <ul>
            <li>
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                <FaTwitter /> Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-lower">
        <h3 className="form-title"><FaEnvelope /> Envía tu Informe</h3>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Informe</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Informe</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
