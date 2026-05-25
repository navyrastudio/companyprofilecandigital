import testimonials from "../../data/testimonials.json";

const colors = ["#004258", "#8b5cf6", "#10b981", "#f59e0b", "#3b82f6", "#ef4444"];

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Testimoni</div>
          <h2 className="section-title">
            Kata Mereka tentang <span>CanDigital</span>
          </h2>
          <p className="section-desc">
            Biarkan klien kami yang berbicara. Kepuasan mereka adalah prioritas utama kami.
          </p>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="marquee-wrap" style={{ marginBottom: "20px" }}>
        <div className="marquee-track">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: "#f59e0b", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <p style={{ color: "var(--text-body)", fontSize: "14px", lineHeight: 1.7, marginBottom: "18px" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: colors[i % colors.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "15px",
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--text-dark)" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="marquee-wrap">
        <div className="marquee-track" style={{ animationDirection: "reverse" }}>
          {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((t, i) => (
            <div key={i} className="testimonial-card">
              <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: "#f59e0b", fontSize: "14px" }}>★</span>
                ))}
              </div>
              <p style={{ color: "var(--text-body)", fontSize: "14px", lineHeight: 1.7, marginBottom: "18px" }}>
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: colors[(i + 3) % colors.length],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#fff",
                    fontSize: "15px",
                    flexShrink: 0,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "14px", color: "var(--text-dark)" }}>{t.name}</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
