import React, { useState } from 'react';
import './Gallery.css';

const Gallery = ({ content, lang }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = content[lang].gallery.images;

  if (!images || images.length === 0) return null;

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">{content[lang].gallery.title}</h2>
        
        <div className="gallery-grid">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => setSelectedImage(src)}
            >
              <img src={src} alt={`Screenshot ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <div className="lightbox-content">
              <img src={selectedImage} alt="Full size preview" />
              <button className="close-btn" onClick={() => setSelectedImage(null)}>&times;</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
