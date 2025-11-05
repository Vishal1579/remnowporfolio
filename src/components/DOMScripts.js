import { useEffect } from 'react';

function DOMScripts() {
  useEffect(() => {
    // Wait for DOM to be ready
    const initDOMScripts = () => {
      /**
       * Apply .scrolled class to the body as the page is scrolled down
       */
      function toggleScrolled() {
        const selectBody = document.querySelector('body');
        const selectHeader = document.querySelector('#header');
        if (!selectHeader) return;
        if (!selectHeader.classList.contains('scroll-up-sticky') && 
            !selectHeader.classList.contains('sticky-top') && 
            !selectHeader.classList.contains('fixed-top')) return;
        window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
      }

      window.addEventListener('scroll', toggleScrolled);
      window.addEventListener('load', toggleScrolled);

      /**
       * Hide mobile nav on same-page/hash links
       */
      const navLinks = document.querySelectorAll('#navmenu a');
      navLinks.forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            const toggleBtn = document.querySelector('.mobile-nav-toggle');
            if (toggleBtn) {
              document.querySelector('body').classList.toggle('mobile-nav-active');
              toggleBtn.classList.toggle('bi-list');
              toggleBtn.classList.toggle('bi-x');
            }
          }
        });
      });

      /**
       * Scroll top button
       */
      let scrollTop = document.querySelector('.scroll-top');
      if (scrollTop) {
        function toggleScrollTop() {
          window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        scrollTop.addEventListener('click', (e) => {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
        window.addEventListener('load', toggleScrollTop);
        window.addEventListener('scroll', toggleScrollTop);
      }

      /**
       * Initiate glightbox (if GLightbox is available)
       */
      // eslint-disable-next-line no-undef
      if (typeof GLightbox !== 'undefined') {
        // eslint-disable-next-line no-undef
        const glightbox = GLightbox({
          selector: '.glightbox'
        });
      }

      /**
       * Init swiper sliders (if Swiper is available)
       */
      // eslint-disable-next-line no-undef
      if (typeof Swiper !== 'undefined') {
        function initSwiper() {
          const swiperElements = document.querySelectorAll(".init-swiper");
          swiperElements.forEach(function(swiperElement) {
            const configElement = swiperElement.querySelector(".swiper-config");
            if (!configElement) return;
            
            try {
              let config = JSON.parse(configElement.innerHTML.trim());
              // eslint-disable-next-line no-undef
              new Swiper(swiperElement, config);
            } catch (e) {
              console.error('Error parsing swiper config:', e);
            }
          });
        }
        window.addEventListener("load", initSwiper);
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initDOMScripts, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}

export default DOMScripts;
