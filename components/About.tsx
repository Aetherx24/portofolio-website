export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I’m Iqbal, a meticulous and adaptable Full Stack Software Engineer passionate about building efficient, user-friendly web applications using HTML, CSS, JavaScript/TypeScript, Next.js, Nest.js, and PostgreSQL. I have developed and deployed multiple projects—including a responsive personal site, an e-commerce platform integrating public APIs, and a Learning Management System with user authentication and student progress tracking—demonstrating end-to-end experience from UI to backend and database design. I write clean, maintainable code and collaborate effectively in multicultural teams through active roles in Indonesian student organizations. I’m eager to contribute to building reliable, scalable features, measure real user outcomes, and continue learning through hands-on product work.
            </p>
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-item">
                <i className="fab fa-html5" />
                <span>HTML5</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-css3-alt" />
                <span>CSS3</span>
              </div>
              <div className="skill-item">
                <i className="fab fa-js" />
                <span>JavaScript</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-code" />
                <span>TypeScript</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-layer-group" />
                <span>Next.js</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-server" />
                <span>NestJS</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-wind" />
                <span>Tailwind CSS</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-database" />
                <span>PostgreSQL</span>
              </div>
              <div className="skill-item">
                <i className="fas fa-cubes" />
                <span>Prisma ORM</span>
              </div>
            </div>
            <h3 style={{ marginTop: "2rem" }}>Soft Skills</h3>
            <div className="tag-list">
              <span className="tag">Problem Solving</span>
              <span className="tag">Team Collaboration</span>
              <span className="tag">Adaptability</span>
              <span className="tag">Resource Planning</span>
              <span className="tag">Release Coordination</span>
            </div>
            <div className="languages">
              <strong>Language:</strong> Indonesian (Native), English (Full Professional Proficiency)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


