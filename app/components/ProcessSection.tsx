import {
  FaComments,
  FaFileAlt,
  FaTools,
  FaEye,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    Icon: FaComments,
    num: "01",
    title: "Konsultasi",
    desc: "Ceritakan tujuan, konsep, dan kebutuhan website Anda. Kami mendengarkan dan memberi saran terbaik.",
    color: "#004258",
  },
  {
    Icon: FaFileAlt,
    num: "02",
    title: "Proposal & Penawaran",
    desc: "Kami menyiapkan proposal detail: scope pekerjaan, timeline, dan harga yang transparan.",
    color: "#3b82f6",
  },
  {
    Icon: FaTools,
    num: "03",
    title: "Desain & Development",
    desc: "Tim kami mulai bekerja setelah DP. Anda mendapat update progress secara berkala.",
    color: "#8b5cf6",
  },
  {
    Icon: FaEye,
    num: "04",
    title: "Review & Revisi",
    desc: "Berikan feedback, kami lakukan revisi hingga hasilnya 100% sesuai ekspektasi Anda.",
    color: "#f59e0b",
  },
  {
    Icon: FaRocket,
    num: "05",
    title: "Launch & Serah Terima",
    desc: "Website diluncurkan! Anda mendapat akses penuh, user guide, dan training CMS.",
    color: "#10b981",
  },
  {
    Icon: FaHeadset,
    num: "06",
    title: "Maintenance & Support",
    desc: "Kami tetap siap membantu setelah launch agar website selalu berjalan optimal.",
    color: "#ef4444",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-bg-light">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Cara Kerja</div>
          <h2 className="section-title">
            6 Tahap Mewujudkan <span>Website Impian</span> Anda
          </h2>
          <p className="section-desc">
            Proses yang terstruktur dan transparan — Anda tahu persis apa yang terjadi di setiap tahapnya.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="two-col"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="card reveal"
              style={{
                padding: "24px",
                display: "flex",
                gap: "18px",
                alignItems: "flex-start",
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              <div style={{ flexShrink: 0, textAlign: "center" }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "6px",
                  }}
                >
                  <step.Icon size={20} color="#fff" />
                </div>
                <div style={{ fontSize: "11px", fontWeight: 800, color: step.color, letterSpacing: "0.05em" }}>
                  {step.num}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "6px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
