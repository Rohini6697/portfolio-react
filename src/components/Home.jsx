import React, { useEffect, useState } from "react";
import "../../src/styles/Home.css";
import img1 from "../../src/images/career1.png"
import img2 from "../../src/images/blood1.jpg"
import img3 from "../../src/images/jewellery.jpg"
import img4 from "../../src/images/store1.png"
import profile from "../../src/images/1.jpg"

const Home = () => {
const [show,setShow] = useState(false)
const open = () => setShow(true)
const close = () => setShow(false)
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
// --------------------- SKILL SPHERE ------------------------
const canvas = document.getElementById("skillCanvas");
const ctx = canvas.getContext("2d");

let width, height, radius;
function resizeCanvas() {
  width = canvas.width = canvas.offsetWidth;
  height = canvas.height = canvas.offsetHeight;
  radius = Math.min(width, height) / 2.2;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const skills = [
  "Python", "Django", "React", "HTML", "CSS", "JavaScript",
  "MySQL", "MongoDB", "Git", "GitHub", "Bootstrap", "REST API"
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
    z: radius * Math.cos(phi)
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

  const projected = [];

  dots.forEach((dot) => {
    rotateX(dot);
    rotateY(dot);

    const scale = 300 / (300 + dot.z);
    const x = dot.x * scale + width / 2;
    const y = dot.y * scale + height / 2;

    projected.push({ x, y, z: dot.z });

    ctx.font = `${18 * scale + 12}px Poller One`;
    ctx.fillStyle = "#fff";
    ctx.fillText(dot.text, x, y);
  });

  // ---------------- LINE DRAWING WHEN CLOSE ----------------
// ---------------- LINE DRAWING WHEN CLOSE ----------------
for (let i = 0; i < projected.length; i++) {
  for (let j = i + 1; j < projected.length; j++) {
    const dx = projected[i].x - projected[j].x;
    const dy = projected[i].y - projected[j].y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const maxDist = 170; // <-- increased distance for more lines

    if (dist < maxDist) {
      let opacity = 1 - dist / maxDist; // fades based on new distance
      ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(projected[i].x, projected[i].y);
      ctx.lineTo(projected[j].x, projected[j].y);
      ctx.stroke();
    }
  }
}


  requestAnimationFrame(animate);
}

animate();


  }, []);

  return (
    <div>
      {/* HERO SECTION */}
      <section id="particles-js">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I am Rohini Sureshbabu</h1>
            <h3>Python Full-Stack Developer Intern</h3>
          </div>

          <img src={profile} alt="Rohini" className="hero-img" />
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

        <div class="edu-card">
          <h3>B.Tech in Computer Science and Engineering</h3>
          <h4>LBS College of Engineering Kasaragod</h4>
          <h4>2021-2025</h4>
        </div>

        <div class="edu-card">
          <h3>Higher Secondary Education</h3>
          <h4>JNMGHSS Puthuppanam, Vadakara</h4>
          <h4>2019-2021</h4>
        </div>

        <div class="edu-card">
          <h3>High School Education</h3>
          <h4>JNMGHSS Puthuppanam, Vadakara</h4>
          <h4>2018-2019</h4>
        </div>
      </section>


      {/* SKILLS SECTION */}
      <section id="section4">
        <h1 className="skills-title">Skills</h1>
        <div className="skill-section">
          <canvas id="skillCanvas"></canvas>
        </div>
        {/* <div> */}
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Python</li>
            <li>Django</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Mysql</li>
            <li>MongoDB</li>
            <li>Bootstrap</li>
            <li>C Programming</li>
          </ul>
        {/* </div> */}
      </section>
      <section className="project">
        <h1>Projects</h1>

        <div className="gallery">

          <div className="imgWrapper">
            <img src={img1} alt="" />
            <span className="desc">CareerMatch Project</span>
            <div className="btnGroup">
              <button onClick={open}>View</button>
              <button>Code</button>
            </div>
          </div>

          <div className="imgWrapper">
            <img src={img2} alt="" />
            <span className="desc">LifeLink App</span>
            <div className="btnGroup">
              <button>View</button>
              <button>Code</button>
            </div>
          </div>

          <div className="imgWrapper">
            <img src={img3} alt="" />
            <span className="desc">Dennel Delivery System</span>
            <div className="btnGroup">
              <button>View</button>
              <button>Code</button>
            </div>
          </div>

          <div className="imgWrapper">
            <img src={img4} alt="" />
            <span className="desc">Organic Store Website</span>
            <div className="btnGroup">
              <button>View</button>
              <button>Code</button>
            </div>
          </div>

        </div>
        
      </section>
      {show && (
        <div className="popupOverlay" onClick={close}>
          <div className="popupBox" onClick={(e) => e.stopPropagation()}>
            <h2>CareerMatch Project</h2>
            <p>This is where you can show project details or screenshots.</p>
            <button onClick={close}>Close</button>
          </div>
        </div>
      )}

 
    <section className="connect">
      <h1>Connect with Me</h1>
      <div className="contact">
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email"></input>
        <textarea placeholder="Message"></textarea>
        <button className="myBtn">Send</button>
      </div>
    </section> 

    </div>
  );
};

export default Home;
