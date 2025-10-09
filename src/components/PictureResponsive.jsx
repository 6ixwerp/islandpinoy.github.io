// src/components/PictureResponsive.jsx
import React from "react";

/**
 * AVIF+WebP responsive picture.
 * - Use `eager` ONLY for the first hero image.
 * - `fill`: make the image absolutely fill its parent (hero/slide use).
 */
export default function PictureResponsive({
  name,
  alt = "",
  widths = [640, 1280, 1920],
  sizes = "100vw",
  eager = false,
  width,
  height,
  className,
  fill = false,               // NEW
  stylePicture = {},          // optional extra styles for <picture>
  styleImg = {}               // optional extra styles for <img>
}) {
  const srcSet = (ext) => widths.map(w => `/img/${name}-${w}.${ext} ${w}w`).join(", ");
  const fallback = `/img/${name}-${Math.max(...widths)}.webp`;

  const baseImgStyle = fill
    ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }
    : { width: "100%", height: "auto", objectFit: "cover" };

  const picStyle = fill ? { position: "absolute", inset: 0, ...stylePicture } : stylePicture;

  return (
    <picture className={className} style={picStyle}>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={fallback}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        fetchpriority={eager ? "high" : undefined}
        decoding="async"
        width={width}
        height={height}
        style={{ ...baseImgStyle, ...styleImg }}
      />
    </picture>
  );
}
