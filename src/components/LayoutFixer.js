// src/components/LayoutFixer.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function LayoutFixer() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);

    // Force layout re-render to fix alignment issues
    document.body.style.display = 'none';
    setTimeout(() => {
      document.body.style.display = '';
    }, 10);
  }, [location.pathname]);

  return null;
}

export default LayoutFixer;
