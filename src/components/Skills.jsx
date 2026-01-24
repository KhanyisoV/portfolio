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
export default Skills;
