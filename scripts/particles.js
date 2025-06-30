particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#00F5FF" },
    shape: { type: "circle" },
    opacity: { random: true, value: 0.5 },
    size: { random: true, value: 3 },
    line_linked: { enable: true, distance: 150, color: "#AA00FF", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", out_mode: "bounce" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});
