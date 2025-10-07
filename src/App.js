import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./Views/HomePage";
import MenuPage from "./Views/MenuPage";
import AboutPage from "./Views/AboutPage";
import GalleryPage from "./Views/GalleryPage";
import ContactPage from "./Views/ContactPage"; // optional to keep, not in nav
import Footer from "./Views/Footer";
import ReservationDrawer from "./Views/ReservationDrawer";  // ← NEW
import "./Views/app-shell.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} /> {/* keep or remove */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Global footer + reservation drawer */}
        <Footer />
        <ReservationDrawer />
      </div>
    </BrowserRouter>
  );
}
