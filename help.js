// Reveal help sections on scroll
const helpSections = document.querySelectorAll('.fade-in');

const helpObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

helpSections.forEach(section => {
  helpObserver.observe(section);
});
