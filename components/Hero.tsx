export default function Hero() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="profile-container">
          <img src="/assets/profile-picture.jpeg" alt="Profile Picture" className="home-profile-pic" />
        </div>
        <h1>
          Hi, I am <span className="highlight"> Muhammad Iqbal Maulana</span>
        </h1>
        <p className="home-subtitle">Full-Stack Software Engineer</p>
        <p className="home-description">Passionate about software engineering</p>
        <div className="home-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}


