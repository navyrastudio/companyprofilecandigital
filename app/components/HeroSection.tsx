"use client";
import { useState, useEffect } from "react";

const PORTFOLIO = [
  { name: "PT Maju Bersama", type: "Company Profile", industry: "Konstruksi & Sipil", color: "#004258", accent: "#0e7490", desc: "Website profil perusahaan konstruksi sipil skala nasional dengan portofolio proyek interaktif." },
  { name: "Toko Fashion Kita", type: "E-Commerce", industry: "Fashion & Retail", color: "#8b5cf6", accent: "#a78bfa", desc: "Platform e-commerce modern dengan katalog interaktif dan integrasi payment gateway." },
  { name: "Klinik Sehat Prima", type: "Landing Page", industry: "Layanan Kesehatan", color: "#10b981", accent: "#34d399", desc: "Landing page konversi tinggi untuk booking dokter online dengan integrasi jadwal konsultasi." },
  { name: "Properti Nusantara", type: "Company Profile", industry: "Properti & Real Estate", color: "#f59e0b", accent: "#fbbf24", desc: "Portal listing properti eksklusif dengan filter canggih dan kalkulator KPR interaktif." },
  { name: "RoboTech Indonesia", type: "Sistem Informasi", industry: "Teknologi & IoT", color: "#3b82f6", accent: "#60a5fa", desc: "Dashboard analitik real-time untuk pemantauan performa sensor IoT di lini produksi." },
  { name: "Edu Pintar Online", type: "Sistem Informasi", industry: "Pendidikan & Kursus", color: "#ef4444", accent: "#f87171", desc: "LMS interaktif untuk penjualan, streaming, dan pendaftaran kursus online bersertifikat." },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % PORTFOLIO.length);
        setAnimating(false);
      }, 350);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 350);
  };

  const current = PORTFOLIO[active];
  return (
    <section
      id="hero"
      style={{
        background: "#ffffff",
        paddingTop: "110px",
        paddingBottom: "40px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Decorative Background Elements */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
        {/* CSS Noise Texture (Grain) */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
            opacity: 0.12,
            mixBlendMode: "overlay",
          }}
        />

        {/* Subtle Dotted Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: "radial-gradient(rgba(0,0,0,0.08) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 90%)"
          }}
        />

        {/* Elegant Animated Soft Glows */}
        <div className="hero-float-1" style={{ position: "absolute", top: "-15%", left: "-10%", width: "800px", height: "800px", background: "radial-gradient(circle, rgba(47, 160, 132, 0.15) 0%, transparent 60%)", filter: "blur(60px)", borderRadius: "50%" }} />
        <div className="hero-float-2" style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(255, 107, 0, 0.1) 0%, transparent 60%)", filter: "blur(60px)", borderRadius: "50%" }} />

        {/* Soft diagonal light ray */}
        <div style={{ position: "absolute", top: "-10%", right: "10%", width: "100%", height: "300px", background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.03) 50%, transparent 100%)", transform: "rotate(-35deg)", filter: "blur(30px)" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Floating Decorative Orbs */}
        <div className="hero-float-2" style={{ position: "absolute", top: "10%", right: "45%", width: "40px", height: "40px", borderRadius: "12px", background: "#ff7a59", transform: "rotate(15deg)", boxShadow: "0 10px 20px rgba(255,122,89,0.3)", backdropFilter: "blur(4px)", zIndex: 0 }} />
        <div className="hero-float-3" style={{ position: "absolute", bottom: "20%", left: "-5%", width: "24px", height: "24px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(74,222,128,0.8), rgba(34,197,94,0.8))", boxShadow: "0 8px 16px rgba(74,222,128,0.3)", zIndex: 0 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: "40px",
            alignItems: "center",
            paddingBottom: "60px",
          }}
          className="two-col"
        >
          {/* Left */}
          <div className="reveal-left" style={{ position: "relative", zIndex: 2 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(0,0,0,0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: "50px",
                padding: "8px 20px",
                marginBottom: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#2FA084", display: "inline-block", boxShadow: "0 0 10px #2FA084" }} />
              <span style={{ color: "#334155", fontSize: "13px", fontWeight: 700, letterSpacing: "0.02em" }}>
                Partner Digitalisasi UMKM & Instansi
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(26px, 3.2vw, 44px)",
                fontWeight: 900,
                color: "#1e293b",
                marginBottom: "20px",
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Membantu Bisnis dan Instansi<br />
              Anda Bertumbuh Melalui Solusi<br />
              Digital yang{" "}
              <span
                style={{
                  background: "linear-gradient(100deg, #1a9e7a 0%, #2FA084 40%, #43F0CD 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Tepat
                <span style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(to right, #2FA084, #43F0CD)",
                  borderRadius: "99px",
                  display: "block",
                  opacity: 0.7,
                }} />
              </span>
            </h1>

            <p
              style={{
                fontSize: "14px",
                color: "#475569",
                marginBottom: "24px",
                lineHeight: 1.7,
                maxWidth: "500px",
                fontWeight: 400,
              }}
            >
              Di era yang serba terhubung, masyarakat mencari informasi, membangun kepercayaan, dan mengambil keputusan secara digital. Kami membantu Anda menghadirkan website dan sistem yang membuat informasi lebih mudah diakses, pekerjaan lebih tertata, dan layanan lebih profesional.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "32px" }}>
              <a
                href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent hero-btn"
                id="hero-cta-primary"
                style={{
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: 700,
                  background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)",
                  color: "#ffffff",
                  boxShadow: "0 12px 24px rgba(47,160,132,0.3)",
                  border: "none",
                }}
              >
                Konsultasi Sekarang →
              </a>
              <a
                href="#portfolio"
                className="btn btn-white hero-btn-outline"
                id="hero-cta-portfolio"
                style={{
                  padding: "16px 32px",
                  fontSize: "16px",
                  fontWeight: 700,
                  background: "transparent",
                  border: "2px solid #cbd5e1",
                  color: "#0f172a",
                }}
              >
                Lihat Portfolio
              </a>
            </div>

            {/* <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#fff", marginBottom: "24px" }}>Stats</h2> */}
            <div
              style={{
                display: "flex",
                gap: "32px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>150+</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Proyek Selesai</div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.15)" }} className="hide-mobile" />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>98%</div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Klien Puas</div>
              </div>
              <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.15)" }} className="hide-mobile" />
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "28px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>
                  5.0 <span style={{ color: "#fbbf24", fontSize: "22px" }}>★</span>
                </div>
                <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>Rating Google</div>
              </div>*/}
            </div> 
          </div>          {/* Right — Portfolio Slideshow */}
          <div
            className="reveal-right hide-mobile"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative", zIndex: 2 }}
          >
            {/* Ambient glow */}
            <div style={{
              position: "absolute",
              width: "320px", height: "320px",
              background: `radial-gradient(circle, ${current.accent}30 0%, transparent 70%)`,
              filter: "blur(50px)",
              borderRadius: "50%",
              transition: "background 0.8s ease",
              pointerEvents: "none",
              zIndex: 0,
            }} />

            <a
              href="#portfolio"
              className="hero-slideshow-card hero-float-1"
              style={{
                width: "100%",
                maxWidth: "440px",
                borderRadius: "20px",
                overflow: "hidden",
                display: "block",
                textDecoration: "none",
                cursor: "pointer",
                position: "relative",
                background: "#ffffff",
                boxShadow: `0 4px 6px rgba(0,0,0,0.04), 0 20px 48px rgba(0,0,0,0.10), 0 0 0 1.5px ${current.accent}33`,
                transition: "box-shadow 0.4s ease, transform 0.3s ease",
                zIndex: 1,
              }}
            >
              {/* Top accent bar — gradient warna proyek */}
              <div style={{
                height: "4px",
                background: `linear-gradient(to right, ${current.color}, ${current.accent})`,
                transition: "background 0.5s ease",
              }} />

              {/* Browser bar — putih bersih */}
              <div style={{
                background: "#f8fafc",
                padding: "10px 14px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                borderBottom: "1px solid #e9eef5",
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <div style={{
                  flex: 1, background: "#fff", borderRadius: "6px",
                  padding: "5px 10px", marginLeft: "8px",
                  fontSize: "11px", display: "flex", alignItems: "center", gap: "5px",
                  border: "1px solid #e2e8f0", color: "#94a3b8",
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  <span>candigit.com/</span>
                  <span style={{ color: current.color, fontWeight: 700 }}>portfolio</span>
                </div>
                <span style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 700, marginLeft: "4px" }}>
                  {active + 1}<span style={{ opacity: 0.5 }}>/{PORTFOLIO.length}</span>
                </span>
              </div>

              {/* Slide content */}
              <div style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateX(20px) scale(0.99)" : "translateX(0) scale(1)",
                transition: "opacity 0.32s ease, transform 0.32s ease",
              }}>
                {/* Color header */}
                <div style={{
                  background: `linear-gradient(130deg, ${current.color} 0%, ${current.accent} 100%)`,
                  padding: "16px 20px 14px",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Dekorasi lingkaran */}
                  <div style={{ position: "absolute", top: "-40px", right: "-20px", width: "130px", height: "130px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", bottom: "-30px", left: "20px", width: "90px", height: "90px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "10px", left: "-20px", width: "60px", height: "60px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

                  {/* Badges */}
                  <div style={{ display: "flex", gap: "6px", marginBottom: "12px", flexWrap: "wrap" }}>
                    <span style={{
                      background: "rgba(255,255,255,0.22)", backdropFilter: "blur(8px)",
                      color: "#fff", fontSize: "9px", fontWeight: 800,
                      padding: "3px 10px", borderRadius: "99px",
                      letterSpacing: "0.07em", textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}>{current.type}</span>
                    <span style={{
                      background: "rgba(0,0,0,0.12)",
                      color: "rgba(255,255,255,0.9)", fontSize: "9px", fontWeight: 600,
                      padding: "3px 10px", borderRadius: "99px",
                    }}>{current.industry}</span>
                  </div>

                  {/* Nama proyek */}
                  <div style={{
                    fontSize: "21px", fontWeight: 900, color: "#fff",
                    marginBottom: "6px", letterSpacing: "-0.03em", lineHeight: 1.2,
                    textShadow: "0 1px 8px rgba(0,0,0,0.15)",
                  }}>{current.name}</div>

                  {/* Deskripsi */}
                  <div style={{
                    fontSize: "12px", color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.65, maxWidth: "380px",
                  }}>{current.desc}</div>
                </div>

                {/* Bottom area — putih bersih */}
                <div style={{ background: "#fff", padding: "16px 28px" }}>

                  {/* Mini website mockup */}
                  <div style={{
                    borderRadius: "10px", overflow: "hidden",
                    border: "1px solid #e8eef5",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    marginBottom: "14px",
                  }}>
                    {/* Navbar mini */}
                    <div style={{
                      background: "#f1f5f9", padding: "10px 14px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      borderBottom: "1px solid #e2e8f0",
                    }}>
                      <div style={{ width: "44px", height: "6px", background: current.color + "bb", borderRadius: "3px" }} />
                      <div style={{ display: "flex", gap: "7px" }}>
                        {[1,2,3].map(i => <div key={i} style={{ width: "20px", height: "5px", background: "#cbd5e1", borderRadius: "3px" }} />)}
                      </div>
                      <div style={{ width: "26px", height: "16px", background: current.color, borderRadius: "4px", opacity: 0.85 }} />
                    </div>

                    {/* Content mockup */}
                    <div style={{ background: "#fff", padding: "16px 18px" }}>
                      <div style={{ width: "60%", height: "8px", background: "#cbd5e1", borderRadius: "4px", marginBottom: "9px" }} />
                      <div style={{ width: "85%", height: "5px", background: "#e2e8f0", borderRadius: "3px", marginBottom: "7px" }} />
                      <div style={{ width: "50%", height: "5px", background: "#e2e8f0", borderRadius: "3px", marginBottom: "15px" }} />
                      <div style={{ display: "flex", gap: "9px" }}>
                        <div style={{ width: "60px", height: "18px", background: current.color, borderRadius: "5px", opacity: 0.9 }} />
                        <div style={{ width: "50px", height: "18px", background: "#f1f5f9", borderRadius: "5px", border: "1px solid #e2e8f0" }} />
                      </div>
                    </div>
                  </div>

                  {/* Footer: tech tags + CTA */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "4px" }}>
                      {["Next.js", "React", "CSS"].map(t => (
                        <span key={t} style={{
                          fontSize: "9px", color: "#64748b", fontWeight: 600,
                          background: "#f1f5f9", border: "1px solid #e2e8f0",
                          padding: "2px 7px", borderRadius: "4px",
                        }}>{t}</span>
                      ))}
                    </div>
                    <span style={{
                      fontSize: "11px", fontWeight: 700, color: current.color,
                      display: "flex", alignItems: "center", gap: "3px",
                      transition: "gap 0.2s ease",
                    }}>
                      Lihat Semua →
                    </span>
                  </div>
                </div>
              </div>

              {/* Dot indicators */}
              <div style={{
                background: "#f8fafc", padding: "10px 16px",
                display: "flex", justifyContent: "center", gap: "5px", alignItems: "center",
                borderTop: "1px solid #e9eef5",
              }}>
                {PORTFOLIO.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.preventDefault(); goTo(i); }}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: i === active ? "22px" : "6px",
                      height: "6px",
                      borderRadius: "99px",
                      background: i === active ? current.color : "#cbd5e1",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "all 0.35s ease",
                      boxShadow: i === active ? `0 0 6px ${current.color}66` : "none",
                    }}
                  />
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes heroFloatAlt {
          0% { transform: translateY(0px) scale(1) rotate(15deg); }
          50% { transform: translateY(-20px) scale(1.05) rotate(10deg); }
          100% { transform: translateY(0px) scale(1) rotate(15deg); }
        }
        @keyframes pulseDot {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(47, 160, 132, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(47, 160, 132, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(47, 160, 132, 0); }
        }
        .hero-float-1 { animation: heroFloat 6s ease-in-out infinite; }
        .hero-float-2 { animation: heroFloatAlt 8s ease-in-out infinite; }
        .hero-float-3 { animation: heroFloat 7s ease-in-out infinite 2s; }
        .pulse-dot { animation: pulseDot 2s infinite; }
        .portfolio-slide button:hover { opacity: 0.85; }

        .hero-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 32px rgba(47,160,132,0.4) !important; }
        .hero-btn-outline:hover { background: rgba(0,0,0,0.05) !important; transform: translateY(-3px); }

        @media (max-width: 900px) {
          #hero .two-col { grid-template-columns: 1fr !important; }
          #hero .two-col > div:last-child { display: none !important; }

          /* Center all left-column content */
          #hero .two-col > div:first-child {
            text-align: center !important;
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
            max-width: 680px !important;
            margin: 0 auto !important;
          }
          #hero .two-col > div:first-child h1 {
            text-align: center !important;
          }
          #hero .two-col > div:first-child > p {
            text-align: center !important;
            max-width: 560px !important;
          }
          /* Buttons row */
          #hero .two-col > div:first-child > div:nth-child(4) {
            justify-content: center !important;
          }
          /* Stats row */
          #hero .two-col > div:first-child > div:nth-child(5) {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
