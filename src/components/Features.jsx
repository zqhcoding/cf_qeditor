import React from 'react';
import './Features.css';

const Features = ({ content, lang }) => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">{content[lang].features.title}</h2>
        <div className="features-grid">
          {content[lang].features.list.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
