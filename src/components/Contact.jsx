import { useState } from "react";
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo mode)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Feel free to reach out for collaborations, opportunities, or questions.
        </p>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <a href="mailto:khanyisovabaza@gmail.com">khanyisovabaza@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <Github size={24} />
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/KhanyisoV" target="_blank" rel="noopener noreferrer">
                  github.com/KhanyisoV
                </a>
              </div>
            </div>
            <div className="contact-item">
              <Linkedin size={24} />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/khanyiso-vabaza-2b4b621b4/" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;