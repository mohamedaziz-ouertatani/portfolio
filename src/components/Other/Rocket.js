// Rocket.js

import React, { useState } from 'react';
import './Rocket.css'; // Import your CSS file

const Rocket = () => {
  const [isClicked, setIsClicked] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Apply rotation after a short delay
    setTimeout(() => {
      setIsClicked(true);

      // Reset rotation after the animation duration (0.5s in this example)
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }, 100);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`rocket-btn ${isClicked ? 'rotate-rocket' : ''}`}
      title="Go to Top"
    >
      🚀
    </button>
  );
};

export default Rocket;
