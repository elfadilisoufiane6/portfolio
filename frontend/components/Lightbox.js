'use client';

import { useEffect, useState } from 'react';

export default function Lightbox({ images, openIdx, onClose }) {
  const [idx, setIdx] = useState(openIdx ?? 0);

  useEffect(() => {
    if (openIdx != null) setIdx(openIdx);
  }, [openIdx]);

  useEffect(() => {
    if (openIdx == null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % images.length);
      if (e.key === 'ArrowLeft')  setIdx((i) => (i - 1 + images.length) % images.length);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [openIdx, images.length, onClose]);

  if (openIdx == null || !images.length) return null;
  const src = images[idx];

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lb-close" onClick={onClose} aria-label="Close">×</button>

      {images.length > 1 && (
        <>
          <button
            className="lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >‹</button>
          <button
            className="lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length); }}
            aria-label="Next"
          >›</button>
        </>
      )}

      <img
        src={src}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="lb-img"
      />

      {images.length > 1 && (
        <div className="lb-count" dir="ltr">{idx + 1} / {images.length}</div>
      )}
    </div>
  );
}
