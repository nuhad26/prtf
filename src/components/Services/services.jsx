import React, { useEffect, useRef } from 'react';
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
      id: 3,
      icon: "🔧",
      title: "Web Maintenance & Updates",
      description: "Providing ongoing support for existing websites including bug fixes, content updates, and performance optimizations. Ensuring websites stay current and functional.",
      skills: ["Debugging", "Testing", "Performance", "Updates"]
    },
     {
      id: 5,
      icon: "🧩",
      title: "Backend & API Development",
      description: "Designing and building secure, scalable APIs and backend services with Node.js and Express. Integrating databases, authentication, and best practices for performance and reliability.",
      skills: ["Node.js", "Nest.js", "REST APIs", "MySQL"]
    },
    {
      id: 4,
      icon: "📱",
      title: "Responsive Web Solutions",
      description: "Creating mobile-friendly websites that work seamlessly across all devices. Ensuring optimal user experience on desktop, tablet, and mobile platforms.",
      skills: ["Mobile-First", "CSS Grid/Flexbox", "Media Queries", "Cross-browser"]
    },
    {
      id: 2,
      icon: "🎬",
      title: "Social Media Video Editing",
      description:
        "Bring your content to life with scroll-stopping Instagram Reels & videos. I specialize in transforming raw footage into trending, interactive content that captures attention and drives engagement.",
      skills: [
        "Instagram Reels editing",
        "CapCut",
      ]
    },
    {
      id: 6,
      icon: "📚",
      title: "Learning & Collaboration",
      description: "Eager to learn new technologies and contribute to team projects. Bringing fresh perspectives and enthusiasm to development challenges.",
      skills: ["Team Work", "Quick Learning", "Adaptability", "Problem Solving"]
    }
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.service-card');
    if (!cards || cards.length === 0) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      cards.forEach((card) => card.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card, index) => {
      card.style.setProperty('--reveal-delay', `${index * 60}ms`);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--mx', `${x}px`);
    target.style.setProperty('--my', `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const target = e.currentTarget;
    target.style.removeProperty('--mx');
    target.style.removeProperty('--my');
  };

  return (
    <div id="services" className="services" aria-labelledby="services-title">
      <div className="services-title">
        <h2 id="services-title">My Services</h2>
        <p>What I can offer as a growing developer</p>
      </div>
      <div ref={containerRef} className="service-container" role="list">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-card reveal"
            role="listitem"
            aria-label={service.title}
            tabIndex={0}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="service-skills" aria-label={`${service.title} skills`}>
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