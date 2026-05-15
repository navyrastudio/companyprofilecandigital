import {
  FaChartLine,
  FaBriefcase,
  FaBullseye,
  FaClock,
  FaGlobe,
  FaTimesCircle,
  FaCheckCircle,
  FaRocket,
  FaSmile,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

const statsData = [
  { Icon: FaRocket, num: "150+", label: "Proyek\nSelesai", color: "#004258" },
  { Icon: FaSmile, num: "98%", label: "Klien\nPuas", color: "#10b981" },
  { Icon: FaStar, num: "5.0★", label: "Rating\nGoogle", color: "#f59e0b" },
  { Icon: FaTrophy, num: "7+", label: "Tahun\nPengalaman", color: "#8b5cf6" },
];

const problems = [
  "Sulit ditemukan di Google",
  "Terkesan tidak profesional",
  "Kalah dari kompetitor",
  "Kehilangan kepercayaan calon klien",
];

const benefits = [
  { Icon: FaChartLine, text: "Mudah ditemukan di halaman 1 Google", color: "#004258" },
  { Icon: FaBriefcase, text: "Tampil profesional dan terpercaya", color: "#3b82f6" },
  { Icon: FaBullseye, text: "Menjangkau audiens yang tepat", color: "#10b981" },
  { Icon: FaClock, text: "Website aktif 24 jam tanpa henti", color: "#f59e0b" },
  { Icon: FaGlobe, text: "Jangkauan bisnis lebih luas", color: "#8b5cf6" },
];

export function WhyUsSection() {
  return (
    <section style={{ background: "#fff", padding: "88px 0" }}>
      <div className="container">
        <div className="two-col why-us-grid">
          {/* Left */}
          <div className="reveal-left">
            <div className="section-label">Mengapa Website Penting?</div>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "20px" }}>
              Bisnis Tanpa Website<br />
              <span>Kehilangan Peluang Besar</span>
            </h2>
            <p style={{ color: "var(--text-body)", fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>
              Di era digital, orang rata-rata menghabiskan{" "}
              <strong style={{ color: "var(--text-dark)" }}>7+ jam per hari</strong> di internet.
              Website adalah kantor digital bisnis Anda — tempat pertama pelanggan potensial mencari informasi.
            </p>
            {problems.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  background: "#fff5f5",
                  border: "1px solid #fecaca",
                  borderRadius: "10px",
                  marginBottom: "8px",
                }}
              >
                <FaTimesCircle size={15} color="#ef4444" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "var(--text-body)" }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className="reveal-right">
            <div
              style={{
                background: "var(--bg-light)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "20px" }}>
                Dengan CanDigital, bisnis Anda:
              </h3>
              {benefits.map(({ Icon, text, color }) => (
                <div
                  key={text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 16px",
                    background: "#fff",
                    border: "1px solid var(--border)",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "10px",
                      background: color + "15",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} color={color} />
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-dark)", flex: 1 }}>{text}</span>
                  <FaCheckCircle size={15} color="#22c55e" style={{ flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section style={{ background: "var(--bg-light)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "52px 0" }}>
      <div className="container">
        <div className="stats-grid">
          {statsData.map(({ Icon, num, label, color }, i) => (
            <div key={label} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="stat-icon-wrap" style={{ background: color + "15", borderColor: color + "25" }}>
                <Icon color={color} className="stat-icon" />
              </div>
              <div className="stat-num">{num}</div>
              <div className="stat-label">
                {label.split("\n").map((text, idx) => (
                  <span key={idx} className="stat-label-line">{text}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
