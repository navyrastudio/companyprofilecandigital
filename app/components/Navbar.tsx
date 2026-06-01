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
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Active section observer on scroll (Scrollspy)
  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPosition = window.scrollY + 120; // offset for detection
      const sections = ["hero", "portfolio", "process", "pricing", "faq"];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScrollActive);
    handleScrollActive(); // Run once initially
    return () => window.removeEventListener("scroll", handleScrollActive);
  }, []);

  // Custom smooth scroll handler with offset for sticky navbar
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isMobile: boolean = false) => {
    e.preventDefault();
    const targetId = href.replace("#", "");

    // For hero/top section, scroll exactly to the very top of the page (0 offset)
    if (targetId === "hero") {
      if (isMobile) {
        setMobileOpen(false);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 350);
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 10; // Snug offset (10px) to overlap section padding and keep content close to navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      if (isMobile) {
        setMobileOpen(false);
        // Wait for the slide-out menu animation (350ms) to complete for an ultra-smooth experience
        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 350);
      } else {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      {/* ── Navbar bar ── */}
      <nav
        className={`navbar ${scrolled ? "" : "at-top"}`}
        style={{ boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none" }}
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero", false)} className="nav-logo">
            <img
              src={
                scrolled && !mobileOpen
                  ? "/images/logo-candigit-nav-2.svg"
                  : "/images/logo-candigit-nav-1.svg"
              }
              alt="CanDigit Logo"
              className="navbar-logo-img"
            />
          </a>

          {/* Desktop nav links */}
          <div className="nav-links">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.replace("#", "");
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => handleScroll(e, l.href, false)}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {l.label}
                </a>
              );
            })}
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

          {/* Hamburger button — opens mobile menu */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Buka menu"
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
              color: scrolled ? "#fff" : "#2FA084",
              borderRadius: "8px",
            }}
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/*
        ── Mobile menu overlay ──
        Placed OUTSIDE <nav> so backdrop-filter on the navbar
        does NOT create a clipping stacking context on iOS Safari.
      */}
      <div
        aria-hidden={!mobileOpen}
        style={{
          position: "fixed",
          inset: 0,                  /* top:0 right:0 bottom:0 left:0 */
          zIndex: 1099,
          background:
            "linear-gradient(145deg, #003347 0%, #004258 40%, #005a75 75%, #2FA084 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          /* Animate in/out */
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? "visible" : "hidden",
          transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1), visibility 0.35s",
          /* Prevent pointer events when hidden */
          pointerEvents: mobileOpen ? "auto" : "none",
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
            background:
              "radial-gradient(circle, rgba(67,240,205,0.18) 0%, transparent 70%)",
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
            background:
              "radial-gradient(circle, rgba(47,160,132,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Top bar inside overlay: logo (left) + close button (right) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "70px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px 0 24px",
            transform: mobileOpen ? "translateY(0)" : "translateY(-10px)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: mobileOpen ? "0.05s" : "0s",
          }}
        >
          {/* Logo */}
          <img
            src="/images/logo-candigit-nav-1.svg"
            alt="CanDigit Logo"
            style={{ height: "22px", width: "auto" }}
          />

          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Tutup menu"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              flexShrink: 0,
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")
            }
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            width: "100%",
            padding: "0 32px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {navLinks.map((l, i) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href, true)}
                style={{
                  color: isActive ? "#43F0CD" : "rgba(255,255,255,0.92)",
                  textDecoration: "none",
                  fontSize: "26px",
                  fontWeight: isActive ? 800 : 700,
                  letterSpacing: "-0.02em",
                  width: "100%",
                  textAlign: "center",
                  padding: "13px 0",
                  borderBottom:
                    i < navLinks.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                  transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: mobileOpen ? 1 : 0,
                  transition:
                    "transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1), color 0.2s ease",
                  transitionDelay: mobileOpen ? `${0.08 + i * 0.07}s` : "0s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#43F0CD")
                }
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255,255,255,0.92)";
                  }
                }}
              >
                {l.label}
              </a>
            );
          })}

          {/* CTA Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              width: "100%",
              maxWidth: "300px",
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
              transition:
                "transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: mobileOpen
                ? `${0.08 + navLinks.length * 0.07 + 0.08}s`
                : "0s",
            }}
          >
            <FaPhone size={14} />
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </>
  );
}
