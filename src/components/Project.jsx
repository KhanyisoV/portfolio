const Projects = () => {
  const projects = [
    {
      title: "Clinical Decision Support System",
      tech: "React.js · ASP.NET Web API · Python",
      description: "Healthcare ML system for diagnosis prediction",
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
      highlights: [
        "Responsive design implementation",
        "Interactive shopping cart",
        "Clean UI/UX experience"
      ]
    },
    {
      title: "University Course Enrolment App",
      tech: "Java · Android Studio",
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
      description: "Automated office environment system",
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
              <div className="project-number">0{idx + 1}</div>
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.description}</p>
              <ul className="project-highlights">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
