const portfolios = [
  { name: "PT Maju Bersama", type: "Company Profile", industry: "Konstruksi", color: "#004258" },
  { name: "Toko Fashion Kita", type: "E-Commerce", industry: "Fashion & Retail", color: "#8b5cf6" },
  { name: "Klinik Sehat Prima", type: "Landing Page", industry: "Kesehatan", color: "#10b981" },
  { name: "Properti Nusantara", type: "Company Profile", industry: "Properti", color: "#f59e0b" },
  { name: "RoboTech Indonesia", type: "Custom Web App", industry: "Teknologi", color: "#3b82f6" },
  { name: "Edu Pintar Online", type: "E-Commerce", industry: "Pendidikan", color: "#ef4444" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">
            Karya Terbaik <span>Kami</span>
          </h2>
          <p className="section-desc">
            Beberapa proyek yang telah kami kerjakan bersama klien dari berbagai industri di Indonesia.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {portfolios.map((p, i) => (
            <div
              key={p.name}
              className="portfolio-card reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Mockup visual */}
              <div
                style={{
                  height: "190px",
                  background: `linear-gradient(135deg, ${p.color}18, ${p.color}08)`,
                  borderBottom: "1px solid var(--border)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Browser bar */}
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      background: "#f8fafc",
                      padding: "7px 10px",
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fca5a5" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fcd34d" }} />
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#6ee7b7" }} />
                    <div style={{ flex: 1, background: "#e2e8f0", height: "12px", borderRadius: "6px", marginLeft: "6px" }} />
                  </div>
                  <div style={{ padding: "10px 12px" }}>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                      <div style={{ flex: 2, height: "8px", background: p.color + "30", borderRadius: "4px" }} />
                      <div style={{ flex: 1, height: "8px", background: "#e2e8f0", borderRadius: "4px" }} />
                    </div>
                    <div style={{ height: "6px", background: "#f1f5f9", borderRadius: "3px", marginBottom: "5px", width: "85%" }} />
                    <div style={{ height: "6px", background: "#f1f5f9", borderRadius: "3px", width: "65%" }} />
                    <div style={{ marginTop: "10px", width: "60px", height: "20px", background: p.color, borderRadius: "10px" }} />
                  </div>
                </div>
              </div>

              {/* Card info */}
              <div style={{ padding: "18px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-dark)", marginBottom: "4px" }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                    {p.type} · {p.industry}
                  </div>
                </div>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: p.color + "15",
                    border: `1px solid ${p.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: p.color,
                    fontSize: "16px",
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <a href="#contact" className="btn btn-outline">Lihat Semua Portfolio →</a>
        </div>
      </div>
    </section>
  );
}
