// TopFold.js
import React from "react";
import "./TopFold.css";

const TopFold = () => {
  return (
    <section className="hero" id="top">
      {/* Background image (served from /public) */}
      <img className="hero__bg" src="/hero.jpg" alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container">
        {/* Top utility bar */}
        <div className="topline">
          <span className="addr">Catering all of San Diego, by reservation only</span>

          <a className="brand" href="/">
            <img
              className="brand-logo"
              src="/logo512.png"        // <-- from /public
              alt="Island Pinoy logo"
              width="36"
              height="36"
            />
            <span className="brand-name">
              Island<span className="pinoy">Pinoy</span>
            </span>
          </a>

          <div className="reserve-wrap">
            <button className="btn-reserve" type="button">Make a Reservation</button>
          </div>
        </div>

        {/* Primary nav */}
        <nav className="nav" aria-label="Primary">
          <a href="#about">ABOUT</a>
          <a href="#menu">MENU</a>
          <a href="#contact">CONTACT US</a>
        </nav>

        {/* Main hero content */}
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

          {/* Testimonial card */}
          <div className="card-body">
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFold;
