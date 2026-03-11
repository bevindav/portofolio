'use client'

import { useEffect, useRef } from 'react'
import { portfolioData } from '@/lib/data'

export default function Contact() {
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
    <section id="contact" className="section" ref={sectionRef}>
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-heading">Get In Touch</h2>
        <p className="section-desc">
          I&apos;m always open to discussing new projects, opportunities, or just having a chat about technology!
        </p>
        <div className="contact-cards">
          <a href={`mailto:${portfolioData.email}`} className="contact-card">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <strong>Email</strong>
              <span>{portfolioData.email}</span>
            </div>
          </a>
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <i className="fab fa-github"></i>
            </div>
            <div>
              <strong>GitHub</strong>
              <span>@bevindav</span>
            </div>
          </a>
          <a href={portfolioData.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon">
              <i className="fab fa-instagram"></i>
            </div>
            <div>
              <strong>Instagram</strong>
              <span>@vivianbevinda</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
