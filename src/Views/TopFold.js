// src/Views/TopFold.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { openReservation } from "./openReservation";
import HeroSlideshow from "./HeroSlideshow";
import "./TopFold.css";

// Slides correspond to files you generated in /public/img
// e.g. /public/img/food1-{640,1280,1920}.(avif|webp)
const slides = ["food17", "food2", "food3", "food1", "food9"];

const TopFold = () => {
  const location = useLocation();
  const onMenuPage = location.pathname.startsWith("/menu");

  return (
    <section className="hero" id="top">
      {/* Background slideshow (only first slide eager-loaded inside component) */}
      <HeroSlideshow names={slides} />

      {/* Dark overlay for text readability */}
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container">
        <div className="topline">
          <span className="addr">Catering all of San Diego, by reservation only</span>

          <Link className="brand" to="/">
            <img
              className="brand-logo"
              src="/logo512.png"
              alt="Island Pinoy logo"
              width="36"
              height="36"
            />
            <span className="brand-name">
              Island<span className="pinoy">Pinoy</span>
            </span>
          </Link>

          <div className="reserve-wrap">
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
              Island Pinoy brings an islander's twist to timeless Filipino recipes.
            </p>
          </div>
          <div className="card-body" />
        </div>
      </div>
    </section>
  );
};

export default TopFold;
