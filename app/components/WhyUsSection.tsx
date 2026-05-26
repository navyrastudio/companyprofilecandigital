import {
  FaChartLine,
  FaBriefcase,
  FaBullseye,
  FaClock,
  FaGlobe,
  FaTimesCircle,
  FaCheckCircle,
} from "react-icons/fa";

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
    <section className="whyus-section" style={{ marginBottom: "-40px" }}>
      {/* Glowing Backdrop Orbs */}
      <div className="whyus-orb-1"></div>
      <div className="whyus-orb-2"></div>

      {/* Decorative Interactive Shapes */}
      <div className="whyus-shape whyus-shape-1"></div>
      <div className="whyus-shape whyus-shape-2"></div>
      <div className="whyus-shape whyus-shape-3"></div>
      <div className="whyus-shape whyus-shape-4"></div>

      <div className="container">
        <div className="two-col why-us-grid">
          {/* Left Column */}
          <div className="whyus-left-col">
            <div className="section-label">Mengapa Website Penting?</div>
            <h2 className="section-title whyus-title" style={{ textAlign: "left" }}>
              Bisnis Tanpa Website<br />
              <span>Kehilangan Peluang Besar</span>
            </h2>
            <p className="whyus-desc">
              Di era digital, orang rata-rata menghabiskan{" "}
              <strong>7+ jam per hari</strong> di internet.
              Website adalah kantor digital bisnis Anda — tempat pertama pelanggan potensial mencari informasi.
            </p>
            
            {/* 2x2 Grid of Problems */}
            <div className="whyus-problems-container">
              {problems.map((item) => (
                <div key={item} className="whyus-problem-item">
                  <FaTimesCircle size={16} color="#ffa3a3" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span className="whyus-problem-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="whyus-right-col">
            <div className="whyus-benefit-card">
              <span className="whyus-card-badge">Solusi Digital</span>
              <h3 className="whyus-benefit-title">
                Dengan CanDigit, bisnis Anda:
              </h3>
              {benefits.map(({ Icon, text, color }) => (
                <div key={text} className="whyus-benefit-item">
                  <div
                    className="whyus-benefit-icon"
                    style={{
                      background: color + "15",
                    }}
                  >
                    <Icon size={18} color={color} />
                  </div>
                  <span className="whyus-benefit-text">{text}</span>
                  <FaCheckCircle size={16} color="#22c55e" className="whyus-check-icon" />
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
  return null;
}

