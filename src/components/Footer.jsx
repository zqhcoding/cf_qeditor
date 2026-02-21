import React from 'react';
import './Footer.css';

const Footer = ({ content, lang }) => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">{content[lang].footer.copyright}</p>
        <p className="contact">
          {content[lang].footer.contact}
          <a href={`mailto:${content[lang].footer.email}`}>
            {content[lang].footer.email}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
