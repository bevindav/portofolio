'use client'

import { useState, useEffect } from 'react'
import { portfolioData } from '@/lib/data'

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const subtitle = portfolioData.heroSubtitles[subtitleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseBeforeDelete = 2000
    const pauseBeforeNext = 500

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === subtitle) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete)
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setSubtitleIndex((prev) => (prev + 1) % portfolioData.heroSubtitles.length)
        setTimeout(() => {}, pauseBeforeNext)
      } else {
        setDisplayedText(
          isDeleting
            ? subtitle.substring(0, displayedText.length - 1)
            : subtitle.substring(0, displayedText.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, subtitleIndex])

  return (
    <header id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <p className="hero-tag">Computer Science · ITB · Bandung</p>
        <h1>
          Bevinda
          <br />
          Vivian
        </h1>
        <p className="hero-sub">{displayedText}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in Touch
          </a>
        </div>
        <div className="hero-socials">
          <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={portfolioData.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href={`mailto:${portfolioData.email}`} aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </header>
  )
}
