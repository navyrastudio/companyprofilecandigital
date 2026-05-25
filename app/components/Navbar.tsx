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
      <div className="nav-inner">
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <img 
            src={scrolled ? "/images/logo-candigit-nav-1.svg" : "/images/logo-candigit-nav-2.svg"} 
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
            color: scrolled ? "var(--text-dark)" : "#fff",
            borderRadius: "8px",
          }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "#fff",
            padding: "12px 24px 20px",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "12px 0",
                color: "var(--text-body)",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6281234567890"
            className="btn btn-accent"
            style={{
              marginTop: "16px",
              justifyContent: "center",
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            onClick={() => setMobileOpen(false)}
          >
            <FaPhone size={14} />
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
}
