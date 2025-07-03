import React, { useState, useEffect } from 'react';

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const t = localStorage.getItem('theme');
    if (t === 'dark') {
      setIsDark(true);
      document.body.classList.add('dark-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle('dark-theme', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button id="toggle-theme" onClick={toggleTheme}>
      {isDark ? '🌙' : '🌞'}
    </button>
  );
};

export default ToggleTheme;
