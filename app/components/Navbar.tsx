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
    <>
      <nav
        className={`navbar ${scrolled ? "" : "at-top"} ${mobileOpen ? "menu-open" : ""}`}
        style={{ boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none" }}
      >
        <div className="nav-inner" style={{ position: "relative", zIndex: 100 }}>
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
              color: mobileOpen ? "#ffffff" : (scrolled ? "#ffffff" : "#2FA084"),
              borderRadius: "8px",
            }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <style>{`
          .navbar {
            z-index: 100000 !important;
          }
          
          .navbar.menu-open {
            background: transparent !important;
            border-bottom: none !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
          }
          
          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #091e1a;
            background: linear-gradient(135deg, rgba(9, 30, 26, 0.99) 0%, rgba(20, 60, 52, 0.99) 100%) !important;
            backdrop-filter: blur(20px) !important;
            -webkit-backdrop-filter: blur(20px) !important;
            z-index: 99999 !important;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding: 100px 24px 40px;
            overflow-y: auto;
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .mobile-menu-overlay.active {
            opacity: 1;
            visibility: visible;
          }
          
          .mobile-nav-link {
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: -0.02em;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          .mobile-nav-link:hover, .mobile-nav-link:active {
            color: #43F0CD !important;
            transform: translateY(-2px) scale(1.05);
            text-shadow: 0 0 10px rgba(67, 240, 205, 0.4);
          }
          
          .mobile-cta-btn {
            background: linear-gradient(to right, #2FA084 0%, #43F0CD 100%) !important;
            box-shadow: 0 10px 24px rgba(47,160,132,0.3) !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
          }
          
          .mobile-cta-btn:hover {
            transform: translateY(-3px) scale(1.02) !important;
            box-shadow: 0 14px 28px rgba(47,160,132,0.4) !important;
          }
        `}</style>
      </nav>

      {/* Mobile menu Overlay (Moved outside <nav> to escape backdrop-filter clipping context) */}
      <div className={`mobile-menu-overlay ${mobileOpen ? "active" : ""}`}>
        {/* Background decorative glowing orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            width: "250px",
            height: "250px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(47,160,132,0.15) 0%, transparent 70%)",
            filter: "blur(40px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(67,240,205,0.1) 0%, transparent 70%)",
            filter: "blur(45px)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", width: "100%", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {navLinks.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link"
              style={{
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
            href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-btn"
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
              color: "#fff",
              textDecoration: "none",
              borderRadius: "50px",
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
    </>
  );
}
