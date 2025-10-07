// Footer.js
import React from "react";
import "./Footer.css";

const FACEBOOK_URL = "https://www.facebook.com/yourpage";
const INSTAGRAM_URL = "https://www.instagram.com/islandpinoycatering";

const Footer = () => {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-container">
        <div className="footer-grid three-col">
          {/* LEFT: ADDRESS */}
          <div className="footer-col footer-col--left">
            <h2 className="footer-title">ADDRESS</h2>
            <p className="location-line">Vista, CA 92083</p>

            <ul className="socials" aria-label="Social links">
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 1.86 6.48 1.86 12.07c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.4V9.84c0-2.37 1.41-3.68 3.56-3.68 1.03 0 2.11.18 2.11.18v2.33h-1.19c-1.17 0-1.53.72-1.53 1.46v1.76h2.61l-.42 2.91h-2.19V22c4.78-.78 8.44-4.93 8.44-9.93Z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm5.8-8.4a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/><path fill="currentColor" d="M17.4 3H6.6A3.6 3.6 0 0 0 3 6.6v10.8A3.6 3.6 0 0 0 6.6 21h10.8a3.6 3.6 0 0 0 3.6-3.6V6.6A3.6 3.6 0 0 0 17.4 3Zm2 14.4c0 1.1-.9 2-2 2H6.6c-1.1 0-2-.9-2-2V6.6c0-1.1.9-2 2-2h10.8c1.1 0 2 .9 2 2v10.8Z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* MIDDLE: CONTACT — now centered */}
          <div className="footer-col footer-col--center">
            <h2 className="footer-title">CONTACT</h2>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M6.6 10.8a15.7 15.7 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.2-.3c1.3.4 2.7.6 4.1.6a1.2 1.2 0 0 1 1.2 1.2v3.7a1.2 1.2 0 0 1-1.2 1.2A19.5 19.5 0 0 1 2 4.4 1.2 1.2 0 0 1 3.2 3h3.7a1.2 1.2 0 0 1 1.2 1.2c0 1.4.2 2.8.6 4.1.1.4 0 .8-.3 1.2l-2.2 2.3Z"/>
                  </svg>
                </span>
                <span>John Smith: <a href="tel:+17605867062">(760) 586-7062</a></span>
              </li>
              <li className="contact-item">
                <span className="icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="currentColor" d="M20.5 5h-17A1.5 1.5 0 0 0 2 6.5v11A1.5 1.5 0 0 0 3.5 19h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 5Zm-.5 2-8 5-8-5v-.5h16V7Z" />
                  </svg>
                </span>
                <span>
                  Email: <a href="mailto:islandpinoycatering@gmail.com">islandpinoycatering@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="footer-mark-wrap" aria-hidden="true">
            <img
              className="footer-mark"
              src="/logo512.png"
              srcSet="/logo192.png 192w, /logo512.png 512w"
              sizes="(max-width: 980px) 160px, 240px"
              alt="Island Pinoy logo"
              width="240"
              height="240"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Island Pinoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
