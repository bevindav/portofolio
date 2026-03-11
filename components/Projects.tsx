'use client'

import { useEffect, useRef } from 'react'
import { portfolioData } from '@/lib/data'

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="container">
        <span className="section-label">Projects</span>
        <h2 className="section-heading">Things I&apos;ve Built</h2>
        <p className="section-desc">
          Projects from my studies at ITB, each showcasing different aspects of computer science and problem-solving.
        </p>
        <div className="projects-grid">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="project-card">
              {project.image && (
                <div className="project-img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      const wrap = e.currentTarget.closest('.project-img-wrap') as HTMLElement
                      if (wrap) wrap.style.display = 'none'
                    }}
                  />
                </div>
              )}
              <div className="project-body">
                <h3>
                  {project.title}
                  {project.tag && <span className="tag">{project.tag}</span>}
                </h3>
                <p>{project.desc}</p>
                {project.tech && project.tech.length > 0 && (
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        <i className={tech.icon}></i>
                        {tech.label}
                      </span>
                    ))}
                  </div>
                )}
                {project.links.length === 1 ? (
                  <a href={project.links[0].url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <i className={project.links[0].icon}></i>
                    {project.links[0].label}
                  </a>
                ) : (
                  <div className="project-links-row">
                    {project.links.map((link, linkIndex) => (
                      <a key={linkIndex} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                        <i className={link.icon}></i>
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
