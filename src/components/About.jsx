import React from 'react';
import { Award, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';
import { madarsaInfo } from '../data/madarsaInfo';

export default function About() {
  const valueIcons = [
    <ShieldCheck size={22} className="val-icon" key="1" />,
    <Compass size={22} className="val-icon" key="2" />,
    <Award size={22} className="val-icon" key="3" />,
    <HeartHandshake size={22} className="val-icon" key="4" />
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Institution Overview</span>
          <h2 className="heading-secondary">{madarsaInfo.about.title}</h2>
          <p className="section-subtitle">{madarsaInfo.about.subtitle}</p>
        </div>

        {/* Two-Column Grid Layout */}
        <div className="about-grid">
          {/* Left Column: High Quality Image */}
          <div className="about-image-wrapper">
            <div className="image-frame">
              <img
                src="/images/office.jpeg"
                alt="Madarsa Sirat-e-illahi Student Classroom and Quran Learning Environment"
                className="about-img"
              />
              <div className="image-gold-border"></div>
            </div>
            <div className="about-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Authentic Quranic & Sharia Curriculum</span>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="about-content">
            <h3 className="about-content-heading">
              Preserving Sacred Heritage Through Structured Education
            </h3>
            
            <p className="about-paragraph">
              {madarsaInfo.about.intro}
            </p>

            <div className="about-mission-box">
              <h4 className="mission-title">Our Core Mission</h4>
              <p className="mission-text">{madarsaInfo.about.mission}</p>
            </div>

            {/* Values Grid */}
            <div className="values-list">
              {madarsaInfo.about.values.map((val, idx) => (
                <div className="value-card" key={idx}>
                  <div className="value-icon-box">
                    {valueIcons[idx % valueIcons.length]}
                  </div>
                  <div>
                    <h5 className="value-title">{val.title}</h5>
                    <p className="value-desc">{val.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--color-ivory);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 3.5rem;
          align-items: center;
        }

        .about-image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
        }

        .about-img {
          width: 100%;
          height: auto;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          display: block;
          transition: transform var(--transition-slow);
        }

        .image-frame:hover .about-img {
          transform: scale(1.02);
        }

        .image-gold-border {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(197, 160, 89, 0.4);
          border-radius: var(--radius-lg);
          pointer-events: none;
        }

        .about-stat-card {
          position: absolute;
          bottom: -1.5rem;
          right: -1.5rem;
          background-color: var(--color-emerald-darkest);
          color: #FFFFFF;
          padding: 1.25rem 1.5rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-xl);
          border-left: 4px solid var(--color-gold);
          max-width: 260px;
        }

        .stat-number {
          display: block;
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--color-gold);
          line-height: 1.1;
        }

        .stat-label {
          font-size: 0.8125rem;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 500;
          margin-top: 0.25rem;
        }

        .about-content-heading {
          font-size: clamp(1.35rem, 2vw + 0.5rem, 1.85rem);
          font-weight: 700;
          color: var(--color-emerald-darkest);
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .about-paragraph {
          font-size: 1.0625rem;
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: 1.75rem;
        }

        .about-mission-box {
          background-color: var(--color-sand);
          border-left: 3px solid var(--color-emerald-primary);
          padding: 1.25rem 1.5rem;
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          margin-bottom: 2rem;
        }

        .mission-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-emerald-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }

        .mission-text {
          font-size: 0.9875rem;
          color: var(--color-text-main);
          font-style: italic;
          line-height: 1.6;
        }

        .values-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .value-card {
          display: flex;
          gap: 0.875rem;
          background-color: var(--color-surface);
          padding: 1.125rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border-subtle);
          box-shadow: var(--shadow-sm);
        }

        .value-icon-box {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background-color: var(--color-emerald-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .val-icon {
          color: var(--color-emerald-primary);
        }

        .value-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-bottom: 0.2rem;
        }

        .value-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .about-stat-card {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 1rem;
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .values-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
