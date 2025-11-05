import React, { useEffect, useRef } from 'react'
import './experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  const experiences = [
    {
      id: 1,
      title: 'Full Stack Developer (Freelance)',
      period: '2023 — Present',
      description:
        'Building full‑stack web apps with React, Next.js and Nest.js. Focus on performant UI, clean APIs, and accessible UX.',
      tags: ['React', 'Next.js', 'Nest.js', 'TypeScript', 'MySQL'],
    },
    {
      id: 2,
      title: 'Open Source & Personal Projects',
      period: 'Ongoing',
      description:
        'Prototyping ideas, contributing to community repos, and exploring modern tooling to sharpen skills.',
      tags: ['Vite', 'Framer Motion', 'Accessibility', 'Testing'],
    },
  ]

  const projects = [
    {
      id: 1,
      name: 'Portfolio Website',
      summary:
        'A performant, responsive portfolio built with React and modern animations. Focus on scroll‑based interactions and accessibility.',
      tags: ['React', 'Motion', 'Vite'],
    },
    {
      id: 2,
      name: 'API‑Driven Dashboard',
      summary:
        'A dashboard consuming REST APIs with charts, filters, and CRUD workflows, emphasizing DX and clean architecture.',
      tags: ['Next.js', 'Nest.js', 'REST'],
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
      { threshold: 0.15 }
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience


