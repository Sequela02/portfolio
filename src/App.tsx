import React, { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
  const [position, setPosition] = useState({ x: '50vw', y: '50vh' });
  const [lanternActive, setLanternActive] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Manejador para toque en móvil
  const handleTouchMove = (e: TouchEvent) => {
    if (lanternActive && isMobile) {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      setPosition({ x: `${x}px`, y: `${y}px` });
    }
  };

  // Manejador para movimiento del mouse en PC
  const handleMouseMove = (e: React.MouseEvent) => {
    if (lanternActive && !isMobile) {
      setPosition({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    }
  };

  useEffect(() => {
    if (isMobile && lanternActive) {
      window.addEventListener('touchmove', handleTouchMove);
    } else {
      window.removeEventListener('touchmove', handleTouchMove);
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [lanternActive, isMobile]);

  useEffect(() => {
    const snackbarTimer = setTimeout(() => setShowSnackbar(false), 5000);
    return () => clearTimeout(snackbarTimer);
  }, []);

  const handleLanternToggle = () => {
    setLanternActive((prev) => !prev);
    setShowSnackbar(false);
  };

  return (
    <div 
      className="App"
      onMouseMove={handleMouseMove}
    >
      {showSnackbar && (
        <div className="snackbar">
          {isMobile
            ? 'Activa la linterna y mueve tu dedo para posicionarla en el lugar deseado.'
            : 'Haz clic para activar la linterna y explorar las pistas.'}
        </div>
      )}
      <button
        onClick={handleLanternToggle}
        className={`lantern-button ${lanternActive ? 'active' : ''}`}
      >
        <FaLightbulb size={24} />
      </button>
      {lanternActive && (
        <div
          className="lantern"
          style={{ '--x': position.x, '--y': position.y } as React.CSSProperties}
        />
      )}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
};

export default App;
