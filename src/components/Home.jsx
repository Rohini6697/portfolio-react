import React, { useEffect } from "react";
import "../../src/styles/Home.css";

const Home = () => {
  useEffect(() => {
    // --------------------- PARTICLES JS ------------------------
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
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          random: true,
          out_mode: "out",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
      },
      retina_detect: true,
    });

    // --------------------- SKILL SPHERE ------------------------
    const canvas = document.getElementById("skillCanvas");
    const ctx = canvas.getContext("2d");

    let width, height, radius;
    function resizeCanvas() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      radius = Math.min(width, height) / 3;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const skills = [
      "Python",
      "Django",
      "React",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "MongoDB",
      "Git",
      "GitHub",
      "Bootstrap",
      "REST API",
    ];

    const dots = [];
    const total = skills.length;

    for (let i = 0; i < total; i++) {
      const phi = Math.acos(-1 + (2 * i) / total);
      const theta = Math.sqrt(total * Math.PI) * phi;

      dots.push({
        text: skills[i],
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
      });
    }

    let angleX = 0.002;
    let angleY = 0.002;

    function rotateX(dot) {
      const y = dot.y * Math.cos(angleX) - dot.z * Math.sin(angleX);
      const z = dot.y * Math.sin(angleX) + dot.z * Math.cos(angleX);
      dot.y = y;
      dot.z = z;
    }

    function rotateY(dot) {
      const x = dot.z * Math.sin(angleY) + dot.x * Math.cos(angleY);
      const z = dot.z * Math.cos(angleY) - dot.x * Math.sin(angleY);
      dot.x = x;
      dot.z = z;
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        rotateX(dot);
        rotateY(dot);

        const scale = 300 / (300 + dot.z);
        const x = dot.x * scale + width / 2;
        const y = dot.y * scale + height / 2;

        ctx.font = `${14 * scale + 8}px Poller One`;
        ctx.fillStyle = "#fff";
        ctx.fillText(dot.text, x, y);
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section id="particles-js">
        <div className="hero-text">
          <h1>Hi, I am Rohini Sureshbabu</h1>
          <h3>Python Full-Stack Developer Intern</h3>
        </div>
      </section>

      {/* ABOUT */}
      <section id="section2">
        <div id="div2">
          <h2>About Me</h2>
          <p>
            A motivated Computer Science and Engineering Graduate with a strong
            foundation in theoretical principles and problem-solving. Passionate
            about backend, frontend, and full-stack development with real-world projects.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="section3">
        <h2>Education</h2>

        <div>
          <h3>B.Tech in Computer Science and Engineering</h3>
          <h4>LBS College of Engineering Kasaragod</h4>
          <h4>CGPA: 6.58</h4>
          <h4>2021-2025</h4>
        </div>

        <div>
          <h3>Higher Secondary Education</h3>
          <h4>JNMGHSS Puthuppanam, Vadakara</h4>
          <h4>97%</h4>
          <h4>2019-2021</h4>
        </div>

        <div>
          <h3>High School Education</h3>
          <h4>JNMGHSS Puthuppanam, Vadakara</h4>
          <h4>96%</h4>
          <h4>2018-2019</h4>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="section4">
        <h1 className="skills-title">Skills</h1>
        <div className="skill-section">
          <canvas id="skillCanvas"></canvas>

          {/* SEO Hidden Text for Google */}
          <div className="seo-text">
            Python, Django, HTML, CSS, JavaScript, React, MySQL, MongoDB, Git, GitHub
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
