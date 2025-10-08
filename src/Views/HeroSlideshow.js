// src/Views/HeroSlideshow.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import "./HeroSlideshow.css";

export default function HeroSlideshow({
  images = [],
  intervalMs = 4500,
  fadeMs = 600,
  className = "",
  ariaLabel = "Food photos slideshow",
  fit = "cover",                 // "cover" or "contain"
  objectPosition = "50% 50%",    // e.g. "50% 35%" to bias upward
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const pics = useMemo(() => images.filter(Boolean), [images]);
  const last = Math.max(0, pics.length - 1);

  useEffect(() => {
    pics.forEach((src) => { const img = new Image(); img.src = src; });
  }, [pics]);

  useEffect(() => {
    if (pics.length <= 1 || paused) return;
    timerRef.current = setInterval(() => setIdx((i) => (i >= last ? 0 : i + 1)), intervalMs);
    return () => clearInterval(timerRef.current);
  }, [pics.length, last, paused, intervalMs]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onKeyDown = (e) => {
    if (!pics.length) return;
    if (e.key === "ArrowRight") setIdx((i) => (i >= last ? 0 : i + 1));
    if (e.key === "ArrowLeft")  setIdx((i) => (i <= 0 ? last : i - 1));
  };

  if (!pics.length) return null;

  return (
    <div
      className={`hero-slideshow ${className}`}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={0}
      style={{ "--fade-ms": `${fadeMs}ms`, "--fit": fit, "--pos": objectPosition }}
    >
      {pics.map((src, i) => (
        <img
          key={src}
          className={`hero-slide ${i === idx ? "is-active" : ""}`}
          src={src}
          alt=""
          aria-hidden={i === idx ? "false" : "true"}
          draggable="false"
        />
      ))}

      {pics.length > 1 && (
        <div className="hero-dots" aria-hidden="true">
          {pics.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-dot ${i === idx ? "is-active" : ""}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
