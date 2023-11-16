// App.js
import React, { useState, useEffect } from 'react';
import NavigationBar from './components/common/NavigationBar';
import Footer from './components/common/Footer';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Rocket from './components/Other/Rocket';
import DarkModeToggle from './components/Other/DarkModeToggle';

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>

      <NavigationBar />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Rocket />
    </div>
  );
}

export default App;
