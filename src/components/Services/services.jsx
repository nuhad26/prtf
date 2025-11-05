import React from 'react';
import './services.css';
const Services = () => {
  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React, HTML, CSS, and JavaScript. Creating modern, user-friendly web applications with clean code and best practices.",
      skills: ["React", "HTML/CSS", "JavaScript", "Responsive Design"]
    },
    {
      id: 2,
      icon: "🎨",
      title: "UI/UX Design Support",
      description: "Assisting in creating intuitive user interfaces and improving user experience. Converting designs to code and ensuring pixel-perfect implementation.",
      skills: ["Figma", "Prototyping", "Design Systems", "User Research"]
    },
    {
      id: 3,
      icon: "🔧",
      title: "Web Maintenance & Updates",
      description: "Providing ongoing support for existing websites including bug fixes, content updates, and performance optimizations. Ensuring websites stay current and functional.",
      skills: ["Debugging", "Testing", "Performance", "Updates"]
    },
    {
      id: 4,
      icon: "📱",
      title: "Responsive Web Solutions",
      description: "Creating mobile-friendly websites that work seamlessly across all devices. Ensuring optimal user experience on desktop, tablet, and mobile platforms.",
      skills: ["Mobile-First", "CSS Grid/Flexbox", "Media Queries", "Cross-browser"]
    },
    {
      id: 5,
      icon: "🚀",
      title: "Learning & Collaboration",
      description: "Eager to learn new technologies and contribute to team projects. Bringing fresh perspectives and enthusiasm to development challenges.",
      skills: ["Team Work", "Quick Learning", "Adaptability", "Problem Solving"]
    },
    {
  id: 6,
  icon: "🔍",
  title: "Quality Assurance & Testing",
  description: "Ensuring software reliability through comprehensive testing strategies. Implementing automated testing frameworks and maintaining high code quality standards.",
  skills: ["Test Automation", "Bug Tracking", "Quality Control", "Test Planning"]
}
  ];

  return (
    <div id="services" className="services">
      <div className="services-title">
        <h2>My Services</h2>
        <p>What I can offer as a growing developer</p>
      </div>
      <div className="service-container">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-skills">
              {service.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;