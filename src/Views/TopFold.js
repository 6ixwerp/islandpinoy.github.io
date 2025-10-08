// src/Views/TopFold.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { openReservation } from "./openReservation";   // ← import the event helper
import HeroSlideshow from "./HeroSlideshow";
import "./TopFold.css";

// images of food imported
import food3 from "../assets/images/food3.webp";
import food2 from "../assets/images/food2.webp";
import food17 from "../assets/images/food17.webp";
import food1 from "../assets/images/food1.webp";
import food9 from "../assets/images/food9.webp";

const heroImages = [food17, food2, food3, food1, food9];

const TopFold = () => {
  const location = useLocation();
  const onMenuPage = location.pathname.startsWith("/menu");

  return (
    <section className="hero" id="top">
      {/* Background slideshow */}
      <HeroSlideshow images={heroImages} />

      {/* Dark overlay for text readability */}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container">
        <div className="topline">
          <span className="addr">Catering all of San Diego, by reservation only</span>

          <Link className="brand" to="/">
            <img className="brand-logo" src="/logo512.png" alt="Island Pinoy logo" width="36" height="36" />
            <span className="brand-name">
              Island<span className="pinoy">Pinoy</span>
            </span>
          </Link>

          <div className="reserve-wrap">
            {/* Hook up the click so it opens the ReservationDrawer */}
            <button className="btn-reserve" type="button" onClick={openReservation}>
              Make a Reservation
            </button>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">ABOUT</Link>
          <Link
            to="/menu"
            className={`nav-link ${onMenuPage ? "is-active" : ""}`}
            aria-current={onMenuPage ? "page" : undefined}
          >
            MENU
          </Link>
          <Link to="/gallery" className="nav-link">GALLERY</Link>
        </nav>

        <div className="content">
          <div className="left">
            <h1 className="h1">
              From our Kusina<br />to your table.
            </h1>
            <p className="sub">
              Lutong-Bahay flavors for birthdays, office events, and big handaan.
              Island Pinoy brings a islander's twist to timeless Filipino recipes.
            </p>
          </div>
          <div className="card-body" />
        </div>
      </div>
    </section>
  );
};

export default TopFold;
