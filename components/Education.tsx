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
                25-week certified online course in Full-Stack Software Engineering. Notable
                coursework: built a full-stack website as the final project. Awarded a
                certificate of achievement with exemplary distinction.
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
                Concentration, projects, or key outcomes can be highlighted here.
              </div>
            </div>
          </div>
          <div className="education-item card-right">
            <div className="education-row">
              <div className="education-notes">Optional description of coursework or honors.</div>
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
              <div className="education-notes">Optional description of focus areas or activities.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


