window.addEventListener('scroll', revealCards);

function revealCards() {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach((card, index) => {
    const windowHeight = window.innerHeight;
    const cardTop = card.getBoundingClientRect().top;
    const revealPoint = 100; // adjust this for earlier/later reveal

    if (cardTop < windowHeight - revealPoint) {
      card.classList.add('reveal');
      card.style.transitionDelay = `${index * 0.2}s`; // Stagger reveal by 0.2s for each card
    }
  });
}

// Trigger on load
revealCards();
