export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>I am currently looking for new opportunities and would love to hear from you!</p>
            <div className="contact-links">
              <a href="mailto:iqbalfahrur@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                iqbalfahrur@gmail.com
              </a>
              <a href="https://github.com/Aetherx24" target="_blank" rel="noreferrer" className="contact-item">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammadiqbalmaulanaa/" target="_blank" rel="noreferrer" className="contact-item">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="https://wa.me/6282135502300" target="_blank" rel="noreferrer" className="contact-item">
                <i className="fab fa-whatsapp"></i>
                WhatsApp
              </a>
            </div>
          </div>
          <form className="contact-form" id="contactForm">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Please Write Your Message Here"></textarea>
            </div>
            <button type="submit" className="btn primary-btn">
              <i className="fas fa-paper-plane"></i> Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


