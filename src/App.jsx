import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Download from './components/Download';
import Footer from './components/Footer';
import { content } from './data';
import './App.css';

function App() {
  const [lang, setLang] = useState('zh'); // Default to Chinese as per prompt context

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} content={content} />
      <main>
        <Hero content={content} lang={lang} />
        <Gallery content={content} lang={lang} />
        <Features content={content} lang={lang} />
        <Download content={content} lang={lang} />
      </main>
      <Footer content={content} lang={lang} />
    </div>
  );
}

export default App;
