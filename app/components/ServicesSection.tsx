import { ElementType } from "react";
import {
  FaDesktop,
  FaBuilding,
  FaShoppingCart,
  FaCode,
  FaSyncAlt,
  FaShieldAlt,
  FaCheck,
} from "react-icons/fa";
import servicesData from "../../data/services.json";

const iconMap: Record<string, ElementType> = {
  FaDesktop,
  FaBuilding,
  FaShoppingCart,
  FaCode,
  FaSyncAlt,
  FaShieldAlt,
};

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
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
            gap: "24px",
          }}
        >
          {servicesData.map((s, i) => {
            const IconComponent = iconMap[s.icon];
            return (
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
                  {IconComponent && <IconComponent size={22} color={s.color} />}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
