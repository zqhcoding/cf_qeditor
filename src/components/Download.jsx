import React, { useState, useEffect } from 'react';
import { downloads, getLatestVersionKey } from '../data';
import './Download.css';

const Download = ({ content, lang }) => {
  const [activeOS, setActiveOS] = useState('windows');
  const [downloadStats, setDownloadStats] = useState({});
  const release = downloads[getLatestVersionKey()];

  useEffect(() => {
    fetch('/api/downloads')
      .then(res => res.json())
      .then(data => setDownloadStats(data))
      .catch(console.error);
  }, []);

  const handleDownload = (version, os, filename) => {
    fetch('/api/downloads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ version, os, filename })
    }).then(res => res.json())
      .then(data => {
        setDownloadStats(prev => ({
          ...prev,
          [`${version}_${os}_${filename}`]: data.count
        }));
      })
      .catch(console.error);
  };

  const getStatKey = (version, os, filename) => `${version}_${os}_${filename}`;

  return (
    <section id="download" className="download">
      <div className="container">
        <h2 className="section-title">{content[lang].download.title}</h2>
        <p className="section-subtitle">{content[lang].download.subtitle}</p>

        <div className="os-tabs">
          <button
            className={`tab-btn ${activeOS === 'windows' ? 'active' : ''}`}
            onClick={() => setActiveOS('windows')}
          >
            Windows
          </button>
          <button
            className={`tab-btn ${activeOS === 'linux' ? 'active' : ''}`}
            onClick={() => setActiveOS('linux')}
          >
            Linux
          </button>
          <button
            className={`tab-btn ${activeOS === 'mac' ? 'active' : ''}`}
            onClick={() => setActiveOS('mac')}
          >
            macOS
          </button>
        </div>

        <div className="download-card">
          <div className="card-header">
            <h3>{release.version}</h3>
            <span className="release-date">{release.date}</span>
          </div>
          
          <div className="file-list">
            {activeOS === 'mac' && release.mac?.placeholder ? (
              <div className="placeholder-message">
                {release.mac.message[lang]}
              </div>
            ) : (
              release[activeOS].map((file, idx) => {
                const statKey = getStatKey(release.version, activeOS, file.name);
                const count = downloadStats[statKey] || 0;
                return (
                  <div key={idx} className="file-item">
                    <div className="file-info">
                      <span className="file-type">{file.type}</span>
                      <span className="file-name">{file.name}</span>
                      <span className="download-count">{count.toLocaleString()} {content[lang].download.downloads_count}</span>
                    </div>
                    <a 
                      href={file.url} 
                      className="download-link-btn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={() => handleDownload(release.version, activeOS, file.name)}
                    >
                      {content[lang].download.download_btn}
                    </a>
                  </div>
                );
              })
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Download;
