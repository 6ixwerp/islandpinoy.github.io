// src/Views/ContactPage.js
import React from "react";
import SiteHeader from "./SiteHeader";
import "./ContactPage.css";

import hero from "../assets/images/contactPic.webp";

const FACEBOOK_URL = "https://www.facebook.com/yourpage";
const INSTAGRAM_URL = "https://www.instagram.com/islandpinoycatering";
const PHONE_DISPLAY = "(760) 586-7062";
const PHONE_TEL = "+17605867062";
const EMAIL = "islandpinoycatering@gmail.com";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />

      <div className="contact-wrap">
        <section className="contact-hero">
          <div className="contact-hero-text">
            <h1 className="contact-title"> Maligayang Pagdating! 👋</h1>
            <p className="contact-subtitle">
              We’d love to help plan your <strong>handaan</strong>, office party, or
              family celebration. Tell us about your event and we’ll craft a menu
              with a true Islander’s twist.
            </p>

            <div className="contact-cta">
              <a className="btn-cta" href={`tel:${PHONE_TEL}`} aria-label="Call us">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1.3.4 2.7.6 4.1.6a1.2 1.2 0 0 1 1.2 1.2v3.7a1.2 1.2 0 0 1-1.2 1.2A19.5 19.5 0 0 1 2 4.4 1.2 1.2 0 0 1 3.2 3h3.7a1.2 1.2 0 0 1 1.2 1.2c0 1.4.2 2.8.6 4.1.1.4 0 .8-.3 1.2l-2.2 2.3Z" />
                </svg>
                Call {PHONE_DISPLAY}
              </a>

              <a className="btn-cta btn-ghost" href={`mailto:${EMAIL}`} aria-label="Email us">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5Zm-.5 2-8 5-8-5v-.5h16V7Z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>

          <div className="contact-hero-image">
            <img
              src={hero || "/logo512.png"}
              alt="Island Pinoy team plating food"
              className="hero-img"
            />
          </div>
        </section>

        <section className="info-grid">
          <div className="banig-card">
            <h3 className="card-title">Visit Us</h3>
            <div className="card-body">
              <ul className="card-list">
                <li><span className="dot" />Vista, CA 92083</li>
                <li><span className="dot" />By reservation only</li>
              </ul>

              <div className="socials" aria-label="Social links">
                <a className="social" href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.53.72-1.53 1.46v1.76h2.61l-.42 2.91h-2.19V22c4.78-.78 8.44-4.93 8.44-9.93Z"/>
                  </svg>
                </a>
                <a className="social" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm5.8-8.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/><path fill="currentColor" d="M17.4 3H6.6A3.6 3.6 0 0 0 3 6.6v10.8A3.6 3.6 0 0 0 6.6 21h10.8a3.6 3.6 0 0 0 3.6-3.6V6.6A3.6 3.6 0 0 0 17.4 3Zm2 14.4c0 1.1-.9 2-2 2H6.6c-1.1 0-2-.9-2-2V6.6c0-1.1.9-2 2-2h10.8c1.1 0 2 .9 2 2v10.8Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="banig-card">
            <h3 className="card-title">Business Hours</h3>
            <div className="card-body">
              <ul className="card-list">
                <li><span className="dot" />Mon–Fri: 9:00 AM – 6:00 PM</li>
                <li><span className="dot" />Sat: 10:00 AM – 4:00 PM</li>
                <li><span className="dot" />Sun: Closed</li>
              </ul>
            </div>
          </div>

          <div className="banig-card">
            <h3 className="card-title">Reach Us</h3>
            <div className="card-body">
              <ul className="card-list">
                <li>
                  <span className="dot" />
                  <a href={`tel:${PHONE_TEL}`} style={{color:"#e6ebff", textDecoration:"none"}}>Call {PHONE_DISPLAY}</a>
                </li>
                <li>
                  <span className="dot" />
                  <a href={`mailto:${EMAIL}`} style={{color:"#e6ebff", textDecoration:"none"}}>{EMAIL}</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
