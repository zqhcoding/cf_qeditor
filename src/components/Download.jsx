import React, { useState } from 'react';
import { downloads } from '../data';
import './Download.css';

const Download = ({ content, lang }) => {
  const [activeOS, setActiveOS] = useState('linux');
  const release = downloads.v1_0_0;

  return (
    <section id="download" className="download">
      <div className="container">
        <h2 className="section-title">{content[lang].download.title}</h2>
        <p className="section-subtitle">{content[lang].download.subtitle}</p>

        <div className="os-tabs">
          <button
            className={`tab-btn ${activeOS === 'linux' ? 'active' : ''}`}
            onClick={() => setActiveOS('linux')}
          >
            Linux
          </button>
          <button
            className={`tab-btn ${activeOS === 'windows' ? 'active' : ''}`}
            onClick={() => setActiveOS('windows')}
          >
            Windows
          </button>
        </div>

        <div className="download-card">
          <div className="card-header">
            <h3>{release.version}</h3>
            <span className="release-date">{release.date}</span>
          </div>
          
          <div className="file-list">
            {release[activeOS].map((file, idx) => (
              <div key={idx} className="file-item">
                <div className="file-info">
                  <span className="file-type">{file.type}</span>
                  <span className="file-name">{file.name}</span>
                </div>
                <a href={file.url} className="download-link-btn" target="_blank" rel="noopener noreferrer">
                  {content[lang].download.download_btn}
                </a>
              </div>
            ))}
          </div>
        </div>
        
        <p className="note">{content[lang].download.note}</p>
      </div>
    </section>
  );
};

export default Download;
