"use client";
import { useState } from "react";
import { FaArrowRight, FaTimes, FaBriefcase, FaFolder, FaWhatsapp, FaTools } from "react-icons/fa";
import portfoliosData from "../../data/portfolio.json";

interface PortfolioItem {
  name: string;
  type: string;
  industry: string;
  color: string;
  description: string;
  tech: string[];
}

const portfolios = portfoliosData as PortfolioItem[];

const filters = ["Semua", "Landing Page", "Company Profile", "Sistem Toko Online"];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filteredPortfolios = activeFilter === "Semua"
    ? portfolios
    : portfolios.filter(p => p.type === activeFilter);

  // Helper to render customized layout inside mockups based on type and name
  const renderMockupContent = (p: PortfolioItem) => {
    // 1. Mobile Phone Devices for Landing Page and RoboTech Custom System
    if (p.type === "Landing Page" || p.name === "RoboTech Indonesia") {
      return (
        <div className="portfolio-device-mockup">
          <div className="mockup-phone">
            <div className="phone-notch" />
            <div className="phone-screen">
              {p.name === "RoboTech Indonesia" ? (
                // RoboTech IoT App
                <div style={{ padding: "10px 8px 8px", display: "flex", flexDirection: "column", gap: "8px", height: "100%" }}>
                  {/* Miniature App Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "24px", height: "5px", background: p.color, borderRadius: "2.5px" }} />
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#10b981" }} />
                  </div>
                  {/* Glass Stat Card */}
                  <div className="glass-widget" style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 6px" }}>
                    <span style={{ fontSize: "7px", color: "var(--text-muted)", fontWeight: 700 }}>SENSOR NODE 04</span>
                    <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.05 }}>+85.4%</span>
                  </div>
                  {/* SVG Chart Graphic */}
                  <div style={{ flex: 1, background: "#f8fafc", borderRadius: "6px", border: "1px solid #edf2f7", padding: "4px 6px", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "6.5px", fontWeight: 700, color: "var(--text-muted)" }}>
                      <span>Live Feed</span>
                      <span style={{ color: p.color }}>90 Hz</span>
                    </div>
                    {/* SVG Spline wave representing realtime graph */}
                    <svg viewBox="0 0 100 40" style={{ width: "100%", height: "26px", overflow: "visible" }}>
                      <defs>
                        <linearGradient id={`grad-${p.name}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={p.color} stopOpacity="0.4"/>
                          <stop offset="100%" stopColor={p.color} stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <path d="M0,35 Q15,5 30,25 T60,15 T90,20 L100,28 L100,40 L0,40 Z" fill={`url(#grad-${p.name})`} />
                      <path d="M0,35 Q15,5 30,25 T60,15 T90,20 L100,28" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="60" cy="15" r="2" fill="#fff" stroke={p.color} strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              ) : (
                // Klinik Sehat Prima Landing Page App
                <div style={{ padding: "10px 8px 8px", display: "flex", flexDirection: "column", gap: "8px", height: "100%" }}>
                  {/* Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.color }} />
                    <div style={{ width: "28px", height: "4px", background: "var(--text-dark)", borderRadius: "2px" }} />
                  </div>
                  {/* Doctor Profile Widget */}
                  <div className="glass-widget" style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 6px" }}>
                    <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: `linear-gradient(135deg, ${p.color}80, ${p.color})` }} />
                    <div style={{ display: "flex", flexDirection: "column", gap: "1px", flex: 1 }}>
                      <div style={{ width: "32px", height: "4px", background: "var(--text-dark)", borderRadius: "1.5px" }} />
                      <div style={{ width: "20px", height: "3px", background: "var(--text-muted)", borderRadius: "1px" }} />
                    </div>
                  </div>
                  {/* Pulse SVG graph and booking button */}
                  <div className="glass-widget" style={{ flex: 1, padding: "5px", display: "flex", flexDirection: "column", gap: "4px", background: "#ffffff", justifyContent: "space-between" }}>
                    <svg viewBox="0 0 100 30" style={{ width: "100%", height: "18px", overflow: "visible" }}>
                      <path d="M0,15 L20,15 L25,5 L30,25 L35,12 L40,15 L60,15 L65,0 L70,30 L75,10 L80,15 L100,15" fill="none" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {/* Booking success button */}
                    <div style={{ height: "14px", background: p.color, borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "6.5px", fontWeight: 800, boxShadow: `0 3px 6px ${p.color}25` }}>
                      BOOK NOW
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    // 2. Desktop Browser Devices for Company Profile and Sistem Toko Online
    return (
      <div className="portfolio-device-mockup">
        <div className="mockup-browser">
          <div className="browser-toolbar">
            <div className="browser-dots">
              <div className="browser-dot" style={{ background: "#ff5f57" }} />
              <div className="browser-dot" style={{ background: "#ffbd2e" }} />
              <div className="browser-dot" style={{ background: "#28c840" }} />
            </div>
            <div className="browser-address" />
          </div>
          <div className="browser-screen">
            {p.type === "Sistem Toko Online" ? (
              p.name === "Toko Fashion Kita" ? (
                // Toko Fashion Kita Store
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", height: "100%" }}>
                  {/* Shop navigation */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #edf2f7", paddingBottom: "3px" }}>
                    <div style={{ width: "32px", height: "8px", background: p.color, borderRadius: "2.5px" }} />
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div style={{ width: "12px", height: "4px", background: "#cbd5e1", borderRadius: "1px" }} />
                      <div style={{ width: "12px", height: "4px", background: "#cbd5e1", borderRadius: "1px" }} />
                    </div>
                  </div>
                  {/* Shop Product Banner card */}
                  <div style={{ display: "flex", gap: "10px", flex: 1, alignItems: "center" }}>
                    <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.15 }}>Fashion Sale</span>
                      <div className="glass-widget" style={{ padding: "3px 6px", display: "inline-flex", background: p.color + "15", border: "none", alignSelf: "flex-start" }}>
                        <span style={{ fontSize: "8px", fontWeight: 800, color: p.color }}>Rp 150.000</span>
                      </div>
                    </div>
                    {/* Compact glowing shopping bag visual */}
                    <div style={{ flex: 0.8, height: "52px", background: `linear-gradient(135deg, ${p.color}25, ${p.color})`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", position: "relative", boxShadow: `0 6px 14px ${p.color}30` }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                // Edu Pintar Online Course Store
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", height: "100%" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #edf2f7", paddingBottom: "3px" }}>
                    <div style={{ width: "35px", height: "8px", background: p.color, borderRadius: "2.5px" }} />
                    <div style={{ width: "18px", height: "5px", background: "#10b981", borderRadius: "2px" }} />
                  </div>
                  {/* Course Player Widget */}
                  <div style={{ display: "flex", gap: "10px", flex: 1, alignItems: "center" }}>
                    <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.15 }}>Online Class</span>
                      {/* Course progress bar indicator */}
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <div style={{ flex: 1, height: "4px", background: "#e2e8f0", borderRadius: "2px", overflow: "hidden" }}>
                          <div style={{ width: "70%", height: "100%", background: p.color }} />
                        </div>
                        <span style={{ fontSize: "6.5px", fontWeight: 700, color: "var(--text-muted)" }}>70%</span>
                      </div>
                    </div>
                    {/* Media player visual card */}
                    <div style={{ flex: 0.8, height: "52px", background: `linear-gradient(135deg, ${p.color}30, ${p.color})`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: `0 6px 14px ${p.color}35` }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                </div>
              )
            ) : p.name === "PT Maju Bersama" ? (
              // PT Maju Bersama Company Profile
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", height: "100%" }}>
                {/* Clean Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
                    <div style={{ width: "7px", height: "7px", background: p.color, borderRadius: "2px" }} />
                    <div style={{ width: "22px", height: "5px", background: "var(--text-dark)", borderRadius: "2.5px" }} />
                  </div>
                  <div style={{ width: "16px", height: "5px", background: p.color + "30", borderRadius: "2.5px" }} />
                </div>
                {/* Architectural Building showcase layout */}
                <div style={{ display: "flex", gap: "10px", flex: 1, alignItems: "center", marginTop: "2px" }}>
                  <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.15 }}>Membangun Negeri</span>
                    <div style={{ width: "85%", height: "4px", background: "var(--text-muted)", borderRadius: "1.5px" }} />
                  </div>
                  {/* Clean building vector layout */}
                  <div style={{ flex: 0.9, height: "52px", background: `linear-gradient(135deg, ${p.color}20, ${p.color}bb)`, borderRadius: "8px", display: "flex", alignItems: "flex-end", padding: "6px", position: "relative", overflow: "hidden", border: `1px solid ${p.color}30` }}>
                    <div style={{ width: "12px", height: "28px", background: "rgba(255,255,255,0.9)", borderRadius: "2px 2px 0 0", marginRight: "2px" }} />
                    <div style={{ width: "18px", height: "44px", background: "rgba(255,255,255,0.7)", borderRadius: "2px 2px 0 0", marginRight: "2px" }} />
                    <div style={{ width: "10px", height: "22px", background: "rgba(255,255,255,0.95)", borderRadius: "2px 2px 0 0" }} />
                  </div>
                </div>
              </div>
            ) : (
              // Properti Nusantara Company Profile
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", height: "100%" }}>
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ width: "32px", height: "7px", background: p.color, borderRadius: "2.5px" }} />
                  <div style={{ width: "14px", height: "5px", background: "var(--text-dark)", borderRadius: "2px" }} />
                </div>
                {/* Property Listing card */}
                <div style={{ display: "flex", gap: "10px", flex: 1, alignItems: "center", marginTop: "2px" }}>
                  <div style={{ flex: 1.1, display: "flex", flexDirection: "column", gap: "3px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.15 }}>Listing Properti</span>
                    <div style={{ display: "inline-flex", background: "#e2e8f0", padding: "2px 5px", borderRadius: "4px", fontSize: "6.5px", fontWeight: 700, color: "var(--text-muted)", alignSelf: "flex-start" }}>
                      JAKARTA
                    </div>
                  </div>
                  {/* Clean home vector graphic */}
                  <div style={{ flex: 0.9, height: "52px", background: `linear-gradient(135deg, ${p.color}30, ${p.color})`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", boxShadow: `0 6px 12px ${p.color}35` }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" style={{ position: "relative", overflow: "hidden", padding: "70px 0" }}>
      {/* Background elegant floating soft glows */}
      <div 
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--primary-light) 0%, transparent 70%)",
          opacity: 0.1,
          zIndex: 0,
          filter: "blur(50px)",
          pointerEvents: "none"
        }}
      />
      <div 
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-light) 0%, transparent 70%)",
          opacity: 0.1,
          zIndex: 0,
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header portfolio-section-header">
          <div className="section-label">Showcase</div>
          <h2 className="section-title">
            Karya Terbaik <span>Kami</span>
          </h2>
          <p className="section-desc">
            Kumpulan proyek pilihan berkinerja tinggi yang dirancang khusus untuk membawa bisnis mitra kami ke level berikutnya.
          </p>
        </div>

        {/* Category Filters */}
        <div className="portfolio-filters portfolio-section-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`portfolio-filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolios Grid */}
        <div 
          className="portfolio-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "28px",
          }}
        >
          {filteredPortfolios.map((p, i) => (
            <div
              key={p.name}
              className="portfolio-card portfolio-fade"
              style={{ 
                animationDelay: `${i * 0.08}s`,
                cursor: "pointer",
                ["--glow-color" as any]: p.color,
                ["--glow-color-light" as any]: p.color + "22",
                ["--glow-color-10" as any]: p.color + "12",
                ["--glow-color-30" as any]: p.color + "44",
                ["--glow-color-dark" as any]: p.color + "0d"
              } as React.CSSProperties}
              onClick={() => setSelectedProject(p)}
            >
              {/* Device Mockups Container */}
              <div className="portfolio-mockup-wrapper">
                {/* Modern dotted/grid decoration */}
                <div className="portfolio-mockup-grid" />

                {/* Render the selected device mockup cleanly */}
                {renderMockupContent(p)}
              </div>

              {/* Glassmorphic Overlay Info Area */}
              <div className="portfolio-card-overlay">
                <div style={{ display: "flex", flexDirection: "column", gap: "1px", maxWidth: "80%", overflow: "hidden" }}>
                  <h3 className="portfolio-name" style={{ margin: 0 }}>
                    {p.name}
                  </h3>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {p.type} · {p.industry}
                  </span>
                </div>
                <button className="portfolio-arrow-btn" aria-label="Lihat Proyek">
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }} className="portfolio-section-cta">
          <a 
            href="#contact" 
            className="btn hero-btn" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              padding: "14px 28px", 
              fontSize: "14px", 
              fontWeight: 750,
              background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)",
              color: "#ffffff",
              boxShadow: "0 10px 20px rgba(47,160,132,0.25)",
              border: "none",
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            Mulai Diskusi Proyek Anda 
            <FaArrowRight size={12} />
          </a>
        </div>
      </div>

      {/* Interactive Detail Modal Popup */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal" onClick={(e) => e.stopPropagation()}>
            {/* Cover Banner using project brand color */}
            <div style={{ height: "90px", background: `linear-gradient(135deg, ${selectedProject.color}15, ${selectedProject.color})`, position: "relative", display: "flex", alignItems: "center", padding: "0 24px" }}>
              <button 
                onClick={() => setSelectedProject(null)} 
                aria-label="Tutup"
                style={{ 
                  position: "absolute", 
                  top: "16px", 
                  right: "16px", 
                  background: "rgba(255,255,255,0.25)", 
                  backdropFilter: "blur(6px)", 
                  WebkitBackdropFilter: "blur(6px)",
                  border: "none", 
                  width: "28px", 
                  height: "28px", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  cursor: "pointer", 
                  color: "#ffffff", 
                  transition: "all 0.2s" 
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.4)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
              >
                <FaTimes size={13} />
              </button>
              <span style={{ background: "#ffffff", padding: "4px 12px", borderRadius: "30px", fontSize: "10px", fontWeight: 800, color: selectedProject.color, boxShadow: "0 4px 10px rgba(0,0,0,0.05)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {selectedProject.type}
              </span>
            </div>

            {/* Content Details Area */}
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "6px", lineHeight: 1.25 }}>
                  {selectedProject.name}
                </h3>
                <div style={{ display: "flex", gap: "6px" }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, background: "#f1f5f9", padding: "3px 8px", borderRadius: "5px", color: "var(--text-body)", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    <FaBriefcase size={9} />
                    {selectedProject.industry}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: "13.5px", color: "var(--text-body)", lineHeight: 1.6, margin: 0 }}>
                {selectedProject.description}
              </p>

              {/* Tech Stack Badge List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", borderTop: "1px dashed var(--border)", paddingTop: "14px" }}>
                <span style={{ fontSize: "11px", fontWeight: 750, color: "var(--text-dark)", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <FaTools size={10} color={selectedProject.color} />
                  TEKNOLOGI PENGEMBANGAN
                </span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} style={{ fontSize: "10px", background: "#f8fafc", color: "var(--text-muted)", padding: "2px 8px", borderRadius: "5px", border: "1px solid #f1f5f9", fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conversion WhatsApp Button */}
              <a 
                href={`https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20tertarik%20dengan%20proyek%20${encodeURIComponent(selectedProject.name)}%20dan%20ingin%20konsultasi%20pembuatan%20website%20serupa.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn hero-btn" 
                style={{ 
                  background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)", 
                  color: "#ffffff", 
                  padding: "12px 20px", 
                  fontSize: "13.5px", 
                  fontWeight: 800, 
                  textDecoration: "none", 
                  borderRadius: "50px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  gap: "8px", 
                  width: "100%", 
                  boxShadow: "0 10px 20px rgba(47,160,132,0.25)", 
                  border: "none",
                  marginTop: "8px"
                }}
              >
                <FaWhatsapp size={16} />
                Buat Website Serupa via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
