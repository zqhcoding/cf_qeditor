import React from 'react';
import './Header.css';

const Header = ({ lang, setLang, content }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">QEditor</div>
        <nav className="nav">
          <a href="#features">{content[lang].nav.features}</a>
          <a href="#download">{content[lang].nav.download}</a>
          <a href="#support">{content[lang].nav.support}</a>
        </nav>
        <button 
          className="lang-toggle" 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
        >
          {lang === 'en' ? '中文' : 'English'}
        </button>
      </div>
    </header>
  );
};

export default Header;
