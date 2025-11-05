import { useEffect } from 'react';

function ScriptLoader() {
  useEffect(() => {
    // Load vendor scripts after React has mounted
    // Use process.env.PUBLIC_URL which is empty string in dev, or actual path in production
    const publicUrl = process.env.PUBLIC_URL || '';
    const scripts = [
      `${publicUrl}/assets/vendor/bootstrap/js/bootstrap.bundle.min.js`,
      `${publicUrl}/assets/vendor/php-email-form/validate.js`,
      `${publicUrl}/assets/vendor/aos/aos.js`,
      `${publicUrl}/assets/vendor/glightbox/js/glightbox.min.js`,
      `${publicUrl}/assets/vendor/swiper/swiper-bundle.min.js`
    ];

    const scriptPromises = scripts.map(src => {
      return new Promise((resolve, reject) => {
        // Normalize the src to check for existing scripts
        const normalizedSrc = src.startsWith('//') ? src : src.replace(/^\/+/, '/');
        const existing = Array.from(document.querySelectorAll('script[src]')).find(
          s => s.src === window.location.origin + normalizedSrc || s.src.endsWith(normalizedSrc)
        );
        
        if (existing) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => {
          console.log(`Loaded: ${src}`);
          resolve();
        };
        script.onerror = (error) => {
          console.warn(`Failed to load script: ${src}`, error);
          // Don't reject - just log warning, continue with other scripts
          resolve();
        };
        document.body.appendChild(script);
      });
    });

    Promise.allSettled(scriptPromises)
      .then((results) => {
        const loaded = results.filter(r => r.status === 'fulfilled').length;
        console.log(`${loaded}/${scripts.length} vendor scripts loaded`);
      });

    return () => {
      // Cleanup: scripts will remain but that's okay
    };
  }, []);

  return null;
}

export default ScriptLoader;
