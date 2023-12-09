// SkipLink.jsx
import React, { useState, useEffect } from 'react';
import './SkipLink.css';

const SkipLink = ({ darkMode }) => {
  const [cssClass, setCSSClass] = useState('SkipLink');
  useEffect(() => {
    setCSSClass(() => {
      const existingClass = "skip-link"
      const newClass = darkMode ? existingClass + ' dark' : existingClass + ' light';
      return newClass;
    });
  }, [darkMode]);

  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.tabIndex = -1;
      mainContent.focus();
    }
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  return (
    <div onFocus={handleFocus} className={cssClass}>
      <a href="#content" className={`skip-link btn ${isVisible ? 'visible' : ''}`}>Skip to Main Content</a>
    </div>
  );
};

export default SkipLink;
