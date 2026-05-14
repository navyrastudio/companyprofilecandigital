import { FaCheck, FaTimes } from "react-icons/fa";

import plans from "../../data/pricing.json";

export default function PricingSection() {
  return (
    <section id="pricing" className="section-bg-light">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Harga</div>
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
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`pricing-card reveal ${p.featured ? "featured" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "5px 18px",
                    borderRadius: "50px",
                    whiteSpace: "nowrap",
                  }}
                >
                  ⭐ PALING POPULER
                </div>
              )}

              <div style={{ marginTop: p.featured ? "8px" : "0" }}>
                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px" }}>
                    {p.name}
                  </h3>
                  <div style={{ fontSize: "13px", color: p.featured ? "var(--accent)" : "var(--text-muted)", fontWeight: 600 }}>
                    {p.tagline}
                  </div>
                </div>

                <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--border)" }}>
                  {p.price === "Custom" ? (
                    <div style={{ fontSize: "36px", fontWeight: 800, color: "var(--primary)" }}>Custom</div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px" }}>
                      <span style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "6px" }}>Rp</span>
                      <span style={{ fontSize: "44px", fontWeight: 800, color: "var(--primary)", lineHeight: 1 }}>
                        {p.price}
                      </span>
                      <span style={{ color: "var(--text-muted)", fontSize: "16px", marginBottom: "6px" }}>
                        &nbsp;{p.suffix}
                      </span>
                    </div>
                  )}
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-body)" }}>
                      <FaCheck size={12} color="#22c55e" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {f}
                    </li>
                  ))}
                  {p.notIncluded.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--text-muted)", textDecoration: "line-through" }}>
                      <FaTimes size={12} color="#cbd5e1" style={{ flexShrink: 0, marginTop: "2px" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20info%20paket"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={p.featured ? "btn btn-accent" : "btn btn-outline"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", color: "var(--text-muted)", marginTop: "28px", fontSize: "13px" }}>
          * Harga dapat berubah sesuai kompleksitas proyek. Hubungi kami untuk penawaran terbaik.
        </p>
      </div>
    </section>
  );
}
