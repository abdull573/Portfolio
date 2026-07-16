/**
 * script.js - Abdullah Satti SQA Portfolio Behavior
 * Manages mobile navigation, accessibility attributes, and scroll observers.
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================================================
  // 1. Mobile Menu Toggler
  // ==========================================================================
  const navToggleBtn = document.getElementById('nav-toggle-btn');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  /**
   * Toggles the navigation drawer and updates ARIA states for screen readers.
   */
  const toggleMobileMenu = () => {
    const isOpen = primaryNav.classList.contains('open');
    
    // Set aria-expanded dynamically
    navToggleBtn.setAttribute('aria-expanded', !isOpen);
    
    // Toggle CSS classes for slider and hamburger icon transforms
    navToggleBtn.classList.toggle('open');
    primaryNav.classList.toggle('open');
    
    // Prevent body scrolling when the menu is open (UX enhancement)
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  /**
   * Resets and closes the mobile drawer safely.
   */
  const closeMobileMenu = () => {
    navToggleBtn.setAttribute('aria-expanded', 'false');
    navToggleBtn.classList.remove('open');
    primaryNav.classList.remove('open');
    document.body.style.overflow = '';
  };

  // Attach toggle triggers
  navToggleBtn.addEventListener('click', toggleMobileMenu);

  // Close the drawer automatically when clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close the drawer if Escape key is pressed (a11y best practice)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.classList.contains('open')) {
      closeMobileMenu();
      navToggleBtn.focus();
    }
  });

  // Close the drawer if resized past mobile breakpoint while open
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && primaryNav.classList.contains('open')) {
      closeMobileMenu();
    }
  });


  // ==========================================================================
  // 2. Active Section Highlighting on Scroll (Intersection Observer)
  // ==========================================================================
  // Track all sections with valid IDs to update corresponding navigation items
  const sections = document.querySelectorAll('main > section[id]');
  
  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '-30% 0px -60% 0px', // trigger active when section is in active viewing area
    threshold: 0
  };

  /**
   * Intersection callback to add/remove .active-link classes on matching anchors
   */
  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          const hrefValue = link.getAttribute('href');
          
          if (hrefValue === `#${sectionId}`) {
            link.classList.add('active-link');
            // Update link visual styling
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active-link');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  sections.forEach(section => {
    observer.observe(section);
  });
});
