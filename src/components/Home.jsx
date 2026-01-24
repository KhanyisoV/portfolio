import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">Welcome to my portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Khanyiso</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer | Cloud & DevOps Enthusiast</h2>
          <p className="hero-description">
            Passionate about creating innovative solutions and leveraging cutting-edge technologies
            to solve real-world problems.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/KhanyisoV" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/khanyiso-vabaza-2b4b621b4/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:khanyisovabaza@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1"></div>
          <div className="floating-card card-2"></div>
          <div className="floating-card card-3"></div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Home;