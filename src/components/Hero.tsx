import React from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <h1 className="hero-case">CASE 02:</h1>
      <h2 className="hero-title">Ricardo Armenta Parra</h2>
      <p className="hero-nickname">(Canitas)</p>
      <p className="hero-subtitle">Desarrollador Fullstack</p>
      <p className="hero-footer">Portfolio - Classified</p>
    </section>
  );
};

export default Hero;
