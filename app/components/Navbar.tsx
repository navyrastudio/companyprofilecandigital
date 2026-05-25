"use client";
import { useState, useEffect } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Proyek", href: "#portfolio" },
  { label: "Cara Kerja", href: "#process" },
  { label: "Layanan", href: "#pricing" },
  // { label: "Harga", href: "#pricing" },
  // { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "" : "at-top"}`}
      style={{ boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none" }}
    >
      <div className="nav-inner" style={{ position: "relative", zIndex: 100 }}>
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <img 
            src={(scrolled && !mobileOpen) ? "/images/logo-candigit-nav-1.svg" : "/images/logo-candigit-nav-2.svg"} 
            alt="CanDigital Logo" 
            className="navbar-logo-img"
          />
        </a>

        {/* Desktop nav */}
        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent"
            id="nav-cta"
            style={{
              padding: "9px 20px",
              fontSize: "14px",
              marginLeft: "8px",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <FaPhone size={13} />
            Konsultasi Gratis
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            color: (scrolled && !mobileOpen) ? "var(--text-dark)" : "#fff",
            borderRadius: "8px",
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu Overlay */}
      <div
        className="mobile-menu-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 45, 61, 0.98)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", width: "100%", padding: "0 24px" }}>
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "28px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: mobileOpen ? `${0.1 + i * 0.08}s` : "0s",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            style={{
              marginTop: "24px",
              justifyContent: "center",
              width: "100%",
              maxWidth: "280px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "18px",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
              borderRadius: "50px",
              boxShadow: "0 12px 24px rgba(255,122,89,0.3)",
              background: "linear-gradient(135deg, #FF7B00 0%, #FF4D00 100%)",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "50px",
              boxShadow: "0 12px 24px rgba(255,107,0,0.3)",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: mobileOpen ? `${0.1 + navLinks.length * 0.08 + 0.1}s` : "0s",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <FaPhone size={14} />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </nav>
  );
}
