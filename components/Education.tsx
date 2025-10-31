export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-card">
              <div className="education-date">2020 - 2023</div>
              <h3 className="education-title">Master of Business Administration</h3>
              <div className="education-school">Adelphi University</div>
              <img src="/assets/Adelphi.png" alt="Adelphi University" width={200} />
              <p className="education-description">Long Island, New York</p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-card">
              <div className="education-date">2018 - 2020</div>
              <h3 className="education-title">Bachelor of Economics</h3>
              <div className="education-school">University of Massachusetts Boston</div>
              <img src="/assets/university-of-massachusetts-boston2227.jpg" alt="University of Massachusetts Boston" width={200} />
              <p className="education-description">Boston, Massachusetts</p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-card">
              <div className="education-date">2016 - 2018</div>
              <h3 className="education-title">Associate in Arts</h3>
              <div className="education-school">Green River College</div>
              <img src="/assets/grc-logo.png" alt="Green River College" width={200} />
              <p className="education-description">Auburn, Washington</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


