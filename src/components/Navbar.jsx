import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { madarsaInfo } from '../data/madarsaInfo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section highlight logic
      const sections = ['home', 'about', 'courses', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="nav-brand">
          <div className="brand-icon">
            <BookOpen size={22} className="icon-emerald" />
          </div>
          <div className="brand-text">
            <span className="brand-name">{madarsaInfo.name}</span>
            <span className="brand-arabic">{madarsaInfo.arabicName}</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="mobile-drawer"
              onClick={(e) => e.stopPropagation()}
              aria-label="Mobile Menu"
            >
              <div className="mobile-drawer-header">
                <div className="brand-text">
                  <span className="brand-name">{madarsaInfo.name}</span>
                  <span className="brand-arabic">{madarsaInfo.arabicName}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-close"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="mobile-nav">
                <ul>
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mobile-drawer-footer">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="btn btn-emerald"
                  style={{ width: '100%' }}
                >
                  Contact Madarsa
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: var(--nav-height);
          background-color: rgba(251, 249, 244, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(224, 230, 227, 0.6);
          transition: all var(--transition-normal);
        }

        .navbar-header.scrolled {
          background-color: rgba(255, 255, 255, 0.96);
          box-shadow: var(--shadow-sm);
          border-bottom-color: var(--color-border);
        }

        .nav-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-md);
          background-color: var(--color-emerald-subtle);
          border: 1px solid rgba(20, 73, 58, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-emerald-primary);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-size: 1.125rem;
          font-weight: 800;
          color: var(--color-emerald-darkest);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .brand-arabic {
          font-family: var(--font-serif);
          font-size: 0.875rem;
          color: var(--color-gold);
          line-height: 1;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-main);
          position: relative;
          padding: 0.35rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--color-emerald-primary);
        }

        .nav-link.active {
          color: var(--color-emerald-primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background-color: var(--color-gold);
          border-radius: 2px;
        }

        .mobile-toggle {
          display: none;
          color: var(--color-emerald-darkest);
          padding: 0.4rem;
          border-radius: var(--radius-sm);
        }

        .mobile-drawer-backdrop {
          position: fixed;
          inset: 0;
          background-color: rgba(11, 43, 34, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1100;
          display: flex;
          justify-content: flex-end;
          animation: fadeIn 0.2s ease-out;
        }

        .mobile-drawer {
          width: 85%;
          max-width: 340px;
          height: 100%;
          background-color: var(--color-ivory);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-xl);
        }

        .mobile-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
        }

        .mobile-close {
          color: var(--color-text-muted);
          padding: 0.25rem;
        }

        .mobile-nav {
          padding-top: 1.5rem;
          flex: 1;
        }

        .mobile-nav ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-nav-link {
          display: block;
          padding: 0.875rem 1rem;
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          transition: background-color var(--transition-fast);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          background-color: var(--color-emerald-subtle);
          color: var(--color-emerald-primary);
        }

        .mobile-drawer-footer {
          padding-top: 1rem;
          border-top: 1px solid var(--color-border);
        }

        @media (max-width: 840px) {
          .nav-desktop {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}
