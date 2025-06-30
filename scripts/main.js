// Course card hover effects
document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.borderColor = '#00FFA3';
  });
  card.addEventListener('mouseleave', () => {
    card.style.borderColor = '#AA00FF';
  });
});

// Voice search button
document.querySelector('.voice-btn').addEventListener('click', () => {
  alert("Voice search activated! (Demo: Imagine AI speech recognition here.)");
});
