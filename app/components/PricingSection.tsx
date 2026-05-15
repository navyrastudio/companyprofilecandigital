"use client";

import { FaCheck, FaTimes } from "react-icons/fa";

import plans from "../../data/pricing.json";

export default function PricingSection() {
  return (
    <section id="pricing" style={{ background: "var(--bg-light)", padding: "100px 0", position: "relative" }}>
      {/* Decorative background element */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(180deg, var(--bg-white) 0%, var(--bg-light) 100%)", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="section-header reveal">
          <div className="section-label" style={{ color: "var(--accent)", background: "var(--bg-white)", padding: "6px 16px", borderRadius: "50px", border: "1px solid var(--border)", boxShadow: "var(--shadow-sm)" }}>Harga Paket</div>
          <h2 className="section-title">
            Investasi yang <span>Sepadan</span>
          </h2>
          <p className="section-desc">
            Harga transparan, kualitas premium. Pilih paket yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        <div
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
              className="reveal"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: p.featured ? "linear-gradient(180deg, var(--primary-dark) 0%, var(--primary) 100%)" : "#fff",
                border: p.featured ? "none" : "1px solid var(--border)",
                borderRadius: "24px",
                padding: "40px 32px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: p.featured ? "0 24px 48px rgba(0, 66, 88, 0.25)" : "var(--shadow-sm)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = p.featured ? "0 32px 64px rgba(0, 66, 88, 0.3)" : "var(--shadow-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = p.featured ? "0 24px 48px rgba(0, 66, 88, 0.25)" : "var(--shadow-sm)";
              }}
            >
              {p.bestChoice && (
                <div
                  style={{
                    position: "absolute",
                    top: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 800,
                    padding: "6px 20px",
                    borderRadius: "50px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 4px 12px rgba(255, 122, 89, 0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  PILIHAN TERBAIK
                </div>
              )}

              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "12px" }}>
                    <h3 style={{ fontSize: "22px", fontWeight: 800, color: p.featured ? "#fff" : "var(--text-dark)", lineHeight: 1.2, flex: 1 }}>
                      {p.name}
                    </h3>
                    <div style={{
                      fontSize: "10px",
                      color: p.featured ? "var(--primary-dark)" : "var(--primary)",
                      background: p.featured ? "#fff" : "var(--bg-light)",
                      padding: "6px 12px",
                      borderRadius: "50px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      border: p.featured ? "none" : "1px solid var(--border)",
                      boxShadow: p.featured ? "0 4px 12px rgba(0,0,0,0.15)" : "0 2px 6px rgba(0,0,0,0.05)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      whiteSpace: "nowrap",
                      flexShrink: 0
                    }}>
                      {p.tagline === "PALING PRAKTIS" && "⚡"}
                      {p.tagline === "PALING POPULER" && "🔥"}
                      {p.tagline === "PALING LENGKAP" && "💎"}
                      {p.tagline}
                    </div>
                  </div>
                  <div style={{ fontSize: "14px", color: p.featured ? "rgba(255,255,255,0.8)" : "var(--text-muted)", lineHeight: 1.6 }}>
                    {p.subtitle}
                  </div>
                </div>

                <div style={{ marginBottom: "28px", paddingBottom: "28px", borderBottom: p.featured ? "1px solid rgba(255,255,255,0.15)" : "1px solid var(--border)" }}>
                  {p.price === "Custom" ? (
                    <div style={{ fontSize: "40px", fontWeight: 800, color: p.featured ? "#fff" : "var(--primary)" }}>Custom</div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                      <span style={{ color: p.featured ? "rgba(255,255,255,0.8)" : "var(--text-muted)", fontSize: "16px", marginBottom: "8px", fontWeight: 600 }}>Rp</span>
                      <span style={{ fontSize: "48px", fontWeight: 800, color: p.featured ? "#fff" : "var(--primary)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                        {p.price}
                      </span>
                      <span style={{ color: p.featured ? "rgba(255,255,255,0.8)" : "var(--text-muted)", fontSize: "16px", marginBottom: "8px", fontWeight: 600 }}>
                        {p.suffix}
                      </span>
                    </div>
                  )}
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px", flex: 1 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: p.featured ? "#fff" : "var(--text-dark)" }}>
                      <div style={{ background: p.featured ? "rgba(255,255,255,0.2)" : "var(--bg-light2)", borderRadius: "50%", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                        <FaCheck size={10} color={p.featured ? "#fff" : "#22c55e"} />
                      </div>
                      <span style={{ fontWeight: 500 }}>{f}</span>
                    </li>
                  ))}
                  {p.notIncluded.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: p.featured ? "rgba(255,255,255,0.5)" : "var(--text-muted)", textDecoration: "line-through" }}>
                      <div style={{ background: p.featured ? "rgba(255,255,255,0.1)" : "var(--bg-light)", borderRadius: "50%", padding: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                        <FaTimes size={10} color={p.featured ? "rgba(255,255,255,0.5)" : "#cbd5e1"} />
                      </div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: "auto", marginBottom: "24px", display: "flex", alignItems: "center", gap: "14px", borderTop: p.featured ? "1px solid rgba(255,255,255,0.15)" : "1px solid var(--border)", paddingTop: "24px" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: p.featured ? "rgba(255,255,255,0.1)" : "var(--bg-light2)", border: p.featured ? "1px solid rgba(255,255,255,0.2)" : "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={p.featured ? "#fff" : "var(--text-muted)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", color: p.featured ? "rgba(255,255,255,0.7)" : "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2px" }}>WAKTU PENGERJAAN</div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: p.featured ? "#fff" : "var(--text-dark)" }}>{p.duration}</div>
                  </div>
                </div>

                <a
                  href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20info%20paket"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "16px 24px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: p.featured ? "#fff" : "var(--primary)",
                    color: p.featured ? "var(--primary-dark)" : "#fff",
                    boxShadow: p.featured ? "0 8px 16px rgba(0,0,0,0.15)" : "var(--shadow-sm)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    if (!p.featured) {
                      e.currentTarget.style.background = "var(--primary-light)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    if (!p.featured) {
                      e.currentTarget.style.background = "var(--primary)";
                    }
                  }}
                >
                  {p.cta} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal custom-banner" style={{
          marginTop: "80px",
          background: "var(--primary-dark)",
          borderRadius: "24px",
          boxShadow: "0 24px 48px rgba(0, 45, 61, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          position: "relative",
          overflow: "hidden"
        }}>

          {/* Elemen Dekoratif Abstrak */}
          <div style={{ position: "absolute", top: "-50px", left: "-50px", width: "250px", height: "250px", borderRadius: "50%", border: "30px solid rgba(255, 255, 255, 0.03)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", bottom: "-100px", right: "15%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(255, 122, 89, 0.08) 0%, rgba(0, 0, 0, 0) 70%)", pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "40%", left: "45%", width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent-light)", opacity: 0.5, pointerEvents: "none", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "20%", left: "55%", width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--accent-light)", opacity: 0.3, pointerEvents: "none", zIndex: 0 }} />

          {/* Ribbon Kustom */}
          <div style={{
            position: "absolute",
            top: "32px",
            right: "-48px",
            width: "200px",
            background: "linear-gradient(135deg, var(--accent), #e05e3f)",
            color: "#fff",
            padding: "8px 0",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            transform: "rotate(45deg)",
            boxShadow: "0 4px 12px rgba(255, 122, 89, 0.4)",
            zIndex: 10
          }}>
            CUSTOM
          </div>

          {/* Bagian Kiri */}
          <div className="banner-left" style={{ flex: "1 1 350px", position: "relative", zIndex: 1 }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "18px", background: "linear-gradient(135deg, var(--accent), #e05e3f)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "32px", boxShadow: "0 8px 24px rgba(255, 122, 89, 0.3)" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            </div>
            <h3 style={{ fontSize: "32px", fontWeight: 800, color: "#fff", marginBottom: "16px", lineHeight: 1.3 }}>
              Bingung Memilih atau Ingin Custom Website?
            </h3>
            <p style={{ fontSize: "16px", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.7, margin: 0 }}>
              Kami sangat terbuka untuk diskusi jika Anda membutuhkan desain berbeda, fitur tambahan, atau ingin menanyakan paket yang paling sesuai dengan budget bisnis Anda.
            </p>
          </div>

          {/* Bagian Kanan */}
          <div className="banner-right" style={{ flex: "1 1 300px", background: "rgba(255, 255, 255, 0.03)", display: "flex", flexDirection: "column", justifyContent: "center", gap: "36px", position: "relative", zIndex: 1 }}>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {["Custom Feature Sesuai Kebutuhan", "Nego Budget Lebih Fleksibel", "Konsultasi 100% Gratis"].map(tag => (
                <div key={tag} style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "16px", fontWeight: 600, color: "#fff" }}>
                  <div style={{ background: "rgba(255, 255, 255, 0.1)", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FaCheck size={12} color="var(--accent-light)" />
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
                background: "#fff",
                color: "var(--primary-dark)",
                padding: "18px 32px",
                borderRadius: "50px",
                fontSize: "16px",
                fontWeight: 800,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
                width: "100%"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.2)";
                e.currentTarget.style.background = "var(--bg-light)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.background = "#fff";
              }}
            >
              Konsultasi via WhatsApp <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            </a>
          </div>

        </div>

        <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: "40px", fontSize: "14px", padding: "0 20px" }}>
          * Harga dapat berubah sesuai kompleksitas proyek. Hubungi kami untuk penawaran terbaik.
        </p>
      </div>

      <style>{`
        .custom-banner {
          display: flex;
          flex-wrap: wrap;
        }
        .banner-left, .banner-right {
          padding: 56px 64px;
        }
        .banner-right {
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 900px) {
          .banner-left, .banner-right {
            padding: 40px 32px;
          }
          .banner-right {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }
        }

        @media (max-width: 480px) {
          .banner-left, .banner-right {
            padding: 32px 24px;
          }
          .banner-left h3 {
            font-size: 26px !important;
          }
        }
      `}</style>
    </section>
  );
}
