import React, { useState } from 'react';
import './Features.css';

const Features = ({ content, lang }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">{content[lang].features.title}</h2>
        
        {/* Feature Cards Grid */}
        <div className="features-grid">
          {content[lang].features.list.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.isMore ? 'more-card' : ''}`}
              onClick={feature.isMore ? () => setShowAll(!showAll) : undefined}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Feature List (Expandable) */}
        {showAll && (
          <div className="all-features-container">
            <div className="all-features-header">
              <h3>{lang === 'en' ? 'All Features' : '完整功能列表'}</h3>
            </div>
            <div className="all-features-grid">
              {content[lang].features.allFeatures.map((category, idx) => (
                <div key={idx} className="feature-category">
                  <h4>{category.category}</h4>
                  <ul>
                    {category.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="close-features">
              <button onClick={() => setShowAll(false)}>
                {lang === 'en' ? 'Close' : '收起'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
