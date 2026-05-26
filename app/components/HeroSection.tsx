export default function HeroSection() {
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
            gridTemplateColumns: "1fr 1fr",
            gap: "50px",
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
                Siap Mewujudkan Website Impian Anda
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                fontWeight: 800,
                color: "#0f172a",
                marginBottom: "16px",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Jasa Pembuatan<br />
              Website{" "}
              <span style={{
                background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                display: "inline-block"
              }}>Profesional</span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "#475569",
                marginBottom: "24px",
                lineHeight: 1.7,
                maxWidth: "500px",
                fontWeight: 400,
              }}
            >
              Kami membantu bisnis Anda tampil kredibel dan menarik di era digital.
              Dari konsep hingga maintenance — semuanya kami yang handle.
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
          </div>

          {/* Right — browser mockup */}
          <div
            className="reveal-right hide-mobile"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "30px", position: "relative", zIndex: 2 }}
          >
            <div
              className="hero-float-1"
              style={{
                width: "100%",
                maxWidth: "440px",
                background: "#fff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 24px 48px rgba(0,45,61,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {/* Browser bar */}
              <div
                style={{
                  background: "#f8fafc",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ff5f57", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ffbd2e", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#28c840", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.1)" }} />
                <div
                  style={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    fontSize: "12px",
                    color: "#94a3b8",
                    marginLeft: "12px",
                    border: "1px solid #e2e8f0",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px"
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  candigit.com
                </div>
              </div>
              {/* Page content mockup */}
              <div style={{ padding: "24px", background: "#f1f5f9" }}>
                {/* Hero area mockup */}
                <div
                  style={{
                    background: "linear-gradient(to bottom, #2FA084 0%, #43F0CD 100%)",
                    borderRadius: "12px",
                    padding: "24px",
                    marginBottom: "16px",
                    boxShadow: "0 10px 20px rgba(47,160,132,0.2)",
                  }}
                >
                  <div style={{ width: "60%", height: "12px", background: "rgba(255,255,255,0.9)", borderRadius: "6px", marginBottom: "12px" }} />
                  <div style={{ width: "85%", height: "8px", background: "rgba(255,255,255,0.4)", borderRadius: "4px", marginBottom: "8px" }} />
                  <div style={{ width: "70%", height: "8px", background: "rgba(255,255,255,0.3)", borderRadius: "4px", marginBottom: "20px" }} />
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ width: "100px", height: "32px", background: "#ff7a59", borderRadius: "50px", boxShadow: "0 4px 8px rgba(255,122,89,0.2)" }} />
                    <div style={{ width: "90px", height: "32px", background: "rgba(255,255,255,0.15)", borderRadius: "50px", border: "1px solid rgba(255,255,255,0.3)" }} />
                  </div>
                </div>
                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "16px" }}>
                  {["#3b82f6", "#10b981", "#f59e0b"].map((c, i) => (
                    <div key={i} style={{ background: "#fff", borderRadius: "10px", padding: "12px", border: "1px solid #e2e8f0", boxShadow: "0 4px 6px rgba(0,0,0,0.02)" }}>
                      <div style={{ width: 28, height: 28, borderRadius: "8px", background: c + "22", marginBottom: "8px" }} />
                      <div style={{ width: "85%", height: "6px", background: "#cbd5e1", borderRadius: "3px", marginBottom: "6px" }} />
                      <div style={{ width: "65%", height: "5px", background: "#e2e8f0", borderRadius: "3px" }} />
                    </div>
                  ))}
                </div>
                <div style={{ background: "linear-gradient(45deg, #2FA084 0%, #43F0CD 100%)", borderRadius: "10px", padding: "12px 16px", textAlign: "center", fontSize: "12px", fontWeight: 800, color: "#fff", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Hubungi Kami Sekarang →
                </div>
              </div>
            </div>
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
