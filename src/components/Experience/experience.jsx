import React, { useEffect, useRef } from 'react'
import './experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  const experiences = [
    {
      id: 0,
      title: 'Full Stack Developer, Spinach Informatics Pvt. Ltd.',
      period: 'May 2026 – Aug 2026',
      description:
        'Built a SaaS-grade HRMS platform from scratch (employee management, attendance, leave, payroll, RBAC, organization management) using React, Next.js, NestJS, TypeScript and MySQL. Also built a multilingual, responsive medical tourism website with SEO, GEO and AEO best practices.',
      tags: ['React', 'Next.js', 'NestJS', 'TypeScript', 'MySQL', 'SEO'],
    },
    {
      id: 1,
      title: 'Full Stack Developer at BairuhaTech(Intern)',
      period: 'Aug 2025 – Mar 2026',
      description:
        'Developed and maintained full-stack modules for LMS, ERP and CRM systems. Built responsive UI with Next.js and Tailwind CSS, integrated REST APIs with NestJS, and contributed to a React Native (Expo) mobile app.',
      tags: ['React', 'Next.js', 'Nest.js', 'TypeScript', 'MySQL', 'Tailwind CSS', 'NestJS', 'React Native'],
      prLinks: [
       {
          label: 'BairuhaTech',
          href: 'https://www.bairuhatech.com',
        },
      ]
    },
    {
      id: 2,
      title: 'AI-Based Attendance Monitoring System',
      period: 'College Project',
      description:
        'College project where I built an AI-based class attendance monitoring system using Python, HTML, and CSS.',
      tags: ['Python', 'HTML', 'CSS', 'Computer Vision'],
    },
  ]

  const projects = [
    {
      id: 0,
      name: 'Enterprise SaaS HRMS Platform',
      summary:
        'Full-featured SaaS HRMS built from scratch: payroll, attendance, leave management, employee lifecycle, organization management, reporting, and secure role-based access control.',
      tags: ['React', 'Next.js', 'NestJS', 'TypeScript', 'MySQL'],
      isPrivate: true,
    },
    {
      id: 1,
      name: 'Medical Tourism Website',
      summary:
        'Multilingual, SEO-optimized, responsive website for an international medical tourism agency. Built with SEO, GEO and AEO best practices.',
      tags: ['Next.js', 'Tailwind CSS', 'SEO'],
      isPrivate: true,
    },
    {
      id: 2,
      name: 'Employee Management System',
      summary:
        'Built an Employee Management System with React(Next.js) and Nest.js. It allows you to manage your employees, tasks and its time tracking system.',
      tags: ['React', 'Next.js', 'Nest.js', 'MySQL'],
      prLinks: [
        {
          label: 'GitHub Repo(Front)',
          href: 'https://github.com/nuhad26/timesheet-frontend.git',
        },
        {
          label: 'GitHub Repo(Back)',
          href: 'https://github.com/nuhad26/timesheet-backend.git',
        },
        {
          label: 'GitHub Repo(API)',
          href: 'https://github.com/nuhad26/timesheet-api.git',
        },
      ],
    },
    {
      id: 3,
      name: 'Projects i have worked on',
      summary:
        'A list of projects i have worked on. It includes my personal projects and projects i have worked on for the company that includes LMS, ERP, CRM, etc.',
      tags: ['React', 'Next.js', 'Nest.js', 'MySQL', 'Tailwind CSS', 'TypeScript'],
      prLinks: [
       {
          label: 'GitHub Account',
          href: 'https://github.com/amannuhad',
        },
      ],
    },
  ]

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.xp-card, .proj-card')
    if (!cards || cards.length === 0) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      cards.forEach((card) => card.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05 }
    )

    cards.forEach((card, index) => {
      card.style.setProperty('--reveal-delay', `${index * 70}ms`)
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="experience" ref={sectionRef} aria-labelledby="experience-title">
      <div className="experience-title">
        <h2 id="experience-title">Experience</h2>
        <p>Roles I have taken on and projects I have built</p>
      </div>

      <div className="xp-grid" role="list">
        {experiences.map((xp) => (
          <div key={xp.id} className="xp-card reveal" role="listitem" aria-label={xp.title}>
            <div className="xp-header">
              <h3>{xp.title}</h3>
              <span className="xp-period">{xp.period}</span>
            </div>
            <p className="xp-desc">{xp.description}</p>
            <div className="xp-tags" aria-label={`${xp.title} technologies`}>
              {xp.tags.map((t, i) => (
                <span key={i} className="tag">{t}</span>
              ))}
            </div>
            {xp.prLinks?.length ? (
              <div className="card-links" aria-label={`${xp.title} GitHub pull requests`}>
                {xp.prLinks.map((link, idx) => (
                  <a
                    key={idx}
                    className="card-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <span className="card-link-icon" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="projects-block">
        <h3 className="projects-title">Selected Projects</h3>
        <div className="proj-grid" role="list">
          {projects.map((p) => (
            <div key={p.id} className="proj-card reveal" role="listitem" aria-label={p.name}>
              <h4>{p.name}</h4>
              <p className="proj-summary">{p.summary}</p>
              <div className="proj-tags" aria-label={`${p.name} stack`}>
                {p.tags.map((t, i) => (
                  <span key={i} className="tag">{t}</span>
                ))}
              </div>
              {p.isPrivate ? (
                <div className="card-links">
                  <span className="tag" style={{ opacity: 0.7, fontStyle: 'italic' }}>🔒 Private Project</span>
                </div>
              ) : p.prLinks?.length ? (
                <div className="card-links" aria-label={`${p.name} GitHub pull requests`}>
                  {p.prLinks.map((link, idx) => (
                    <a
                      key={idx}
                      className="card-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                      <span className="card-link-icon" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="xp-education-block">
        <h3 className="projects-title">Education</h3>
        <div className="xp-card reveal" role="listitem" aria-label="Education">
          <div className="xp-header">
            <h3>Bachelor of Computer Science</h3>
            <span className="xp-period">2022 – 2025</span>
          </div>
          <p className="xp-desc">MES Arts &amp; Science College</p>
        </div>
      </div>
    </section>
  )
}

export default Experience


