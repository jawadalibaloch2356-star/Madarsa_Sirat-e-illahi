import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  item,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalItems
}) {
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="lightbox-backdrop animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image Lightbox: ${item.title}`}
    >
      <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
        {/* Header Bar */}
        <div className="lightbox-header">
          <div className="lightbox-counter">
            <span>{currentIndex + 1}</span> / <span>{totalItems}</span>
          </div>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close image lightbox"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Body */}
        <div className="lightbox-content">
          {/* Previous Arrow */}
          <button
            type="button"
            className="lightbox-nav-btn nav-prev"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image Wrapper */}
          <div className="lightbox-image-box">
            <img
              src={item.image}
              alt={item.title}
              className="lightbox-img"
            />
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className="lightbox-nav-btn nav-next"
            onClick={onNext}
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Footer Caption */}
        <div className="lightbox-footer">
          <h4 className="lightbox-title">{item.title}</h4>
          {item.caption && <p className="lightbox-caption">{item.caption}</p>}
        </div>
      </div>

      <style>{`
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background-color: rgba(11, 43, 34, 0.94);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .lightbox-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          display: flex;
          flex-direction: column;
          max-height: 92vh;
          background-color: #081F19;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(197, 160, 89, 0.3);
          box-shadow: var(--shadow-xl);
          overflow: hidden;
        }

        .lightbox-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background-color: rgba(11, 43, 34, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .lightbox-counter {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-gold);
          letter-spacing: 0.05em;
        }

        .lightbox-close-btn {
          color: #FFFFFF;
          padding: 0.4rem;
          border-radius: var(--radius-sm);
          transition: background-color var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.15);
          color: var(--color-gold);
        }

        .lightbox-content {
          position: relative;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 320px;
          max-height: 65vh;
          overflow: hidden;
          background-color: #04120F;
          padding: 1rem;
        }

        .lightbox-image-box {
          max-width: 100%;
          max-height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lightbox-img {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
          border-radius: var(--radius-sm);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .lightbox-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: rgba(11, 43, 34, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-fast);
        }

        .lightbox-nav-btn:hover {
          background-color: var(--color-gold);
          color: #FFFFFF;
          border-color: var(--color-gold);
          transform: translateY(-50%) scale(1.08);
        }

        .nav-prev {
          left: 1rem;
        }

        .nav-next {
          right: 1rem;
        }

        .lightbox-footer {
          padding: 1.25rem 1.5rem;
          background-color: rgba(11, 43, 34, 0.9);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
        }

        .lightbox-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-gold);
          margin-bottom: 0.25rem;
        }

        .lightbox-caption {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
        }

        @media (max-width: 640px) {
          .lightbox-backdrop {
            padding: 0.5rem;
          }
          .lightbox-nav-btn {
            width: 38px;
            height: 38px;
          }
          .nav-prev {
            left: 0.5rem;
          }
          .nav-next {
            right: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
