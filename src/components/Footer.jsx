import React from 'react';
import { BookOpen, Phone, Mail, MapPin } from 'lucide-react';
import { madarsaInfo } from '../data/madarsaInfo';

export default function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-root">
      {/* Top Gold Accent Border */}
      <div className="footer-gold-bar"></div>

      <div className="container footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="footer-brand-link">
              <div className="footer-brand-icon">
                <BookOpen size={20} />
              </div>
              <div>
                <h3 className="footer-brand-name">{madarsaInfo.name}</h3>
              </div>
            </a>
            <p className="footer-tagline-text">
              {madarsaInfo.tagline} — Dedicated to authentic Quranic studies, Classical Arabic, and holistic Islamic character building.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About Us</a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => handleScroll(e, '#courses')}>Courses</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleScroll(e, '#gallery')}>Gallery</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact & Location</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Contact Summary */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact Summary</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} className="f-icon" />
                <span>{madarsaInfo.contact.address.line1}, {madarsaInfo.contact.address.city}</span>
              </li>
              <li>
                <Phone size={16} className="f-icon" />
                <a href={`tel:${madarsaInfo.contact.phone.replace(/[^0-9+]/g, '')}`}>
                  {madarsaInfo.contact.phone}
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {madarsaInfo.name}. All rights reserved.</p>
          <p className="footer-subtext">Authentic Islamic Educational Institution</p>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: var(--color-emerald-darkest);
          color: #FFFFFF;
          position: relative;
        }

        .footer-gold-bar {
          height: 3px;
          background: linear-gradient(
            90deg,
            var(--color-emerald-primary) 0%,
            var(--color-gold) 50%,
            var(--color-emerald-primary) 100%
          );
        }

        .footer-container {
          padding-top: 4rem;
          padding-bottom: 2rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.25fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .footer-brand-icon {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(197, 160, 89, 0.4);
          color: var(--color-gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand-name {
          font-size: 1.125rem;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.2;
        }

        .footer-brand-arabic {
          font-family: var(--font-serif);
          font-size: 0.875rem;
          color: var(--color-gold);
        }

        .footer-tagline-text {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          max-width: 380px;
        }

        .footer-col-title {
          font-size: 0.9375rem;
          font-weight: 700;
          color: var(--color-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-nav-list a {
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color var(--transition-fast);
        }

        .footer-nav-list a:hover {
          color: var(--color-gold);
        }

        .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-contact-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .footer-contact-list a {
          color: rgba(255, 255, 255, 0.8);
          transition: color var(--transition-fast);
        }

        .footer-contact-list a:hover {
          color: var(--color-gold);
        }

        .f-icon {
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-subtext {
          font-style: italic;
          font-family: var(--font-serif);
          color: var(--color-gold);
        }

        @media (max-width: 840px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
