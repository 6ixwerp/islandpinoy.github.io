// // src/Views/ContactPage.js
// src/Views/AboutPage.js
import React from "react";
import SiteHeader from "./SiteHeader";
import "./AboutPage.css";

// Put a wide/vertical hero image at: src/assets/images/about-hero.jpg
import hero from "../assets/images/contactPic.webp";

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-hero">
        <div className="about-text">
          <h1 className="about-title"> Maligayang Pagdating! </h1>
          <p className="about-lede">
            Island Pinoy features delectable Filipino cuisine crafted in a casual
            yet warm atmosphere. Serving San Diego County, we pride
            ourselves on homestyle hospitality and cooking with only the freshest ingredients.
          </p>

          <p className="about-body">
            Whether you’re planning a casual dinner for two or a lively{" "}
            <strong>Kamayan</strong> with friends, our kitchen was built to
            celebrate. We cater intimate gatherings and larger events, and we’ll
            work with you to tailor a menu that feels just like home, only with an
            Islander’s twist.
          </p>

          <p className="about-body">
            No delivery (for now), but you can inquire about on-site catering,
            trays for pickup, and special event menus. <strong>Salamat!</strong>
          </p>
        </div>

        <div className="about-image">
          <img
            src={hero || "/logo512.png"}
            alt="Wall art and atmosphere inside the restaurant"
            loading="eager"
            className="about-img"
          />
        </div>
      </section>
    </main>
  );
}

