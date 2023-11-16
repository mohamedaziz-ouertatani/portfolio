import React from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
      {isDarkMode ? (
        <span role="img" aria-label="Sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Moon">
          🌜
        </span>
      )}
    </div>
  );
};

export default DarkModeToggle;
