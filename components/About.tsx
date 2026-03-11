'use client'

import { useEffect, useRef } from 'react'
import { portfolioData } from '@/lib/data'

export default function About() {
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
    <section id="about" className="section" ref={sectionRef}>
      <div className="container">
        <span className="section-label">About Me</span>
        <div className="about-grid">
          <div className="about-photo">
            <div className="photo-frame">
              <img
                src={portfolioData.photo}
                alt={portfolioData.name}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x500/6366f1/FFFFFF?text=BV'
                }}
              />
            </div>
          </div>
          <div className="about-info">
            <h2>
              Hello! <span className="wave">👋</span>
            </h2>
            {portfolioData.about.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
            <div className="skills-grid">
              {portfolioData.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={skill.icon}></i>
                  {skill.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
