'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalImages = 15
  
  // Auto-cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages)
  }

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Some memorable moments for me :) </p>
        </div>

        <div className="gallery-wrapper">
          {/* Main Image Display */}
          <div className="gallery-main">
            <div className="gallery-image-container">
              {Array.from({ length: totalImages }).map((_, index) => (
                <div
                  key={index}
                  className={`gallery-image ${index === currentIndex ? 'active' : ''}`}
                >
                  <Image
                    src={`/assets/a${index + 1}.jpg`}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="gallery-nav gallery-nav-prev" onClick={goToPrevious}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="gallery-nav gallery-nav-next" onClick={goToNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Image Counter */}
            <div className="gallery-counter">
              {currentIndex + 1} / {totalImages}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="gallery-thumbnails">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              >
                <Image
                  src={`/assets/a${index + 1}.jpg`}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-section {
          padding: 100px 20px;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 16px;
          background: var(--gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: var(--text-muted);
        }

        .gallery-wrapper {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .gallery-main {
          position: relative;
          width: 100%;
          aspect-ratio: 16/10;
          border-radius: 20px;
          overflow: hidden;
          background: var(--surface);
          box-shadow: var(--shadow-xl);
        }

        .gallery-image-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .gallery-image {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .gallery-image.active {
          opacity: 1;
          z-index: 1;
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--transition);
          z-index: 10;
        }

        .gallery-nav:hover {
          background: rgba(124, 58, 237, 0.8);
          box-shadow: var(--glow-purple);
          transform: translateY(-50%) scale(1.1);
        }

        .gallery-nav-prev {
          left: 20px;
        }

        .gallery-nav-next {
          right: 20px;
        }

        .gallery-counter {
          position: absolute;
          bottom: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          padding: 8px 16px;
          border-radius: 20px;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          border: 1px solid var(--border);
          z-index: 10;
        }

        .gallery-thumbnails {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: 12px;
          padding: 0 10px;
        }

        .gallery-thumbnail {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: var(--transition);
          background: var(--surface);
        }

        .gallery-thumbnail:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .gallery-thumbnail.active {
          border-color: var(--primary);
          box-shadow: var(--glow-purple);
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 60px 15px;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .gallery-main {
            aspect-ratio: 4/3;
          }

          .gallery-nav {
            width: 40px;
            height: 40px;
          }

          .gallery-nav-prev {
            left: 10px;
          }

          .gallery-nav-next {
            right: 10px;
          }

          .gallery-thumbnails {
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
            gap: 8px;
          }

          .gallery-counter {
            bottom: 10px;
            right: 10px;
            font-size: 0.75rem;
            padding: 6px 12px;
          }
        }
      `}</style>
    </section>
  )
}
