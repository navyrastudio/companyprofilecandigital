export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(135deg, #004258 0%, #005a75 100%)",
        padding: "80px 0 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "flex-end",
          }}
          className="two-col"
        >
          {/* Left */}
          <div style={{ paddingBottom: "80px" }} className="reveal-left">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "50px",
                padding: "6px 16px",
                marginBottom: "24px",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "13px", fontWeight: 600 }}>
                150+ Proyek Berhasil Diselesaikan
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 54px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "20px",
                lineHeight: 1.15,
              }}
            >
              Jasa Pembuatan<br />
              Website{" "}
              <span style={{ color: "#ff7a59" }}>Profesional</span>
            </h1>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "36px",
                lineHeight: 1.75,
                maxWidth: "480px",
              }}
            >
              Kami membantu bisnis Anda tampil kredibel dan menarik di era digital.
              Dari konsep hingga maintenance — semuanya kami yang handle.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20konsultasi%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                id="hero-cta-primary"
              >
                Konsultasi Sekarang →
              </a>
              <a href="#portfolio" className="btn btn-white" id="hero-cta-portfolio">
                Lihat Portfolio
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(255,255,255,0.15)",
                flexWrap: "wrap",
              }}
            >
              {[
                { num: "150+", label: "Proyek Selesai" },
                { num: "98%", label: "Klien Puas" },
                { num: "5.0★", label: "Rating Google" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: "26px", fontWeight: 800, color: "#fff" }}>{s.num}</div>
                  <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — browser mockup sitting at bottom */}
          <div
            className="reveal-right hide-mobile"
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "center" }}
          >
            <div
              className="float"
              style={{
                width: "100%",
                maxWidth: "440px",
                background: "#fff",
                borderRadius: "16px 16px 0 0",
                overflow: "hidden",
                boxShadow: "0 -8px 40px rgba(0,0,0,0.25)",
              }}
            >
              {/* Browser bar */}
              <div
                style={{
                  background: "#f1f5f9",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <div
                  style={{
                    flex: 1,
                    background: "#fff",
                    borderRadius: "6px",
                    padding: "5px 10px",
                    fontSize: "11px",
                    color: "#94a3b8",
                    marginLeft: "8px",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  candigital.id
                </div>
              </div>
              {/* Page content mockup */}
              <div style={{ padding: "20px" }}>
                {/* Hero area mockup */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #004258, #005a75)",
                    borderRadius: "10px",
                    padding: "20px",
                    marginBottom: "14px",
                  }}
                >
                  <div style={{ width: "55%", height: "10px", background: "rgba(255,255,255,0.3)", borderRadius: "5px", marginBottom: "8px" }} />
                  <div style={{ width: "80%", height: "7px", background: "rgba(255,255,255,0.18)", borderRadius: "5px", marginBottom: "6px" }} />
                  <div style={{ width: "65%", height: "7px", background: "rgba(255,255,255,0.15)", borderRadius: "5px", marginBottom: "14px" }} />
                  <div style={{ display: "flex", gap: "8px" }}>
                    <div style={{ width: "90px", height: "28px", background: "#ff7a59", borderRadius: "20px" }} />
                    <div style={{ width: "80px", height: "28px", background: "rgba(255,255,255,0.2)", borderRadius: "20px", border: "1px solid rgba(255,255,255,0.3)" }} />
                  </div>
                </div>
                {/* Cards */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "14px" }}>
                  {["#3b82f6", "#10b981", "#f59e0b"].map((c, i) => (
                    <div key={i} style={{ background: "#f8fafc", borderRadius: "8px", padding: "10px", border: "1px solid #e2e8f0" }}>
                      <div style={{ width: 24, height: 24, borderRadius: "6px", background: c + "22", marginBottom: "6px" }} />
                      <div style={{ width: "80%", height: "6px", background: "#e2e8f0", borderRadius: "3px", marginBottom: "4px" }} />
                      <div style={{ width: "60%", height: "5px", background: "#f1f5f9", borderRadius: "3px" }} />
                    </div>
                  ))}
                </div>
                <div style={{ background: "#004258", borderRadius: "8px", padding: "10px 14px", textAlign: "center", fontSize: "11px", fontWeight: 700, color: "#fff" }}>
                  Hubungi Kami Sekarang →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ marginTop: "-1px", lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H0Z" fill="#f4f8fb" />
          <path d="M0 60L60 55C120 50 240 40 360 36C480 32 600 38 720 44C840 50 960 54 1080 52C1200 50 1320 42 1380 38L1440 34V60H0Z" fill="white" />
        </svg>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero .two-col { grid-template-columns: 1fr !important; }
          #hero .two-col > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
