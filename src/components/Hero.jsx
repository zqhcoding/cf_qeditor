import React from 'react';
import './Hero.css';

const Hero = ({ content, lang }) => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">{content[lang].hero.title}</h1>
        <p className="hero-subtitle">{content[lang].hero.subtitle}</p>
        <div className="cta-container">
          <a href="#download" className="cta-button">
            {content[lang].hero.cta}
          </a>
          <span className="version-tag">{content[lang].hero.version}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
