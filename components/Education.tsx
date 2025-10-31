export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {/* New, most recent education */}
          <div className="education-item card-right">
            <div className="education-row">
              <div className="education-notes">
              Completed a 25-week intensive program covering front-end and back-end development, software architecture, and collaborative engineering practices. Recognized for outstanding performance and technical excellence.
              </div>
              <div className="education-card">
              <div className="education-date">2025 - 2025</div>
              <h3 className="education-title">Software Engineering Program</h3>
              <div className="education-school">RevoU</div>
              <img src="/Logo_revou.png" alt="RevoU" width={200} />
              <p className="education-description">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="education-item card-left">
            <div className="education-row">
              <div className="education-card">
              <div className="education-date">2020 - 2023</div>
              <h3 className="education-title">Master of Business Administration</h3>
              <div className="education-school">Adelphi University</div>
              <img src="/Adelphi.png" alt="Adelphi University" width={200} />
              <p className="education-description">Long Island, New York</p>
              </div>
              <div className="education-notes">
              Focused on the intersection of business strategy and technology, developing expertise in data management, digital transformation, and systems analysis to drive organizational performance.
              </div>
            </div>
          </div>
          <div className="education-item card-right">
            <div className="education-row">
              <div className="education-notes">Built a strong analytical foundation through courses in econometrics, microeconomics, and macroeconomics. Developed a deep understanding of market dynamics, data interpretation, and economic decision-making processes.</div>
              <div className="education-card">
              <div className="education-date">2018 - 2020</div>
              <h3 className="education-title">Bachelor of Economics</h3>
              <div className="education-school">University of Massachusetts Boston</div>
              <img src="/university-of-massachusetts-boston2227.jpg" alt="University of Massachusetts Boston" width={200} />
              <p className="education-description">Boston, Massachusetts</p>
              </div>
            </div>
          </div>
          <div className="education-item card-left">
            <div className="education-row">
              <div className="education-card">
              <div className="education-date">2016 - 2018</div>
              <h3 className="education-title">Associate in Arts</h3>
              <div className="education-school">Green River College</div>
              <img src="/grc-logo.png" alt="Green River College" width={200} />
              <p className="education-description">Auburn, Washington</p>
              </div>
              <div className="education-notes">Completed a broad-based curriculum spanning science, business, mathematics, and physical education, cultivating critical thinking and a versatile academic background that supported advanced business and economic studies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


