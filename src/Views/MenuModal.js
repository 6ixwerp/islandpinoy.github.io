// src/Views/MenuModal.js
import React, { useEffect, useState } from "react";
import "./MenuModal.css";

export default function MenuModal({
  open,
  onClose,
  images = [],
  startAt = 0,       // which image to open first
  thumbnails = true, // false = open image instantly (lightbox mode)
}) {
  // Initialize active immediately to avoid first-render flash when thumbnails=false
  const initialActive = !thumbnails
    ? Math.min(startAt, Math.max(0, images.length - 1))
    : images.length === 1
    ? 0
    : null;

  const [active, setActive] = useState(initialActive);

  // When the modal (re)opens, set up keyboard handlers and lock scroll.
  // Also re-sync `active` in case startAt/images changed.
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setActive((i) =>
          i == null ? 0 : Math.min(i + 1, images.length - 1)
        );
      if (e.key === "ArrowLeft")
        setActive((i) => (i == null ? 0 : Math.max(i - 1, 0)));
    };
    document.addEventListener("keydown", onKey);

    // Sync active whenever we (re)open
    setActive(
      !thumbnails
        ? Math.min(startAt, Math.max(0, images.length - 1))
        : images.length === 1
        ? 0
        : null
    );

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, thumbnails, startAt, images.length, onClose]);

  if (!open) return null;

  const showingLightbox = active != null;

  return (
    <>
      <div className="menu-backdrop" onClick={onClose} />
      <div
        className="menu-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-title"
      >
        <button
          className="menu-close"
          type="button"
          onClick={onClose}
          aria-label="Close menu"
        >
          ×
        </button>

        {/* Hide title/subtitle while a photo is open (prevents faint “Our Menu” behind it) */}
        {!showingLightbox && (
          <>
            <h2 id="menu-title" className="menu-title">
              Our Menu
            </h2>
            {thumbnails && images.length > 1 && (
              <p className="menu-sub">Tap a photo to enlarge</p>
            )}
          </>
        )}

        {/* Thumbnail grid (only when thumbnails=true AND multiple images AND no lightbox open) */}
        {thumbnails && images.length > 1 && !showingLightbox && (
          <div className="menu-gallery">
            {images.map((img, i) => (
              <button
                key={img.src}
                className="menu-thumb"
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open ${img.alt || "menu image"}`}
              >
                <img src={img.src} alt={img.alt || ""} loading="lazy" />
              </button>
            ))}
          </div>
        )}

        {/* Lightbox */}
        {showingLightbox && (
          <div
            className="lightbox"
            // Click outside the image -> close (or go back to grid if thumbnails=true)
            onClick={() => (thumbnails ? setActive(null) : onClose())}
          >
            <img
              className="lightbox-img"
              src={images[active].src}
              alt={images[active].alt || ""}
              // Click *on* the image should NOT close the lightbox
              onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
              <div className="lightbox-nav" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="lightbox-btn"
                  onClick={() => setActive((i) => Math.max(i - 1, 0))}
                  disabled={active === 0}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="lightbox-btn"
                  onClick={() =>
                    setActive((i) => Math.min(i + 1, images.length - 1))
                  }
                  disabled={active === images.length - 1}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
