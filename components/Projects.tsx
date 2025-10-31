export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/bmi-calculator-en-scaled-1-1024x543.jpg" alt="BMI Calculator" width={300} />
            <div className="project-info">
              <h3>BMI Calculator</h3>
              <div className="project-details">
                <div className="project-section">
                  <h4>Background</h4>
                  <p>Created a simple BMI calculator website as a foundational project to practice core web development skills and user interface design.</p>
                </div>
                <div className="project-section">
                  <h4>Method/Strategy/Solution</h4>
                  <p><strong>Responsibilities:</strong> Sole developer responsible for frontend design, user interface, calculation logic, and responsive layout. <strong>Scope:</strong> Built using HTML5 for semantic structure, CSS3 for styling and responsive design, and vanilla JavaScript for BMI calculation logic. Implemented real-time calculations triggered by user input (height and weight) with instant visual feedback and category classification (underweight, normal, overweight, obese).</p>
                </div>
                <div className="project-section">
                  <h4>Result/Output</h4>
                  <p>Successfully created a functional BMI calculator website with a clean, responsive interface that provides immediate BMI calculations and category classifications.</p>
                </div>
              </div>
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
            <img src="/Luminark Landing Page.png" alt="Luminark" width={300} />
            <div className="project-info">
              <h3>Luminark</h3>
              <div className="project-details">
                <div className="project-section">
                  <h4>Background</h4>
                  <p>Developed a modern Learning Management System (LMS) as a final project to create a comprehensive platform for online education, addressing the need for course management, student progress tracking, and administrative oversight in a single integrated solution.</p>
                </div>
                <div className="project-section">
                  <h4>Method/Strategy/Solution</h4>
                  <p><strong>Responsibilities:</strong> As the sole developer, I was responsible for end-to-end development including frontend architecture, backend API design, database schema, authentication systems, and deployment. <strong>Scope:</strong> Built the complete application using Next.js for frontend and NestJS for backend with TypeScript. Implemented secure authentication with role-based access control (students, teachers, administrators). Designed and developed course management, enrollment, and progress tracking features. Created an admin dashboard with analytics and integrated gamification elements. Optimized performance through database tuning, API rate limiting, and CDN integration.</p>
                </div>
                <div className="project-section">
                  <h4>Result/Output</h4>
                  <p>Successfully delivered a fully functional LMS with reduced latency, supporting up to 200 concurrent users. The platform enables seamless course management, student progress tracking, and administrative oversight, improving user engagement through gamification elements.</p>
                </div>
              </div>
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
            <img src="/RevoShop Landing Page.png" alt="RevoShop" width={300} />
            <div className="project-info">
              <h3>RevoShop</h3>
              <div className="project-details">
                <div className="project-section">
                  <h4>Background</h4>
                  <p>Built an e-commerce platform to demonstrate full-stack development skills and API integration. The project aimed to create a functional online shopping experience with real-time product data and user personalization features.</p>
                </div>
                <div className="project-section">
                  <h4>Method/Strategy/Solution</h4>
                  <p><strong>Responsibilities:</strong> Led full-stack development including frontend UI/UX design, API integration, state management, session handling, and checkout flow implementation. <strong>Scope:</strong> Developed using Next.js with TypeScript and Tailwind CSS for responsive design. Integrated a public REST API to fetch and display real-time product data. Implemented category browsing, search functionality, and detailed product views. Added returning-user login feature (without registration) with session management. Developed shopping cart functionality and multi-step checkout flow with form validation.</p>
                </div>
                <div className="project-section">
                  <h4>Result/Output</h4>
                  <p>Successfully created a fully functional e-commerce platform supporting browsing of over 100 products with category filtering. Enabled basic personalization for 100 users through session management. Delivered a seamless shopping experience with an intuitive checkout process.</p>
                </div>
              </div>
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


