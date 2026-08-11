import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import GalleryLightbox from './GalleryLightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    currentIndex: 0
  });

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxState({
      isOpen: true,
      currentIndex: index
    });
  };

  const closeLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % filteredItems.length
    }));
  };

  const prevImage = () => {
    setLightboxState(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + filteredItems.length) % filteredItems.length
    }));
  };

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Institution Media</span>
          <h2 className="heading-secondary">Our Campus & Learning Gallery</h2>
          <p className="section-subtitle">
            A visual glance inside Madarsa Sirat-e-illahi's educational facilities, scholarly library, and student learning environments.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="gallery-tabs">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`g-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <figure
              key={item.id}
              className="gallery-card"
              onClick={() => openLightbox(index)}
              tabIndex={0}
              role="button"
              aria-label={`View photo: ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <div className="gallery-img-box">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <div className="zoom-icon-box">
                    <Maximize2 size={22} />
                  </div>
                  <span className="hover-title">{item.title}</span>
                  <span className="hover-badge">{item.categoryLabel}</span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxState.isOpen}
        item={filteredItems[lightboxState.currentIndex]}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        currentIndex={lightboxState.currentIndex}
        totalItems={filteredItems.length}
      />

      <style>{`
        .gallery-section {
          background-color: var(--color-ivory);
        }

        .gallery-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .g-tab-btn {
          padding: 0.55rem 1.25rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background-color: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 100px;
          transition: all var(--transition-fast);
        }

        .g-tab-btn:hover {
          color: var(--color-emerald-primary);
          border-color: var(--color-emerald-light);
        }

        .g-tab-btn.active {
          background-color: var(--color-emerald-primary);
          color: #FFFFFF;
          border-color: var(--color-emerald-primary);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .gallery-card {
          margin: 0;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background-color: var(--color-emerald-darkest);
          cursor: pointer;
          position: relative;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .gallery-card:hover, .gallery-card:focus-visible {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .gallery-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }

        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-slow);
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.06);
        }

        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(11, 43, 34, 0.9) 0%,
            rgba(11, 43, 34, 0.4) 50%,
            rgba(11, 43, 34, 0.1) 100%
          );
          opacity: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          text-align: center;
          color: #FFFFFF;
          transition: opacity var(--transition-normal);
        }

        .gallery-card:hover .gallery-hover-overlay,
        .gallery-card:focus-visible .gallery-hover-overlay {
          opacity: 1;
        }

        .zoom-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: var(--color-gold);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          transform: translateY(10px);
          transition: transform var(--transition-normal);
        }

        .gallery-card:hover .zoom-icon-box {
          transform: translateY(0);
        }

        .hover-title {
          font-size: 1.0625rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 0.25rem;
        }

        .hover-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-sand);
          background-color: rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 100px;
        }

        @media (max-width: 640px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
