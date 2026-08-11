import React, { useState } from 'react';
import { BookOpen, Clock, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { coursesData, courseCategories } from '../data/courses';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCourses = activeCategory === 'all'
    ? coursesData
    : coursesData.filter(course => course.category === activeCategory);

  const handleInquire = (e, courseTitle) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="section-padding courses-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Educational Curriculum</span>
          <h2 className="heading-secondary">Our Educational Courses</h2>
          <p className="section-subtitle">
            Structured, classical Islamic learning designed for all levels of proficiency with academic rigor and personal mentorship.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Course Category Filters">
          {courseCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Responsive Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <article className="course-card" key={course.id}>
              {/* Card Image Header */}
              <div className="course-img-wrapper">
                <img
                  src={course.image}
                  alt={`${course.title} course at Madarsa Sirat-e-illahi`}
                  className="course-img"
                  loading="lazy"
                />
                <span className="course-level-badge">{course.level}</span>
              </div>

              {/* Card Body */}
              <div className="course-body">
                <div className="course-meta">
                  <span className="meta-item">
                    <Layers size={14} />
                    {course.categoryLabel}
                  </span>
                  <span className="meta-item">
                    <Clock size={14} />
                    {course.duration}
                  </span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                
                <p className="course-desc">{course.description}</p>

                {/* Highlights List */}
                <div className="course-highlights">
                  <span className="highlights-header">Key Curriculum Focus:</span>
                  <ul>
                    {course.highlights.map((point, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} className="check-icon" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="course-footer">
                <a
                  href="#contact"
                  onClick={(e) => handleInquire(e, course.title)}
                  className="btn btn-outline-emerald course-btn"
                >
                  Inquire Course
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .courses-section {
          background-color: var(--color-sand);
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .tab-btn {
          padding: 0.6rem 1.35rem;
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          transition: all var(--transition-fast);
        }

        .tab-btn:hover {
          color: var(--color-emerald-primary);
          border-color: var(--color-emerald-light);
        }

        .tab-btn.active {
          background-color: var(--color-emerald-primary);
          color: #FFFFFF;
          border-color: var(--color-emerald-primary);
          box-shadow: 0 4px 12px rgba(20, 73, 58, 0.2);
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .course-card {
          background-color: var(--color-surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }

        .course-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(197, 160, 89, 0.5);
        }

        .course-img-wrapper {
          position: relative;
          width: 100%;
          height: 210px;
          overflow: hidden;
          background-color: var(--color-emerald-darkest);
        }

        .course-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .course-card:hover .course-img {
          transform: scale(1.04);
        }

        .course-level-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: rgba(11, 43, 34, 0.85);
          color: var(--color-gold);
          border: 1px solid rgba(197, 160, 89, 0.4);
          padding: 0.25rem 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          border-radius: 100px;
          backdrop-filter: blur(4px);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .course-body {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .course-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
        }

        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-emerald-primary);
          background-color: var(--color-emerald-subtle);
          padding: 0.25rem 0.6rem;
          border-radius: var(--radius-sm);
        }

        .course-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-bottom: 0.6rem;
          line-height: 1.3;
        }

        .course-desc {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.25rem;
        }

        .course-highlights {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px dashed var(--color-border);
        }

        .highlights-header {
          display: block;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-charcoal);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .course-highlights ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .course-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.84375rem;
          color: var(--color-text-main);
          line-height: 1.4;
        }

        .check-icon {
          color: var(--color-emerald-primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .course-footer {
          padding: 1.25rem 1.5rem;
          background-color: var(--color-ivory);
          border-top: 1px solid var(--color-border);
        }

        .course-btn {
          width: 100%;
          font-size: 0.875rem;
        }

        @media (max-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
