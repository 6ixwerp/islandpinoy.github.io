// src/Views/GalleryPage.js
import React, { useState } from "react";
import SiteHeader from "./SiteHeader";
import MenuModal from "./MenuModal";
import "./GalleryPage.css";
import food1 from "../assets/images/food1.png";
import food2 from "../assets/images/food2.png";
import food3 from "../assets/images/food3.png";
import food4 from "../assets/images/food4.png";
import food5 from "../assets/images/food5.png";
import food6 from "../assets/images/food6.png";
import food7 from "../assets/images/food7.png";
import food8 from "../assets/images/food8.png";
import food9 from "../assets/images/food9.png";
import food10 from "../assets/images/food10.png";
import food11 from "../assets/images/food11.png";
import food12 from "../assets/images/food12.png";
import food13 from "../assets/images/food13.png";
import food14 from "../assets/images/food14.png";
import food15 from "../assets/images/food15.png";
import food16 from "../assets/images/food16.png";
import food17 from "../assets/images/food17.png";
import food18 from "../assets/images/food18.png";

const photos = [
    { src: food1, alt: "Dish 1" },
    { src: food2, alt: "Dish 2" },
    { src: food3, alt: "Dish 3" },
    { src: food4, alt: "Dish 4" },
    { src: food5, alt: "Dish 5" },
    { src: food6, alt: "Dish 6" },
    { src: food7, alt: "Dish 7" },
    { src: food8, alt: "Dish 8" },
    { src: food9, alt: "Dish 9" },
    { src: food10, alt: "Dish 10" },
    { src: food11, alt: "Dish 11" },
    { src: food12, alt: "Dish 12" },
    { src: food13, alt: "Dish 13" },
    { src: food14, alt: "Dish 14" },
    { src: food15, alt: "Dish 15" },
    { src: food16, alt: "Dish 16" },
    { src: food17, alt: "Dish 17" },
    { src: food18, alt: "Dish 18" },
  ];
export default function GalleryPage() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [startAt, setStartAt] = useState(0);

  const openViewer = (index) => {
    setStartAt(index);
    setViewerOpen(true);
  };

  return (
    <main className="gallery-page">
      <SiteHeader />

      <section className="gallery-wrap">

        <div className="gallery-grid">
          {photos.map((img, i) => (
            <button key={img.src} className="gallery-item" type="button" onClick={() => openViewer(i)}>
              <img
                src={img.src}
                alt={img.alt || ""}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "/logo512.png"; }}
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
