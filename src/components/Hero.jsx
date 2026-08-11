import React from 'react';
import { ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { madarsaInfo } from '../data/madarsaInfo';

export default function Hero() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg">
        <img
          src="/images/hero_main.jpg"
          alt="Madarsa Sirat-e-illahi Library and Quranic Study Environment"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          {/* Subtle Tagline Badge */}
          <div className="hero-badge">
            <span className="badge-divider">•</span>
            <span>Authentic Islamic Education</span>
          </div>

          {/* Main Title */}
          <h1 className="hero-title">
            {madarsaInfo.name}
          </h1>

          <p className="hero-tagline">
            {madarsaInfo.tagline}
          </p>

          {/* Intro Text */}
          <p className="hero-intro">
            {madarsaInfo.heroSubtitle}
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <a
              href="#courses"
              onClick={(e) => handleScroll(e, '#courses')}
              className="btn btn-primary"
            >
              Explore Courses
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="btn btn-secondary"
            >
              Contact Us
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Key Feature Highlights Pill Strip */}
          <div className="hero-highlights">
            <div className="highlight-pill">
              <span className="pill-dot"></span>
              <span>Quranic Tajweed</span>
            </div>
            <div className="highlight-pill">
              <span className="pill-dot"></span>
              <span>Hifz Program</span>
            </div>
            
            <div className="highlight-pill">
              <span className="pill-dot"></span>
              <span>Islamic Studies</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 92vh;
          padding-top: calc(var(--nav-height) + 4rem);
          padding-bottom: 5rem;
          display: flex;
          align-items: center;
          background-color: var(--color-emerald-darkest);
          color: #FFFFFF;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(11, 43, 34, 0.92) 0%,
            rgba(15, 56, 44, 0.86) 50%,
            rgba(20, 73, 58, 0.75) 100%
          );
        }

        .hero-container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 780px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(197, 160, 89, 0.4);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-sand);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .badge-arabic {
          font-family: var(--font-serif);
          color: var(--color-gold);
          font-size: 1rem;
        }

        .badge-divider {
          color: var(--color-gold);
          opacity: 0.6;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw + 1rem, 4.25rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin-bottom: 0.75rem;
        }

        .hero-tagline {
          font-size: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
          font-family: var(--font-serif);
          color: var(--color-gold);
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }

        .hero-intro {
          font-size: clamp(1rem, 1.2vw + 0.5rem, 1.1875rem);
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 680px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .hero-highlights {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .highlight-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        .pill-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: var(--color-gold);
        }

        @media (max-width: 640px) {
          .hero-section {
            min-height: 85vh;
            padding-top: calc(var(--nav-height) + 2rem);
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 0.875rem;
          }
          .hero-actions .btn {
            width: 100%;
          }
          .hero-highlights {
            gap: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}
