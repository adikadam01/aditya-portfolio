
export function initScrollTriggers() {
  console.log('Initializing scroll triggers');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          console.log('Element became visible:', entry.target);
        } else {
          entry.target.classList.remove('visible');
          console.log('Element became hidden:', entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px' }
  );

  const elements = [
    { selector: '.hero h2, .text-content h2', class: 'fade-up', delay: '0.2s' },
    { selector: '.hero h3, .text-content h3', class: 'fade-up', delay: '0.4s' },
    { selector: '.divider', class: 'fade-up', delay: '0.6s' },
    { selector: '.cta-section', class: 'fade-up', delay: '0.8s' },
    { selector: '.hero-image-container, .hero-image, .circle-glow', class: 'scale', delay: '0.3s' },
    { selector: '.skills', class: 'fade-up', delay: '0s' },
    { selector: '.about-left', class: 'slide-left', delay: '0s' },
    { selector: '.about-right', class: 'slide-right', delay: '0s' },
    { selector: '.service', class: 'fade-up', staggered: true },
    { selector: '.resume-section', class: 'fade-up', delay: '0s' },
    { selector: '.projects-section .section-title', class: 'fade-up', delay: '0s' },
    { selector: '.project-card', class: 'fade-up', staggered: true },
    { selector: '.education-section .section-title', class: 'fade-up', delay: '0s' },
    { selector: '.edu-card', class: 'fade-up', staggered: true },
    { selector: '.learning-title', class: 'fade-up', delay: '0s' },
    { selector: '.learning-card', class: 'slide-left', staggered: true },
    { selector: '.contact-header', class: 'fade-up', delay: '0s' },
    { selector: '.contact-card', class: 'fade-up', staggered: true },
    { selector: '.contact-form-container', class: 'slide-right', delay: '0s' },
    { selector: '.social-link', class: 'fade-up', staggered: true },
    { selector: '.section-title:not(.scroll-trigger)', class: 'fade-up', delay: '0s' },
    { selector: '[class*="card"]:not(.scroll-trigger)', class: 'fade-up', staggered: true },
  ];

  elements.forEach(({ selector, class: animationClass, delay, staggered }) => {
    const items = document.querySelectorAll(selector);
    items.forEach((item, index) => {
      item.classList.add('scroll-trigger', animationClass);
      if (staggered) item.style.transitionDelay = `${0.1 * (index + 1)}s`;
      else if (delay) item.style.transitionDelay = delay;
    });
  });

  const scrollTriggers = document.querySelectorAll('.scroll-trigger');
  if (scrollTriggers.length === 0) {
    console.warn('No scroll-trigger elements found.');
  } else {
    scrollTriggers.forEach((trigger, index) => {
      observer.observe(trigger);
      console.log(`Observing element ${index + 1}:`, trigger.className);
    });
  }

  const elementsInView = document.querySelectorAll('.scroll-trigger:not(.visible)');
  let visibleCount = 0;
  elementsInView.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
      visibleCount++;
    }
  });
  console.log(`${visibleCount} elements were immediately visible and animated`);

  const clickHandler = () => {
    const testElement = document.querySelector('.scroll-trigger:not(.visible)');
    if (testElement) {
      testElement.classList.add('visible');
      console.log('Manually triggered animation on:', testElement);
    } else {
      console.log('No scroll-trigger elements found to animate');
    }
  };
  document.addEventListener('click', clickHandler);

  return () => {
    observer.disconnect();
    document.removeEventListener('click', clickHandler);
  };
}
