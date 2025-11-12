import React, { useEffect, useRef } from 'react'
import './experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer at BairuhaTech(Intern)',
      period: '2025 — Present',
      description:
        'Worked on full‑stack web apps with React, Next.js and Nest.js. Focus on performant UI, clean APIs, and accessible UX.',
      tags: ['React', 'Next.js', 'Nest.js', 'TypeScript', 'MySQL'],
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
    // {
    //   id: 1,
    //   name: 'Portfolio Website',
    //   summary:
    //     'A performant, responsive portfolio built with React and modern animations. Focus on scroll‑based interactions and accessibility.',
    //   tags: ['React', 'Motion', 'Vite'],
    // },
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
              {p.prLinks?.length ? (
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
    </section>
  )
}

export default Experience


