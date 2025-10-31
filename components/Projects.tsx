export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/assets/bmi-calculator-en-scaled-1-1024x543.jpg" alt="BMI Calculator" width={300} />
            <div className="project-info">
              <h3>BMI Calculator</h3>
              <p>Created a simple BMI calculator website using HTML, CSS and JavaScript</p>
              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/revou-fundamental-course/28-oct-24-Aetherx24" target="_blank" rel="noreferrer">
                  <i className="fab fa-github">Code</i>
                </a>
                <a href="https://revou-fundamental-course.github.io/28-oct-24-Aetherx24/" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/Luminark Landing Page.png" alt="Luminark" width={300} />
            <div className="project-info">
              <h3>Luminark</h3>
              <p>Created a Learning Management System called Luminark using Next.js and NestJS. It is a platform for creating and managing courses & lessons.</p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>NestJS</span>
                <span>TypeScript</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/revou-fsse-feb25/final-project-fe-aetherx24" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>Code
                </a>
                <a href="https://final-project-fe-aetherx24-production.up.railway.app" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <img src="/assets/RevoShop Landing Page.png" alt="RevoShop" width={300} />
            <div className="project-info">
              <h3>RevoShop</h3>
              <p>Created an e-commerce website called RevoShop using Next.js and utilizes a public API to fetch products data.</p>
              <div className="project-tags">
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/revou-fsse-feb25/milestone-3-aetherx24" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>Code
                </a>
                <a href="https://milestone-3-aetherx24.vercel.app/" target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


