import React from "react";
import { NavLink } from "react-router-dom";
import { openReservation } from "../Views/openReservation";   // ← NEW

const SiteHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="topline">
          <span className="addr">Catering all of San Diego, by reservation only</span>

          <NavLink className="brand" to="/">
            <img className="brand-logo" src="/logo512.png" alt="Island Pinoy logo" width="36" height="36" />
            <span className="brand-name">Island<span className="pinoy">Pinoy</span></span>
          </NavLink>

          <div className="reserve-wrap">
            <button className="btn-reserve" type="button" onClick={openReservation}>
              Make a Reservation
            </button>
          </div>
        </div>

        <nav className="nav" aria-label="Primary">
          <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? "is-active" : ""}`}>HOME</NavLink>
          <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? "is-active" : ""}`}>ABOUT</NavLink>
          <NavLink to="/menu" className={({isActive}) => `nav-link ${isActive ? "is-active" : ""}`}>MENU</NavLink>
          <NavLink to="/gallery" className={({isActive}) => `nav-link ${isActive ? "is-active" : ""}`}>GALLERY</NavLink>
          {/* CONTACT removed from nav */}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
