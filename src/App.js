import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <h1 className="logo">KV</h1>
        
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">Welcome to my portfolio</span>
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Khanyiso Vabaza</span>
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
            <a href="https://www.linkedin.com/in/khanyiso-vabaza-761905212/" target="_blank" rel="noopener noreferrer">
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

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a motivated IT professional with a Bachelor of Information Technology from 
            Nelson Mandela University in Gqeberha, Completed in 2025.
          </p>
          <p>
            My journey in technology has been marked by continuous learning and achievement, 
            earning certifications from industry leaders including Cisco, IBM, and HP. I specialize 
            in cybersecurity, web development, and networking solutions.
          </p>
          <p>
            I'm passionate about leveraging technology to solve real-world problems and am seeking 
            challenging opportunities where I can apply my technical skills, problem-solving abilities, 
            and collaborative mindset.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>8+</h3>
            <p>Certifications</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-card">
            <h3>2025</h3>
            <p>Completed</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "Clinical Decision Support System",
      tech: "React.js · ASP.NET Web API · Python · MS SQL",
      description: "Healthcare ML system for diagnosis prediction",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      url: "https://github.com/KhanyisoV/Clinical-Decision-Support-System.git",
      highlights: [
        "Backend system using ASP.NET Web API",
        "Machine Learning integration for diagnosis",
        "API development and system integration"
      ]
    },
    {
      title: "Job Application Tracker",
      tech: "React · ASP.NET Core · Azure SQL · Docker",
      description: "Full-stack application tracking system",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      url: "https://jobtracker-frontend-chd0d5hva6e3buh2.southafricanorth-01.azurewebsites.net/",
      highlights: [
        "RESTful APIs with ASP.NET Core",
        "Docker deployment and Azure hosting",
        "CI/CD automation pipeline"
      ]
    },
    {
      title: "E-Commerce Website",
      tech: "HTML · CSS · JavaScript",
      description: "Responsive online store front-end",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://soeclothing.co.za/",
      highlights: [
        "Responsive design implementation",
        "Interactive shopping cart",
        "Clean UI/UX experience"
      ]
    },
    {
      title: "University Course Enrolment App",
      tech: "Java · Android Studio",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      url: "https://github.com/KhanyisoV/project_imob.git",
      description: "Mobile course registration system",
      highlights: [
        "Android native development",
        "CRUD operations",
        "API-based task management"
      ]
    },
    {
      title: "IoT Smart Environment",
      tech: "Python · Cisco · IoT",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      url: "https://github.com/KhanyisoV/Python-IoT.git",
      description: "Automated office environment system",
      highlights: [
        "Smart device integration",
        "Sensor automation",
        "IoT communication protocols"
      ]
    },
    {
      title: "To-Do List Console App (.NET)",
      tech: ".NET · React · C#",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
      description: "A simple C# .NET Console Application built to practice Object-Oriented Programming (OOP) and SOLID principles.",
      highlights: [
        "Smart device integration",
        "Sensor automation",
        "IoT communication protocols"
      ]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card" style={{ animationDelay: `${idx * 0.1}s` }}>
            <img src={project.image} alt={project.title} className="project-icon" />
            <h3>{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-desc">{project.description}</p>
            <ul className="project-highlights">
              {project.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project →
            </a>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C#", "Python", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      title: "Frameworks",
      skills: [".NET", "ASP.NET Core", "React.js", "Node.js"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["Microsoft Azure", "Docker", "CI/CD", "GitHub Actions"]
    },
    {
      title: "Cybersecurity",
      skills: ["Threat ID", "Security Protocols", "Data Protection"]
    },
    {
      title: "Networking",
      skills: ["Cisco Systems", "Network Fundamentals", "IoT"]
    },
    {
      title: "Tools",
      skills: ["Linux", "Git", "Visual Studio", "Android Studio"]
    }
  ];

  return (
    <section id="skills" className="section dark-section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const certifications = [
  { 
    name: "IBM Cybersecurity Fundamentals", 
    org: "IBM SkillsBuild", 
    date: "Sep 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  { 
    name: "IBM Web Development Fundamentals", 
    org: "IBM SkillsBuild", 
    date: "Sep 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  },
  { 
    name: "Introduction to Cybersecurity", 
    org: "Cisco", 
    date: "Feb 2024",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
  { 
    name: "IT for Business Success", 
    org: "HP Foundation", 
    date: "Sep 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"
  },
  { 
    name: "Effective Business Websites", 
    org: "HP Foundation", 
    date: "Sep 2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg"
  },
  { 
    name: "Introduction to IoT", 
    org: "Cisco", 
    date: "Jun 2021",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
  { 
    name: "NDG Linux Unhatched", 
    org: "Cisco", 
    date: "Jun 2021",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
  },
  { 
    name: "CI/CD Pipelines", 
    org: "LinkedIn Learning", 
    date: "Jun 2026",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
  }
];
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Bachelor of Information Technology</h3>
              <p className="institution">Nelson Mandela University</p>
              <p className="status">Completed · 2025</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>High School Diploma</h3>
              <p className="institution">Holy Cross High School</p>
              <p className="status">Completed</p>
            </div>
          </div>
        </div>

        <h3 className="cert-title">Professional Certifications</h3>
        <div className="cert-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="cert-card">
            <img src={cert.image} alt={cert.org} className="cert-icon" />
            <div className="cert-header">
              <h4>{cert.name}</h4>
              <span className="cert-date">{cert.date}</span>
            </div>
            <p className="cert-org">{cert.org}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [status, setStatus] = useState("");


  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  try {
    const response = await fetch("https://formspree.io/f/xpqpkqwv", {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      setStatus("SUCCESS");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } else {
      setStatus("ERROR");
    }
  } catch (error) {
    setStatus("ERROR");
  }
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
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows="5"
            />
            <button type="submit" className="btn btn-primary">
              {status === "SUCCESS" ? "Message Sent! ✓" : "Send Message"}
            </button>
            {status === "ERROR" && (
              <p style={{ color: '#ff6b6b', marginTop: '1rem' }}>
                Oops! There was an error sending your message.
              </p>
            )}
           
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
                <a href="https://www.linkedin.com/in/khanyiso-vabaza-761905212/" target="_blank" rel="noopener noreferrer">
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

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
        }

        .app {
          position: relative;
        }

        /* Navbar Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-links a:hover {
          color: #667eea;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 8rem 2rem 4rem;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          animation: fadeInUp 0.8s ease;
        }

        .hero-label {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #a0a0a0;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #b0b0b0;
          line-height: 1.8;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn {
          padding: 1rem 2rem;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #fff;
          border: 2px solid #667eea;
        }

        .btn-secondary:hover {
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-3px);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transform: translateY(-5px);
        }

        .hero-image {
          position: relative;
          height: 500px;
        }

        .floating-card {
          position: absolute;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
        }

        .card-1 {
          width: 300px;
          height: 200px;
          top: 0;
          right: 0;
          animation: float 6s ease-in-out infinite;
        }

        .card-2 {
          width: 250px;
          height: 180px;
          top: 150px;
          right: 100px;
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .card-3 {
          width: 200px;
          height: 150px;
          top: 300px;
          right: 50px;
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          animation: bounce 2s infinite;
        }

        /* Section Styles */
        .section {
          padding: 6rem 2rem;
          position: relative;
        }

        .dark-section {
          background: #0f0f0f;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          text-align: center;
          color: #a0a0a0;
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        /* About Section */
        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #b0b0b0;
          margin-bottom: 1.5rem;
        }

        .about-stats {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stat-card {
          padding: 2rem;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-10px);
        }

        .stat-card h3 {
          font-size: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-card p {
          color: #a0a0a0;
          font-size: 1rem;
        }

        /* Projects Section */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .project-card {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease;
          animation-fill-mode: both;
        }
          .project-icon {
            width: 50px;
            height: 50px;
            margin-bottom: 1rem;
            filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
          }
          .cert-icon {
            width: 40px;
            height: 40px;
            margin-bottom: 1rem;
            filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
          }

          .project-link {
          display: inline-block;
          margin-top: 1.5rem;
          color: #667eea;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          position: relative;
        }

        .project-link::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .project-link:hover {
          color: #764ba2;
        }

        .project-link:hover::after {
          width: 100%;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: #667eea;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .project-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.3;
          margin-bottom: 1rem;
        }

        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .project-tech {
          color: #667eea;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .project-desc {
          color: #a0a0a0;
          margin-bottom: 1rem;
        }

        .project-highlights {
          list-style: none;
          padding: 0;
        }

        .project-highlights li {
          color: #b0b0b0;
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
        }

        .project-highlights li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #667eea;
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .skill-category {
          padding: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease;
          animation-fill-mode: both;
        }

        .skill-category:hover {
          transform: translateY(-10px);
          border-color: #667eea;
        }

        .skill-category h3 {
          margin-bottom: 1.5rem;
          color: #667eea;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(102, 126, 234, 0.1);
          border: 1px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(102, 126, 234, 0.2);
          transform: scale(1.05);
        }

        /* Education Section */
        .education-timeline {
          max-width: 800px;
          margin: 3rem auto;
          position: relative;
        }

        .education-timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
        }

        .timeline-item {
          position: relative;
          padding-left: 60px;
          margin-bottom: 3rem;
        }

        .timeline-dot {
          position: absolute;
          left: 11px;
          top: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }

        .timeline-content {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 2rem;
        }

        .timeline-content h3 {
          margin-bottom: 0.5rem;
        }

        .institution {
          color: #667eea;
          margin-bottom: 0.5rem;
        }

        .status {
          color: #a0a0a0;
        }

        .cert-title {
          text-align: center;
          margin: 4rem 0 2rem;
          font-size: 2rem;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .cert-card {
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-10px);
          border-color: #667eea;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.2);
        }

        .cert-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .cert-header h4 {
          font-size: 1.1rem;
        }

        .cert-date {
          color: #a0a0a0;
          font-size: 0.9rem;
        }

        .cert-org {
          color: #b0b0b0;
        }

        /* Contact Section */
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem; 
          align-items: start;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form input,
        .contact-form textarea {
          padding: 1rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
          color: #fff;
          font-size: 1rem;
          resize: vertical;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #777;
        }

        .contact-form button {
          align-self: flex-start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-item h4 {
          margin-bottom: 0.25rem;
        }

        .contact-item a {
          color: #667eea;
          text-decoration: none;
        }

        .contact-item a:hover {
          text-decoration: underline;
        }

        /* Animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Styles */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-image {
    display: none;
  }

  .hero-buttons {
    justify-content: center;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease;
    padding: 2rem;
  }

  .nav-links.active {
    right: 0;
  }

  .menu-toggle {
    display: block;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stat-card h3 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }

  .contact-form,
  .contact-info {
    width: 100%;
  }

  .section {
    padding: 4rem 1rem;
  }

  .nav-container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .project-card,
  .skill-category,
  .cert-card {
    padding: 1.5rem;
  }

  .hero-section {
    padding: 6rem 1rem 4rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
  }
}
          
        /* Responsive Styles */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-image {
    display: none;
  }

  .hero-buttons {
    justify-content: center;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}

@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(10, 10, 10, 0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease;
    padding: 2rem;
  }

  .nav-links.active {
    right: 0;
  }

  .menu-toggle {
    display: block;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-content,
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .stat-card h3 {
    font-size: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }

  .contact-form,
  .contact-info {
    width: 100%;
  }

  .section {
    padding: 4rem 1rem;
  }

  .nav-container {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .logo {
    font-size: 1.5rem;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .project-card,
  .skill-category,
  .cert-card {
    padding: 1.5rem;
  }

  .hero-section {
    padding: 6rem 1rem 4rem;
  }

  .social-links a {
    width: 40px;
    height: 40px;
  }
}
      }`}</style>
    </div>
  );
}