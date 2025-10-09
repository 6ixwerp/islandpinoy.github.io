// src/Views/GalleryPage.js
import React, { useState } from "react";
import SiteHeader from "./SiteHeader";
import MenuModal from "./MenuModal";
import PictureResponsive from "../components/PictureResponsive";
import "./GalleryPage.css";

// Base names must exist in /public/img as name-{640,1280,1920}.(avif|webp)
const names = [
  "food1","food2","food3","food4","food5","food6",
  "food7","food8","food9","food10","food11","food12",
  "food13","food14","food15","food16","food17","food18"
];

// For the modal viewer, point to a larger version
const photos = names.map((n, i) => ({
  src: `/img/${n}-1280.webp`,
  alt: `Dish ${i + 1}`
}));

export default function GalleryPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [startAt, setStartAt] = useState(0);

  const openViewer = (index) => { setStartAt(index); setViewerOpen(true); };

  return (
    <main className="gallery-page">
      <SiteHeader />

      <section className="gallery-wrap">
        {/* <h1 className="gallery-title">Gallery</h1> */}

        <div className="gallery-grid">
          {names.map((name, i) => (
            <button
              key={name}
              className="gallery-item"
              type="button"
              onClick={() => openViewer(i)}
              aria-label={`Open image ${i + 1}`}
            >
              <PictureResponsive
                name={name}
                alt={`Dish ${i + 1}`}
                widths={[640]}                         // thumbs: one size is fine
                sizes="(max-width: 768px) 50vw, 25vw"  // tweak as you like
                fill                                   // makes it cover the tile
              />
            </button>
          ))}
        </div>
      </section>

      <MenuModal
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
        images={photos}
        thumbnails={false}
        startAt={startAt}
      />
    </main>
  );
}
