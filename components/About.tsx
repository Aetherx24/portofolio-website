export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I’m Iqbal, a passionate Full-Stack Developer with hands-on experience in building scalable and secure web applications using modern technologies like Next.js, NestJS, TypeScript, and Tailwind CSS. I enjoy creating projects that combine functionality and clean design, from educational platforms and digital banking systems to e-commerce solutions. I’m always eager to learn, collaborate, and explore new ways to bring ideas to life through code. Welcome to my portfolio — feel free to explore my work and see what I’ve built!
            </p>
            <h3>My Skills</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}


