import React, { useEffect } from "react";
import '../../src/styles/Home.css'

const Home = () => {
  useEffect(() => {
    // Initialize particlesJS
    window.particlesJS("particles-js", {
      particles: {
        number: { value: 290, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
          type: "triangle",
          stroke: { width: 0, color: "#000000" },
          polygon: { nb_sides: 10 },
        },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: true, straight: false, out_mode: "out", bounce: true },
      },
      interactivity: {
        detect_on: "window",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div>
      <section id="particles-js">
        <h1>Section 1</h1>
      </section>
      <section id="section2">
        <h1>Section 2</h1>
      </section>
      <section id="section3">
        <h1>Section 3</h1>
      </section>
      <section id="section4">
        <h1>Section 4</h1>
      </section>
    </div>
  );
};

export default Home;
