document.addEventListener('DOMContentLoaded', function () {
  // Sticky Navbar
  const header = document.querySelector('header');
  const heroSection = document.querySelector('#home');
  const heroSectionHeight = heroSection.offsetHeight;

  window.addEventListener('scroll', function () {
      if (window.scrollY > heroSectionHeight - header.offsetHeight) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
  });

  // Burger Menu Toggle
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
      nav.classList.toggle('nav-active');
      closeBtn.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Close the nav when a link is clicked
            navLinks.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

      // Animate Links
      navItems.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
      });
      burger.classList.toggle('toggle');
  });

  // Scroll-based animations
  const sections = document.querySelectorAll('.section-padding');

  const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('section-visible');
          }
      });
  }, {
      threshold: 0.2
  });

  sections.forEach(section => {
      sectionObserver.observe(section);
  });
});
