"use client";
import { useState, useEffect } from "react";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Proyek", href: "#portfolio" },
  { label: "Cara Kerja", href: "#process" },
  { label: "Layanan", href: "#pricing" },
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
      <div className="nav-inner" style={{ position: "relative", zIndex: 1100 }}>
        {/* Logo */}
        <a href="#hero" className="nav-logo">
          <img
            src={(scrolled && !mobileOpen) ? "/images/logo-candigit-nav-2.svg" : "/images/logo-candigit-nav-1.svg"}
            alt="CanDigit Logo"
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
            href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi"
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
            color: mobileOpen ? "#ffffff" : (scrolled ? "#fff" : "#2FA084"),
            borderRadius: "8px",
            position: "relative",
            zIndex: 1200,
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
          background: "linear-gradient(145deg, #003347 0%, #004258 40%, #005a75 75%, #2FA084 100%)",
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          overflow: "hidden",
        }}
      >
        {/* Decorative glow — top-right */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(67,240,205,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        {/* Decorative glow — bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(47,160,132,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Logo inside overlay */}
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            transform: mobileOpen ? "translateY(0)" : "translateY(-10px)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: mobileOpen ? "0.05s" : "0s",
          }}
        >
          <img
            src="/images/logo-candigit-nav-1.svg"
            alt="CanDigit Logo"
            style={{ height: "22px", width: "auto" }}
          />
        </div>

        {/* Nav links list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            width: "100%",
            padding: "0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "rgba(255,255,255,0.92)",
                textDecoration: "none",
                fontSize: "26px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                width: "100%",
                textAlign: "center",
                padding: "12px 0",
                borderBottom:
                  i < navLinks.length - 1
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "none",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.2s ease",
                transitionDelay: mobileOpen ? `${0.1 + i * 0.07}s` : "0s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#43F0CD")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.92)")}
            >
              {l.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "28px",
              justifyContent: "center",
              width: "100%",
              maxWidth: "300px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 24px",
              fontSize: "15px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #ff7a59 0%, #ff9478 100%)",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "50px",
              boxShadow: "0 12px 32px rgba(255,122,89,0.35)",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: mobileOpen
                ? `${0.1 + navLinks.length * 0.07 + 0.1}s`
                : "0s",
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
