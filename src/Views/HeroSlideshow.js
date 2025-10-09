// src/Views/HeroSlideshow.js
import React, { useEffect, useRef, useState } from "react";
import PictureResponsive from "../components/PictureResponsive";
import "./HeroSlideshow.css";

export default function HeroSlideshow({
  names = [],
  intervalMs = 4500,
  fadeMs = 600,
  className = "",
  ariaLabel = "Food photos slideshow",
  fit = "cover",
  objectPosition = "50% 50%",
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (names.length <= 1 || paused) return;
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % names.length), intervalMs);
    return () => clearInterval(timerRef.current);
  }, [names.length, paused, intervalMs]);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  if (!names.length) return null;

  return (
    <div
      className={`hero-slideshow ${className}`}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      tabIndex={0}
      style={{ "--fade-ms": `${fadeMs}ms`, "--fit": fit, "--pos": objectPosition }}
    >
      {names.map((name, i) => (
        <div
          key={name}
          className={`hero-slide ${i === idx ? "is-active" : ""}`}
          aria-hidden={i === idx ? "false" : "true"}
          style={{ position: "absolute", inset: 0, transition: "opacity 600ms", opacity: i === idx ? 1 : 0 }}
        >
          <PictureResponsive
            name={name}
            alt=""
            eager={i === 0}
            widths={[640, 1280, 1920]}
            sizes="100vw"
            width={1280}
            height={Math.round(1280 / (16/9))}
            fill                               // ⬅️ make it cover the slide area
            // If you want to bias the crop, pass a custom object-position:
            styleImg={{ objectPosition }}      // uses the prop above
          />
        </div>
      ))}
      {names.length > 1 && (
        <div className="hero-dots" aria-hidden="true">
          {names.map((_, i) => (
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
