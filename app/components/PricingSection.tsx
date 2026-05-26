"use client";

import { FaCheck, FaTimes, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import plans from "../../data/pricing.json";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      style={{
        background: "#f4fbf9",
        padding: "88px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(47,160,132,0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Glow orbs */}
      <div style={{ position: "absolute", top: "-80px", right: "-60px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(47,160,132,0.10) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,240,205,0.08) 0%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div className="section-header pricing-section-header">
          <div
            className="section-label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(47,160,132,0.08)",
              border: "1px solid rgba(47,160,132,0.2)",
              padding: "6px 18px",
              borderRadius: "50px",
              color: "#2FA084",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "18px",
            }}
          >
            Harga Paket
          </div>
          <h2 className="section-title" style={{ color: "var(--text-dark)", marginBottom: "14px" }}>
            Investasi yang <span style={{ color: "#2FA084" }}>Sepadan</span>
          </h2>
          <p className="section-desc">
            Harga transparan, kualitas premium. Pilih paket yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* ── Pricing Grid ── */}
        <div
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {plans.map((p, i) => (
            <div
              key={p.name}
              className="pricing-card-wrap"
              style={{
                animationDelay: `${i * 0.1}s`,
                background: p.featured
                  ? "linear-gradient(160deg, #1d7a60 0%, #2FA084 50%, #34c898 100%)"
                  : "#ffffff",
                border: p.featured ? "none" : "1px solid rgba(47,160,132,0.12)",
                borderRadius: "24px",
                padding: "40px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: p.featured
                  ? "0 24px 56px rgba(47,160,132,0.30)"
                  : "0 4px 20px rgba(0,66,88,0.05)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = p.featured
                  ? "0 32px 64px rgba(47,160,132,0.38)"
                  : "0 20px 44px rgba(47,160,132,0.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = p.featured
                  ? "0 24px 56px rgba(47,160,132,0.30)"
                  : "0 4px 20px rgba(0,66,88,0.05)";
              }}
            >
              {/* Top accent bar (non-featured only) */}
              {!p.featured && (
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0,
                  height: "3px",
                  background: "linear-gradient(to right, #2FA084, #43F0CD)",
                  borderRadius: "24px 24px 0 0",
                }} />
              )}

              {/* Best choice badge */}
              {p.bestChoice && (
                <div style={{
                  position: "absolute",
                  top: "-16px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "linear-gradient(135deg, #2FA084, #43F0CD)",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 800,
                  padding: "6px 20px",
                  borderRadius: "50px",
                  whiteSpace: "nowrap",
                  boxShadow: "0 6px 16px rgba(47,160,132,0.40)",
                  letterSpacing: "0.07em",
                }}>
                  ✦ PILIHAN TERBAIK
                </div>
              )}

              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

                {/* Plan name + tagline */}
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", gap: "12px" }}>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: p.featured ? "#fff" : "var(--text-dark)", lineHeight: 1.2, flex: 1 }}>
                      {p.name}
                    </h3>
                    <div style={{
                      fontSize: "10px",
                      color: p.featured ? "#2FA084" : "#2FA084",
                      background: p.featured ? "#ffffff" : "rgba(47,160,132,0.08)",
                      border: p.featured ? "none" : "1px solid rgba(47,160,132,0.2)",
                      padding: "5px 12px",
                      borderRadius: "50px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}>
                      {p.tagline === "PALING PRAKTIS" && "⚡ "}
                      {p.tagline === "PALING POPULER" && "🔥 "}
                      {p.tagline === "PALING LENGKAP" && "💎 "}
                      {p.tagline}
                    </div>
                  </div>
                  <div style={{ fontSize: "14px", color: p.featured ? "rgba(255,255,255,0.80)" : "var(--text-muted)", lineHeight: 1.6 }}>
                    {p.subtitle}
                  </div>
                </div>

                {/* Price */}
                <div style={{ marginBottom: "28px", paddingBottom: "24px", borderBottom: p.featured ? "1px solid rgba(255,255,255,0.18)" : "1px solid rgba(47,160,132,0.10)" }}>
                  {p.price === "Custom" ? (
                    <div style={{ fontSize: "40px", fontWeight: 800, color: p.featured ? "#fff" : "#2FA084" }}>Custom</div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                      <span style={{ color: p.featured ? "rgba(255,255,255,0.75)" : "var(--text-muted)", fontSize: "16px", marginBottom: "8px", fontWeight: 600 }}>Rp</span>
                      <span style={{ fontSize: "48px", fontWeight: 800, color: p.featured ? "#fff" : "#2FA084", lineHeight: 1, letterSpacing: "-0.02em" }}>
                        {p.price}
                      </span>
                      <span style={{ color: p.featured ? "rgba(255,255,255,0.75)" : "var(--text-muted)", fontSize: "16px", marginBottom: "8px", fontWeight: 600 }}>
                        {p.suffix}
                      </span>
                    </div>
                  )}
                </div>

                {/* Feature list */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "13px", marginBottom: "28px", flex: 1, padding: 0 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: p.featured ? "#fff" : "var(--text-dark)" }}>
                      <div style={{
                        background: p.featured ? "rgba(255,255,255,0.20)" : "rgba(47,160,132,0.10)",
                        borderRadius: "50%",
                        width: "20px", height: "20px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: "1px",
                      }}>
                        <FaCheck size={9} color={p.featured ? "#fff" : "#2FA084"} />
                      </div>
                      <span style={{ fontWeight: 500 }}>{f}</span>
                    </li>
                  ))}
                  {p.notIncluded.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: p.featured ? "rgba(255,255,255,0.45)" : "var(--text-muted)", textDecoration: "line-through" }}>
                      <div style={{
                        background: p.featured ? "rgba(255,255,255,0.08)" : "#f1f5f9",
                        borderRadius: "50%",
                        width: "20px", height: "20px",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0, marginTop: "1px",
                      }}>
                        <FaTimes size={9} color={p.featured ? "rgba(255,255,255,0.4)" : "#cbd5e1"} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Duration row */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", borderTop: p.featured ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(47,160,132,0.10)", paddingTop: "20px", marginBottom: "24px" }}>
                  <div style={{
                    width: "34px", height: "34px", borderRadius: "10px",
                    background: p.featured ? "rgba(255,255,255,0.12)" : "rgba(47,160,132,0.08)",
                    border: p.featured ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(47,160,132,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={p.featured ? "#fff" : "#2FA084"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: p.featured ? "rgba(255,255,255,0.65)" : "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>WAKTU PENGERJAAN</div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: p.featured ? "#fff" : "var(--text-dark)" }}>{p.duration}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20info%20paket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pricing-cta-btn"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "15px 24px",
                    borderRadius: "12px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: p.featured
                      ? "#ffffff"
                      : "linear-gradient(to right, #2FA084, #43F0CD)",
                    color: p.featured ? "#2FA084" : "#ffffff",
                    boxShadow: p.featured
                      ? "0 8px 20px rgba(0,0,0,0.12)"
                      : "0 8px 20px rgba(47,160,132,0.25)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = p.featured
                      ? "0 12px 28px rgba(0,0,0,0.18)"
                      : "0 14px 28px rgba(47,160,132,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = p.featured
                      ? "0 8px 20px rgba(0,0,0,0.12)"
                      : "0 8px 20px rgba(47,160,132,0.25)";
                  }}
                >
                  {p.cta} <FaArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Custom Banner ── */}
        <div
          className="custom-banner"
          style={{
            marginTop: "72px",
            background: "linear-gradient(135deg, #1a6e54 0%, #2FA084 60%, #34c898 100%)",
            borderRadius: "24px",
            boxShadow: "0 24px 56px rgba(47,160,132,0.28)",
            border: "1px solid rgba(255,255,255,0.12)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "280px", height: "280px", borderRadius: "50%", border: "32px solid rgba(255,255,255,0.05)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: "-100px", right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,240,205,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "30%", left: "48%", width: "8px", height: "8px", borderRadius: "50%", background: "rgba(255,255,255,0.4)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "18%", left: "58%", width: "14px", height: "14px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.25)", pointerEvents: "none", zIndex: 0 }} />

          {/* Ribbon */}
          <div style={{
            position: "absolute", top: "32px", right: "-48px",
            width: "200px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            color: "#fff",
            padding: "8px 0",
            textAlign: "center",
            fontSize: "11px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            transform: "rotate(45deg)",
            zIndex: 10,
          }}>
            CUSTOM
          </div>

          {/* Left */}
          <div className="banner-left" style={{ flex: "1 1 350px", position: "relative", zIndex: 1 }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "18px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px" }}>
              <FaWhatsapp size={28} color="#fff" />
            </div>
            <h3 style={{ fontSize: "30px", fontWeight: 800, color: "#fff", marginBottom: "14px", lineHeight: 1.3 }}>
              Bingung Memilih atau Ingin Custom Website?
            </h3>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.80)", lineHeight: 1.75, margin: 0 }}>
              Kami sangat terbuka untuk diskusi jika Anda membutuhkan desain berbeda, fitur tambahan, atau ingin menanyakan paket yang paling sesuai dengan budget bisnis Anda.
            </p>
          </div>

          {/* Right */}
          <div className="banner-right" style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "32px", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {["Custom Feature Sesuai Kebutuhan", "Nego Budget Lebih Fleksibel", "Konsultasi 100% Gratis"].map(tag => (
                <div key={tag} style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "15px", fontWeight: 600, color: "#fff" }}>
                  <div style={{ background: "rgba(255,255,255,0.18)", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FaCheck size={11} color="#fff" />
                  </div>
                  {tag}
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20diskusi%20custom%20website"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#2FA084",
                padding: "16px 32px",
                borderRadius: "50px",
                fontSize: "15px",
                fontWeight: 800,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 14px 32px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
            >
              <FaWhatsapp size={18} /> Konsultasi via WhatsApp
            </a>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: "36px", fontSize: "13.5px" }}>
          * Harga dapat berubah sesuai kompleksitas proyek. Hubungi kami untuk penawaran terbaik.
        </p>
      </div>

      <style>{`
        .pricing-section-header {
          animation: portfolioSlideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-banner {
          display: flex;
          flex-wrap: wrap;
        }
        .banner-left, .banner-right {
          padding: 52px 60px;
        }
        .banner-right {
          border-left: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 900px) {
          .banner-left, .banner-right { padding: 40px 32px; }
          .banner-right { border-left: none; border-top: 1px solid rgba(255,255,255,0.08); }
        }
        @media (max-width: 480px) {
          .banner-left, .banner-right { padding: 32px 24px; }
          .banner-left h3 { font-size: 24px !important; }
        }
      `}</style>
    </section>
  );
}
