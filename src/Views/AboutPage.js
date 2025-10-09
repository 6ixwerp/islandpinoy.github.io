// src/Views/AboutPage.js
import React from "react";
import SiteHeader from "./SiteHeader";
import PictureResponsive from "../components/PictureResponsive";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-hero">
        <div className="about-text">
          <h1 className="about-title">Mabuhay!</h1>
          <p className="about-lede">
            Island Pinoy features delectable Filipino cuisine crafted in a casual
            yet warm atmosphere. Serving San Diego County, we pride ourselves on
            homestyle hospitality and cooking with only the freshest ingredients.
          </p>

          <p className="about-body">
            Whether you’re planning a casual dinner for two or a lively <strong>Kamayan</strong>{" "}
            with friends, our kitchen was built to celebrate. We cater intimate
            gatherings and larger events, and we’ll work with you to tailor a menu
            that feels just like home, only with an Islander’s twist.
          </p>

          <p className="about-body">
            No delivery (for now), but you can inquire about on-site catering,
            trays for pickup, and special event menus. <strong>Salamat!</strong>
          </p>
        </div>

        <div className="about-image">
          <PictureResponsive
            name="contactPic"                 // uses /public/img/contactPic-{640,1280}.(avif|webp)
            alt="Island Pinoy atmosphere"
            widths={[640, 1280]}
            sizes="(max-width: 900px) 100vw, 45vw"
            width={1280}
            height={720}
            eager
          />
        </div>
      </section>
    </main>
  );
}
