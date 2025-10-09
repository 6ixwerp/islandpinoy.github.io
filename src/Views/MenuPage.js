// src/Views/MenuPage.js
import React from "react";
import SiteHeader from "./SiteHeader";
import PictureResponsive from "../components/PictureResponsive";
import "./MenuPage.css";

const MenuPage = () => {
  // Pick the base name you exported: "menu" or "revisedMenu"
  const menuBase = "revisedMenu"; // ← change to "menu" if that's your final file set

  return (
    <main className="menu-page">
      <SiteHeader active="menu" />

      <section className="menu-content">
        <PictureResponsive
          name={menuBase}                                  // uses /public/img/<name>-{640,1280,1920}.(avif|webp)
          alt="Island Pinoy Catering Menu"
          widths={[640, 1280, 1920]}
          sizes="(max-width: 1200px) 100vw, 1100px"
          width={1100}
          height={1500}                                    // adjust to your menu aspect
          eager
        />
      </section>

      <footer className="menu-footer">
        <a href="/" className="back-home">← Back to Home</a>
      </footer>
    </main>
  );
};

export default MenuPage;
