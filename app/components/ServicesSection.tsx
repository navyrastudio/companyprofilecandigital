import {
  FaDesktop,
  FaBuilding,
  FaShoppingCart,
  FaCode,
  FaSyncAlt,
  FaShieldAlt,
  FaCheck,
} from "react-icons/fa";

const services = [
  {
    Icon: FaDesktop,
    title: "Landing Page",
    desc: "Halaman yang dirancang khusus untuk mengkonversi pengunjung menjadi pelanggan. Desain modern, loading cepat, dan call-to-action yang kuat.",
    points: ["Custom Design", "Mobile Responsive", "SEO Friendly"],
    color: "#3b82f6",
    bg: "#eff6ff",
  },
  {
    Icon: FaBuilding,
    title: "Company Profile",
    desc: "Wajah digital perusahaan Anda yang memancarkan profesionalisme. Bangun kepercayaan dan kredibilitas bisnis Anda secara online.",
    points: ["Multi-halaman", "CMS Terintegrasi", "Domain & Hosting"],
    color: "#004258",
    bg: "#f0f9ff",
  },
  {
    Icon: FaShoppingCart,
    title: "Toko Online / E-Commerce",
    desc: "Buka toko online lengkap dengan sistem pembayaran, manajemen produk, dan pengalaman belanja yang nyaman untuk pelanggan.",
    points: ["Payment Gateway", "Manajemen Produk", "Dashboard Admin"],
    color: "#10b981",
    bg: "#f0fdf4",
  },
  {
    Icon: FaCode,
    title: "Custom Web App",
    desc: "Solusi web berbasis kebutuhan spesifik bisnis Anda. Kami bangun sistem dari nol sesuai alur kerja perusahaan.",
    points: ["Fitur Custom", "Skalabel", "API Integration"],
    color: "#8b5cf6",
    bg: "#faf5ff",
  },
  {
    Icon: FaSyncAlt,
    title: "Redesain Website",
    desc: "Website lama kurang menarik? Kami transformasi tampilan dan performa website Anda tanpa kehilangan peringkat Google.",
    points: ["Audit Website", "UI/UX Upgrade", "Speed Optimization"],
    color: "#f59e0b",
    bg: "#fffbeb",
  },
  {
    Icon: FaShieldAlt,
    title: "Maintenance & Support",
    desc: "Pastikan website selalu berjalan optimal dengan layanan maintenance, update konten, dan technical support berkelanjutan.",
    points: ["Update Konten", "Backup Rutin", "24/7 Monitoring"],
    color: "#ef4444",
    bg: "#fff5f5",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-bg-light">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Layanan Kami</div>
          <h2 className="section-title">
            Solusi Digital <span>Lengkap</span> untuk Bisnis Anda
          </h2>
          <p className="section-desc">
            Dari perencanaan, desain, development, hingga maintenance — kami siap memandu Anda di setiap langkah.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((s, i) => (
            <div
              key={s.title}
              className="card reveal"
              style={{ padding: "28px 28px 24px", transitionDelay: `${i * 0.08}s` }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "18px",
                  border: `1px solid ${s.color}20`,
                }}
              >
                <s.Icon size={22} color={s.color} />
              </div>

              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "10px" }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--text-body)", fontSize: "14px", lineHeight: 1.7, marginBottom: "18px" }}>
                {s.desc}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                {s.points.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--text-body)" }}>
                    <FaCheck size={11} color={s.color} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
