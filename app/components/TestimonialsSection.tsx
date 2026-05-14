const testimonials = [
  {
    name: "Budi Santoso",
    company: "PT Maju Bersama",
    role: "CEO",
    rating: 5,
    text: "Tim CanDigital sangat profesional dan responsif. Website company profile kami selesai tepat waktu dan hasilnya melebihi ekspektasi. Traffic naik 3x lipat dalam 2 bulan!",
  },
  {
    name: "Siti Rahayu",
    company: "Toko Fashion Kita",
    role: "Owner",
    rating: 5,
    text: "Awalnya ragu, tapi ternyata prosesnya mudah banget. Tim-nya sabar menjelaskan dan desain yang dihasilkan sangat keren. Penjualan online langsung meningkat signifikan.",
  },
  {
    name: "Ahmad Fauzi",
    company: "Klinik Sehat Prima",
    role: "Direktur",
    rating: 5,
    text: "Sangat puas dengan hasilnya! Website klinik kami kini terlihat sangat profesional. Pasien baru semakin banyak datang melalui Google karena mudah ditemukan.",
  },
  {
    name: "Dewi Lestari",
    company: "Properti Nusantara",
    role: "Marketing Manager",
    rating: 5,
    text: "CanDigital benar-benar paham kebutuhan kami. Desainnya elegan, loading cepat, dan mudah dikelola sendiri. Investasi terbaik untuk bisnis kami.",
  },
  {
    name: "Rizky Pratama",
    company: "RoboTech Indonesia",
    role: "Founder",
    rating: 5,
    text: "Custom web app yang mereka bangun sangat membantu operasional bisnis kami. Fitur-fiturnya tepat sasaran dan interface-nya intuitif. Highly recommended!",
  },
  {
    name: "Nurul Hidayah",
    company: "Edu Pintar Online",
    role: "Direktur",
    rating: 5,
    text: "Platform e-learning kami berhasil dibuat dengan sangat baik. Tim teknisnya kompeten dan komunikatif. Proses revisi juga tidak ribet sama sekali.",
  },
];

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
