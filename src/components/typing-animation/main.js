// src/TypingAnimation.js

import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Adjust the speed of typing here
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <h1>{displayedText}</h1>;
};

export default TypingAnimation;
