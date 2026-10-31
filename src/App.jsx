import "./App.css";
import {
  Line,
  Reveal,
  TiltCard,
  Magnetic,
  ScrollProgress,
  Spotlight,
  CursorRing,
  useScrolled,
} from "./effects";

const projects = [
  {
    title: "CampusOS AI — In Progress",
    description:
      "Contributing to backend development and research for an AI-powered student platform. My work focuses on backend functionality and exploring approaches for student support features.",
    stack: "Role: Backend Development & Research",
  },
  {
    title: "ResourceX — In Progress",
    description:
      "Contributing to backend development and research for a campus resource-sharing platform where teachers list resources, students submit requests, and administrators oversee the portal.",
    stack: "Role: Backend Development & Research",
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
  "FastAPI",
  "SQL",
  "REST APIs",
  "Git & GitHub",
  "Technical Research",
  "Java",
  "C / C++",
  "JavaScript",
  "React",
  "Django",
  "Arduino / ESP32",
];

function App() {
  const scrolled = useScrolled();

  return (
    <>
      <ScrollProgress />
      <Spotlight />
      <CursorRing />

      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="logo" href="#home" aria-label="Sujal home">
          Sujal bergal<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <Reveal as="p" className="eyebrow">
              CSE AI & ML STUDENT · DEVELOPER
            </Reveal>

            <h1>
              <Line delay={100}>
                Hi, I’m <span className="accent">Sujal Bergal.</span>
              </Line>
              <Line delay={220}>I turn ideas into</Line>
              <Line delay={340}>working software.</Line>
            </h1>

            <Reveal as="p" className="intro" delay={480}>
              I study at Pimpri Chinchwad University and build projects
              across AI, full-stack development, and embedded systems.
            </Reveal>

            <Reveal className="actions" delay={600}>
              <Magnetic>
                <a className="button primary" href="#projects">
                  Explore my projects ↗
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  className="button secondary"
                  href="https://github.com/sujalbergal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  className="button secondary"
                  href="https://www.linkedin.com/in/sujal-bergal-b9803427a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  className="button secondary"
                  href="/resume.pdf"
                  download="Sujal_Bergal_Resume.pdf"
                >
                  Download resume ↓
                </a>
              </Magnetic>
            </Reveal>
          </div>

          <TiltCard className="hero-card-wrap">
            <div className="hero-card" aria-label="My development interests">
              <div className="card-top">
                <span className="status-dot fx-pulse" />
                <span>Always building. Always learning.</span>
              </div>

              <img
                className="profile-photo"
                src="/profile.jpg"
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
          </TiltCard>
        </section>

        <Reveal as="section" id="about" className="section about">
          <div>
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>Curiosity drives what I build.</h2>
          </div>

          <div className="about-copy">
            <p>
              I’m a third-year B.Tech student specializing in Computer Science
              and Engineering with Artificial Intelligence and Machine Learning
              at Pimpri Chinchwad University.
            </p>

            <p>
              My interests focus on backend development and research. I work
              with Python, FastAPI, and SQL to develop backend functionality,
              explore API integrations, and investigate practical solutions
              for student and campus platforms.
            </p>

            <p>
              I’m currently contributing to CampusOS AI and ResourceX while
              strengthening my skills in API design, database management,
              and technical research.
            </p>
          </div>
        </Reveal>

        <Reveal as="section" id="projects" className="section">
          <p className="eyebrow">02 / SELECTED WORK</p>
          <h2>Projects I’m contributing to.</h2>

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
        </Reveal>

        <Reveal as="section" id="skills" className="section">
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2>Tools behind the work.</h2>

          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" id="contact" className="section contact">
          <p className="eyebrow">04 / LET’S CONNECT</p>
          <h2>Have an idea worth building?</h2>

          <p>
            I’m interested in learning opportunities, collaborations,
            and projects that solve useful problems.
          </p>

          <p>
            <a href="mailto:sujalbergal@gmail.com">sujalbergal@gmail.com</a>
          </p>

          <div className="actions" style={{ justifyContent: "center" }}>
            <Magnetic>
              <a className="button primary" href="mailto:sujalbergal@gmail.com">
                Email me ↗
              </a>
            </Magnetic>

            <Magnetic>
              <a
                className="button secondary"
                href="https://www.linkedin.com/in/sujal-bergal-b9803427a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
            </Magnetic>

            <Magnetic>
              <a
                className="button secondary"
                href="https://github.com/sujalbergal"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Sujal Bergal</span>
        <span>Built with React & curiosity.</span>
      </footer>
    </>
  );
}

export default App;
