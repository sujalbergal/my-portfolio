import "./App.css";

const projects = [
  {
    title: "CampusOS AI",
    description:
      "An AI-powered platform for students with notes assistance, academic planning, and placement preparation.",
    stack: "React · FastAPI · Gemini",
  },
  {
    title: "ResourceX",
    description:
      "A campus resource-sharing portal where teachers list resources, students request them, and administrators manage the platform.",
    stack: "Resource Management · Booking Workflow",
  },
  {
    title: "Smart Parking System",
    description:
      "An automated parking prototype with vehicle detection, live slot tracking, an LCD display, and servo-controlled entry.",
    stack: "Arduino · IR Sensors · Embedded Systems",
  },
];

const skills = [
  "Python",
  "Java",
  "C / C++",
  "JavaScript",
  "React",
  "FastAPI",
  "Django",
  "SQL",
  "Git & GitHub",
  "Arduino / ESP32",
];

function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#home" aria-label="Sujal home">
          Sujal bergal<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">CSE AI & ML STUDENT · DEVELOPER</p>

            <h1>
              Hi, I’m <span>Sujal Bergal.</span>
              <br />
              I turn ideas into working software.
            </h1>

            <p className="intro">
              I study at Pimpri Chinchwad University and build projects
              across AI, full-stack development, and embedded systems.
            </p>

            <div className="actions">
              <a className="button primary" href="#projects">
                Explore my projects ↗
              </a>

              <a
                className="button secondary"
                href="https://github.com/sujalbergal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                className="button secondary"
                href="https://www.linkedin.com/in/sujal-bergal-b9803427a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a><a
  className="button secondary"
  href="/resume.pdf"
  download="Sujal_Bergal_Resume.pdf"
>
  Download resume ↓
</a>
            </div>
          </div>

          <div className="hero-card" aria-label="My development interests">
            <div className="card-top">
              <span className="status-dot" />
              <span>Always building. Always learning.</span>
            </div>

           <img
  className="profile-photo"
  src="/profile(2).jpg"
  alt="Sujal Bergal"
  width="400"
  height="400"
/>

            <p>From an idea to a working prototype.</p>

            <div className="tags">
              <span>AI / ML</span>
              <span>Web Development</span>
              <span>IoT</span>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Curiosity drives what I build.</h2>
          </div>

          <div className="about-copy">
            <p>
              I’m a third-year B.Tech student specializing in Computer
              Science and Engineering with Artificial Intelligence and
              Machine Learning at Pimpri Chinchwad University.
            </p>

            <p>
              I enjoy solving practical problems through software, exploring
              AI tools, and collaborating on hackathon projects. My work
              spans student platforms, resource-sharing applications, and
              hardware prototypes.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>Ideas I’ve brought to life.</h2>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">{project.stack}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2>Tools behind the work.</h2>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">04 / LET’S CONNECT</p>
          <h2>Have an idea worth building?</h2>

          <p>
            I’m interested in learning opportunities, collaborations,
            and projects that solve useful problems.
          </p>

          <p>
            <a href="mailto:sujalbergal@gmail.com">
              sujalbergal@gmail.com
            </a>
          </p>

          <div
            className="actions"
            style={{ justifyContent: "center" }}
          >
            <a
              className="button primary"
              href="mailto:sujalbergal@gmail.com"
            >
              Email me ↗
            </a>

            <a
              className="button secondary"
              href="https://www.linkedin.com/in/sujal-bergal-b9803427a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="button secondary"
              href="https://github.com/sujalbergal"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Sujal Bergal</span>
        <span>Built with React & curiosity.</span>
      </footer>
    </>
  );
}

export default App;