// src/Views/MenuPage.js
import React from "react";
import SiteHeader from "./SiteHeader";
import menuImg from "../assets/images/menu.png";
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <main className="menu-page">
      {/* Same header/topline/nav as home; MENU stays active */}
      <SiteHeader active="menu" />

      <section className="menu-content">
        <img className="menu-img" src={menuImg} alt="Island Pinoy Catering Menu" />
      </section>

      <footer className="menu-footer">
        <a href="/" className="back-home">← Back to Home</a>
      </footer>
    </main>
  );
};

export default MenuPage;
