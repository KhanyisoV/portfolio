const Education = () => {
  const certifications = [
    { name: "IBM Cybersecurity Fundamentals", org: "IBM SkillsBuild", date: "Sep 2025" },
    { name: "IBM Web Development Fundamentals", org: "IBM SkillsBuild", date: "Sep 2025" },
    { name: "Introduction to Cybersecurity", org: "Cisco", date: "Feb 2024" },
    { name: "IT for Business Success", org: "HP Foundation", date: "Sep 2025" },
    { name: "Effective Business Websites", org: "HP Foundation", date: "Sep 2025" },
    { name: "Introduction to IoT", org: "Cisco", date: "Jun 2021" },
    { name: "NDG Linux Unhatched", org: "Cisco", date: "Jun 2021" },
    { name: "CI/CD Pipelines", org: "LinkedIn Learning", date: "Jun 2026" }
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
export default Education;
